const buttonElement = document.querySelector(".btn");

buttonElement.addEventListener("mouseover", (event) => {
  /* console.log(event.pageY - buttonElement.offsetTop);
  console.log(event.pageX - buttonElement.offsetLeft); */
  const x = event.pageX - buttonElement.offsetLeft;
  const y = event.pageY - buttonElement.offsetTop;
  buttonElement.style.setProperty("--xPos", x + "px");
  buttonElement.style.setProperty("--yPos", y + "px");
});