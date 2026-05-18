if (!localStorage.getItem("demo")) {
    localStorage.setItem(
        "demo",
        JSON.stringify({
            name: "Demo User",
            username: "demo",
            password: "demo123"
        })
    )
}

function switchTab(tab) {
  document.querySelectorAll(".auth-tab").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".auth-form").forEach(form => form.classList.remove("active"));
  document.getElementById(`tab-${tab}`).classList.add("active");
  document.getElementById(`form-${tab}`).classList.add("active");
}

function handleSignup() {
    const name = document.getElementById('signup-name').value.trim();
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    const error = document.getElementById('signup-error');
    const success = document.getElementById('signup-success');

    error.textContent = "";
    success.textContent = "";

    if (!name || !username || !password) {
        error.textContent = "Please fill all fields.";
        return;
    }

    if (password.length < 8) {
        error.textContent = "Password must be at least 8 characters."
        return
    }

    if (localStorage.getItem(username)) {
        error.textContent = "Username already exists.";
        return
    }

    const user = {
        name, username, password
    };

    localStorage.setItem(username, JSON.stringify(user));
    success.textContent = "Account Created Successfully!";

    setTimeout(()=>{
        switchTab("login");
    }, 1000);
}

function handleLogin() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const error = document.getElementById('login-error');

    error.textContent = "";
    const user = JSON.parse(localStorage.getItem(username));

    if(!user || user.password !== password) {
        error.textContent = "Invalid username or password.";
        return
    }

    localStorage.setItem("logged_in_user", username);
    loadUser();
    document.getElementById("auth-screen").classList.add("hidden");
    document.getElementById("app-screen").classList.remove("hidden");
}

function handleLogout() {
    localStorage.removeItem("logged_in_user");
    location.reload();
}

function loadUser() {
    const username = localStorage.getItem("logged_in_user");

    if(!username) return;
    const user = JSON.parse(localStorage.getItem(username));
    document.getElementById("sidebar-name").textContent = user.name;
    document.getElementById("sidebar-avatar").textContent = user.name.charAt(0).toUpperCase();
    document.getElementById("auth-screen").classList.add("hidden");
    document.getElementById("app-screen").classList.remove("hidden")
}

window.addEventListener("DOMContentLoaded", loadUser);