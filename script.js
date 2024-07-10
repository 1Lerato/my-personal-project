function buyCake() {
  let name = prompt("What is your name?");
  let age = prompt("How old are you");

  if (age >= 18) {
    alert("Hi " + name + ", you can buy chocolate cake! 😃");
  } else {
    alert("Sorry " + name + ", you cannot buy chocolate cake! 🤕");
  }

  let buyButton = document.querySelector("button");
  buyButton.addEventListener("click", buyCake);
}
