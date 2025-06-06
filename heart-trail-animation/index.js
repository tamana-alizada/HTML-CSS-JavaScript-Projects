const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  /* Each time that the mouse moves, create a span */
  const spanElement = document.createElement("span");
  spanElement.style.top = xPos + "px";
  spanElement.style.left = yPos + "px";
  /* because random number here is between 0 and 1, we want it to be between 0 and 100 */
  const size = Math.random() * 200;
  spanElement.style.width = size + "px";
  spanElement.style.height = size + "px";
  bodyElement.appendChild(spanElement);
  setTimeout(() => {
    spanElement.remove();
  }, 3000);
})
