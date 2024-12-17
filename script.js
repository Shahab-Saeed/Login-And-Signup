// Get DOM elements
let login_password = document.getElementById("login-password");
let login_btn = document.getElementById("login-btn");
let img = document.getElementById("img");

// Toggle password visibility
img.addEventListener("click", () => {
  if (login_password.type == "password") {
    img.src = "eye-close.png";
    login_password.type = "text";
  } else {
    login_password.type = "password";
    img.src = "eye-open(1).png";
  }
});

login_btn.addEventListener("click", () => {
  let login_email = document.getElementById("login-email").value;
  let login_password = document.getElementById("login-password").value;

  let stored_email = localStorage.getItem("Email:");
  let stored_password = localStorage.getItem("Password:");

  if (login_email && login_password) {
    if (login_email === stored_email) {
      if (login_password === stored_password) {
        Swal.fire({
          title: "Connecting...",
          icon: "success",
          draggable: true,
        });
      }
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Input All The fields!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  }
});
