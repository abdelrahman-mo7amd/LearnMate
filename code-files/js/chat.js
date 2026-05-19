const messagesArea = document.getElementById("messages-area");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

function saveApiKey() {

  const input = document.getElementById("api-key-input");

  API_KEY = input.value.trim();

  localStorage.setItem("groq_api_key", API_KEY);

  alert("API Key Saved");
}

function autoResize(textarea) {

  textarea.style.height = "auto";

  textarea.style.height = textarea.scrollHeight + "px";
}

function handleKey(event) {

  if (event.key === "Enter" && !event.shiftKey) {

    event.preventDefault();

    sendMessage();
  }
}

function injectPrompt(prompt) {

  chatInput.value = prompt;

  autoResize(chatInput);

  chatInput.focus();
}

function addMessage(content, role) {

  const welcome = document.getElementById("welcome-state");

  if (welcome) welcome.remove();

  const wrapper = document.createElement("div");

  wrapper.className = `message ${role}`;

  wrapper.innerHTML = `
    <div class="msg-avatar">
      ${role === "user" ? "U" : "AI"}
    </div>

    <div class="msg-bubble">
      ${formatMessage(content)}
    </div>
  `;

  messagesArea.appendChild(wrapper);

  messagesArea.scrollTop = messagesArea.scrollHeight;

  return wrapper;
}

function formatMessage(text) {

  return text
    .replace(/\n/g, "<br>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

function showTyping() {

  const typing = document.createElement("div");

  typing.className = "message assistant";

  typing.id = "typing-indicator";

  typing.innerHTML = `
    <div class="msg-avatar">AI</div>

    <div class="msg-bubble typing-bubble">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    </div>
  `;

  messagesArea.appendChild(typing);

  messagesArea.scrollTop = messagesArea.scrollHeight;
}

function removeTyping() {

  const typing = document.getElementById("typing-indicator");

  if (typing) typing.remove();
}

async function sendMessage() {

  const text = chatInput.value.trim();

  if (!text) return;

  if (!API_KEY) {
    alert("Please enter your Groq API key first.");
    return;
  }

  addMessage(text, "user");

  chatInput.value = "";

  autoResize(chatInput);

  showTyping();

  sendBtn.disabled = true;

  try {

    const response = await fetch(GROQ_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },

      body: JSON.stringify({
        model: MODEL,

        messages: [
          {
            role: "system",
            content:
              "You are a helpful AI tutor helping students study in a simple clear way."
          },
          {
            role: "user",
            content: text
          }
        ]
      })
    });

    const data = await response.json();

    removeTyping();

    const reply =
      data.choices?.[0]?.message?.content ||
      "No response generated.";

    addMessage(reply, "assistant");

  } catch (error) {

    removeTyping();

    addMessage(
      "Error connecting to Groq API.",
      "assistant"
    );

    console.error(error);

  } finally {

    sendBtn.disabled = false;
  }
}

function clearChat() {

  messagesArea.innerHTML = `
    <div class="welcome-state" id="welcome-state">
      <h2 class="welcome-title">
        Chat cleared
      </h2>
    </div>
  `;
}

function setMode(mode) {

  document.querySelectorAll(".view")
    .forEach(v => v.classList.remove("active"));

  document.querySelectorAll(".sidebar-item")
    .forEach(v => v.classList.remove("active"));

  document.getElementById(`view-${mode}`)
    .classList.add("active");

  event.target.classList.add("active");
}