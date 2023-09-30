const button = document.querySelectorAll(".button");

const body = document.querySelector("body");

button.forEach(function (button) {
  button.addEventListener("click", function (e) {
      if (e.target.id === "grey") {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "green") {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "crimson") {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "bisque") {
        body.style.backgroundColor = e.target.id;
      }

      if (e.target.id === "purple") {
        body.style.backgroundColor = e.target.id;
      }
});
});
