
const Notes = (() => {
  const STORE_KEY = 'studymind_notes';

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || [];
    } catch { return []; }
  }

  function save(notes) {
    localStorage.setItem(STORE_KEY, JSON.stringify(notes));
  }

  function render() {
    const notes = load();
    const list  = document.getElementById('notes-list');
    const empty = document.getElementById('notes-empty');
    if (!list) return;

    list.innerHTML = '';

    if (notes.length === 0) {
      empty.style.display = 'flex';
      return;
    }
    empty.style.display = 'none';

    [...notes].reverse().forEach((note, reversedIdx) => {
      const realIdx = notes.length - 1 - reversedIdx;
      const el = document.createElement('div');
      el.className = 'note-card';
      el.style.setProperty('--note-color', note.color || '#e8a840');

      el.innerHTML = `
        <div class="note-top">
          <span class="note-tag">${escapeHtml(note.tag || 'General')}</span>
          <div class="note-actions">
            <button class="note-pin-btn ${note.pinned ? 'pinned' : ''}"
              onclick="Notes.togglePin(${realIdx})" title="${note.pinned ? 'Unpin' : 'Pin'}">
              📌
            </button>
            <button class="note-del-btn" onclick="Notes.deleteNote(${realIdx})" title="Delete">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
        <p class="note-body">${escapeHtml(note.text)}</p>
        <span class="note-date">${formatDate(note.createdAt)}</span>
      `;
      list.appendChild(el);
    });
  }

  function addNote() {
    const textEl  = document.getElementById('note-input');
    const tagEl   = document.getElementById('note-tag-select');
    const colorEl = document.querySelector('.note-color-btn.selected');

    const text  = textEl.value.trim();
    const tag   = tagEl?.value || 'General';
    const color = colorEl?.dataset.color || '#e8a840';

    if (!text) {
      textEl.focus();
      textEl.style.borderColor = 'var(--rose)';
      setTimeout(() => textEl.style.borderColor = '', 1200);
      return;
    }

    const notes = load();
    notes.push({ text, tag, color, pinned: false, createdAt: Date.now() });
    save(notes);
    textEl.value = '';
    render();
    showToast('Note saved ✓');
  }

  function deleteNote(idx) {
    const notes = load();
    notes.splice(idx, 1);
    save(notes);
    render();
  }

  function togglePin(idx) {
    const notes = load();
    notes[idx].pinned = !notes[idx].pinned;
    save(notes);
    render();
  }

  function clearAll() {
    if (!confirm('Delete all notes? This cannot be undone.')) return;
    save([]);
    render();
  }

  function sendToChat(text) {
    setMode('chat');
    setTimeout(() => injectPrompt('Help me understand this note: ' + text), 150);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatDate(ts) {
    if (!ts) return '';
    const d = new Date(ts);
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
      + ' · ' + d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  }

  function showToast(msg) {
    let toast = document.getElementById('sm-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'sm-toast';
      toast.className = 'sm-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  }

  function initColorPicker() {
    document.querySelectorAll('.note-color-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.note-color-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });
    const first = document.querySelector('.note-color-btn');
    if (first) first.classList.add('selected');
  }

  function initKeyboard() {
    const input = document.getElementById('note-input');
    if (!input) return;
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) addNote();
    });
  }

  function init() {
    initColorPicker();
    initKeyboard();
    render();
  }

  return { init, addNote, deleteNote, togglePin, clearAll, sendToChat, render };
})();