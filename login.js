function signUp() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (username && email && password) {
        document.getElementById('signup-message').textContent = "Sign Up Successful!";
        document.getElementById('signup-message').style.color = "green";
    } else {
        document.getElementById('signup-message').textContent = "Please fill in all fields.";
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username && password) {
        document.getElementById('login-message').textContent = "Login Successful!";
        document.getElementById('login-message').style.color = "green";
    } else {
        document.getElementById('login-message').textContent = "Please fill in all fields.";
    }
}
