const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

let API_KEY = localStorage.getItem("groq_api_key") || "";

const MODEL = "llama-3.3-70b-versatile";