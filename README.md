# 🧠 LearnMate

> Studying should not require 20 browser tabs, 3 YouTube videos, and an emotional support calculator.

So I built **LearnMate**.

LearnMate is a simple AI study buddy made with **HTML, CSS, and JavaScript**.

No React.

No backend.

No database.

Just me, a keyboard, and several hours of asking:

*"Why is this not working?"*

It uses the Groq API and LLaMA 3.3 70B to help students learn faster and waste less time searching for answers.

---

# Features

### AI Tutor

Ask questions and get simple explanations without reading a 10-page article first.

---

### Flashcard Generator

Type any topic and generate flashcards instantly.

Because reading notes is boring.

---

### Pomodoro Timer

Stay focused for 25 minutes.

Or at least try.

---

### Quick Study Prompts

Fast prompts for:

* Math
* Physics
* Biology
* History
* Computer Science

One click and you're ready to study.

---

### Login & Signup

A simple frontend-only authentication system.

Will it survive a real cyber attack?

Absolutely not.

But it works.

---

### Dark Mode UI

Because staring at a white screen at 2 AM feels illegal.

---

# Screenshots

![login](/login.png)

![web](/web.png)

---

# Getting Started

## Clone the project

```bash
git clone https://github.com/abdelrahman-mo7amd/LearnMate.git
cd LearnMate
```

---

## Get a Groq API Key

1. Go to https://console.groq.com
2. Create an account
3. Generate an API key
4. Copy it somewhere safe

If you lose it, don't blame me.

---

## Run the project

The lazy way:

```bash
open index.html
```

The developer way:

```bash
npx serve .
```

Or:

```bash
python -m http.server 8080
```

Both make you look professional.

---

## Add your API Key

Paste your Groq API key into the app.

It will be saved in localStorage so you don't have to paste it every time.

Technology is amazing.

---

## Login

Demo account:

```txt
username: demo
password: demo123
```

Or create your own account.

Just remember:

Accounts disappear when the page refreshes.

Because databases cost effort and money.

---

# 📂 Project Structure

```txt
LearnMate/
├── index.html
├── style.css
├── auth.js
├── chat.js
└── README.md
```

### What they do

```txt
index.html  -> The skeleton
style.css   -> Makes it look less ugly
auth.js     -> Login and signup logic
chat.js     -> AI chat, flashcards, timer
README.md   -> The document nobody reads
```

---

# ⏱️ Hackatime

I used Hackatime to track coding hours.

Watching the number go up gives me motivation.

And makes me feel productive.

---

# 🛠️ Tech Stack

* HTML
* CSS
* JavaScript
* Groq API
* LLaMA 3.3 70B

No frameworks.
No 500 MB node_modules folder.

---

# Deployment

You can deploy LearnMate on:

* GitHub Pages
* Netlify
* Vercel

GitHub Pages example:

```bash
git remote add origin https://github.com/YOUR_USERNAME/LearnMate.git
git push -u origin main
```

Then:

```txt
Settings -> Pages -> Deploy from branch -> main
```

Wait a few seconds.
Boom.
You're a full-stack developer.

(Well... half-stack.)

---

# Important Notes

* API keys are stored in localStorage
* Accounts are temporary
* The AI model can be changed in `chat.js`
* If something breaks, check the console first
* If the console looks scary, welcome to web development

---

# 📜 License

MIT License

Do whatever you want.
---

## Made By

Built by a student who wanted one study tool instead of opening twenty tabs.

Bigger than expected.
