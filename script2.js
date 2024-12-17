let pass_img = document.getElementById("pass-img");
let password = document.getElementById("password");
let signup_button = document.getElementById("signup-button");

pass_img.addEventListener("click", () => {
  if (password.type == "password") {
    pass_img.src = "eye-open (1).png";
    password.type = "text";
  } else {
    password.type = "password";
    pass_img.src = "eye-close.png";
  }
});

signup_button.addEventListener("click", () => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (fname && lname && email && password) {
    localStorage.setItem("First Name:", fname);
    localStorage.setItem("Last Name:", lname);
    localStorage.setItem("Email:", email);
    localStorage.setItem("password:", fname);

    Swal.fire({
      title: "Your data has been saved Successfully!",
      icon: "success",
      draggable: true
    });
  }
  else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Input All The fields!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });  }
});
