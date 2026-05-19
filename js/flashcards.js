async function generateFlashcards() {

  const topic = document.getElementById("flashcard-topic").value;

  const count = document.getElementById("flashcard-count").value;

  const output = document.getElementById("flashcard-output");

  if (!topic) return;

  output.innerHTML = `
    <div class="tool-card">
      Generating flashcards...
    </div>
  `;

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
              `Generate ${count} flashcards about ${topic}.
              
Return format:
Q: question
A: answer`
          }
        ]
      })
    });

    const data = await response.json();

    const text = data.choices[0].message.content;

    const cards = text.split("Q:");

    output.innerHTML = "";

    cards.forEach(card => {

      if (!card.trim()) return;

      const parts = card.split("A:");

      if (parts.length < 2) return;

      const question = parts[0].trim();

      const answer = parts[1].trim();

      const div = document.createElement("div");

      div.className = "flashcard";

      div.innerHTML = `
        <div class="fc-front">
          ${question}
          <span class="fc-badge">Question</span>
        </div>

        <div class="fc-back">
          ${answer}
        </div>
      `;

      div.addEventListener("click", () => {
        div.classList.toggle("open");
      });

      output.appendChild(div);
    });

  } catch (err) {

    output.innerHTML = `
      <div class="tool-card">
        Failed generating flashcards.
      </div>
    `;
  }
}