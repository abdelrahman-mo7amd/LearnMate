# LearnMate 🧠

> I got tired of opening 20 tabs just to study one thing... so I made this.

LearnMate is a small AI study buddy made with plain HTML, CSS, and JavaScript.
No React. No backend pain. Just me, caffeine, and too many console.logs.

It uses the Groq API with LLaMA 3.3 70B to help with studying, flashcards, quick explanations, and focus sessions.

---

## What it can do

* Chat with an AI tutor that explains stuff in simple words
* Generate flashcards from any topic
* Pomodoro focus timer because my attention span is fighting for its life
* Quick prompts for subjects like Math, Physics, Biology, History, and CS
* Login / Signup system (frontend only)
* Dark UI because my eyes deserve rights

---

## Screenshot badges because they look cool

![login](/login.png)
![web](/web.png)


---

# How to run it

## 1. Clone the project

```bash
git clone https://github.com/YOUR_USERNAME/LearnMate.git
cd LearnMate
```

---

## 2. Get a Groq API key

1. Go to `https://console.groq.com`
2. Make an account
3. Create an API key
4. Copy the key (`gsk_...`)

---

## 3. Open the project

You can literally just open `index.html`.

Or use a local server if you want to feel like a real developer:

```bash
npx serve .
```

or

```bash
python -m http.server 8080
```

---

## 4. Paste your API key

When the app opens, put your Groq API key in the input at the top.

It saves in `localStorage`, so you don't need to paste it every single time like a caveman.

---

## 5. Login

Demo account:

```txt
username: demo
password: demo123
```

Or make your own account.

(Accounts reset on refresh because there is no database. We die like frontend developers.)

---

# Project files

```txt
LearnMate/
├── index.html
├── style.css
├── auth.js
├── chat.js
└── README.md
```

### What each file does

* `index.html` → the structure
* `style.css` → all the styling and animations
* `auth.js` → login/signup logic
* `chat.js` → AI chat, flashcards, timer
* `README.md` → this thing you're reading right now

---

# Git commits

I split the project into multiple commits to make it look cleaner and easier to understand.

```bash
feat: initial HTML structure
feat: add premium styling
feat: auth system
feat: chat and tools
```

---

# Hackatime setup

I used Hackatime to track coding hours because watching numbers go up makes my brain happy.

## VS Code setup

1. Install the WakaTime extension
2. Open Command Palette
3. Search:

   ```txt
   WakaTime: API Key
   ```
4. Paste your Hackatime API key

Get your key here:

`https://hackatime.hackclub.com/my/api_key`

Then set the API URL to:

```txt
https://hackatime.hackclub.com/api
```

Done 👍

---

# Tech stack

* HTML
* CSS
* JavaScript
* Groq API
* LLaMA 3.3 70B

No frameworks were harmed during development.

---

# Deploying

You can host it anywhere static sites work:

* GitHub Pages
* Netlify
* Vercel

For GitHub Pages:

```bash
git remote add origin https://github.com/YOUR_USERNAME/LearnMate.git
git push -u origin main
```

Then:

```txt
Settings → Pages → Deploy from branch → main
```

---

# Notes

* The API key is stored in localStorage
* This project is frontend-only
* User accounts are temporary
* The AI model can be changed easily in `chat.js`

---

# License

MIT License

Use it, edit it, break it, fix it.

---

Made by me while pretending I was "just testing one small thing"
