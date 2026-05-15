const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", () => {
  const username = usernameElement.value;
  const password = passwordElement.value;

  if (username === "nhatlinh@gmail.com" && password === "12345") {
    alert("Success Login");
    window.location.href = "success.html";
  } else {
    alert("Login failed");
    usernameElement.style.borderColor = "red";
    passwordElement.style.borderColor = "red";
  }
});
