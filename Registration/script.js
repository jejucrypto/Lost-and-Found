const dialog = document.getElementById("forgotpassdialog");

function showDialog() {
    dialog.showModal()
}

function hide() {
    dialog.close()
}

window.onload = function () {
    showLogin();
};

function showLogin() {
    document.getElementById("loginForm").classList.add("active");
    document.getElementById("signupForm").classList.remove("active");
    document.getElementById("loginbutton").style.backgroundColor = 'white';
    document.getElementById("signupbutton").style.backgroundColor = '';
}

function showSignUp() {
    document.getElementById("signupForm").classList.add("active");
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("signupbutton").style.backgroundColor = 'white';
    document.getElementById("loginbutton").style.backgroundColor = '';
}
