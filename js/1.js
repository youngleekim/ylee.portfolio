$(document).ready(function(){

console.clear();

const losImages = document.querySelectorAll("#app");
const elApp = document.querySelector("#app");

elApp.addEventListener("click", () => {
  let elScene = document.querySelector(`[data-scene="${elApp.dataset.state}"]`);
  const elImg = elScene.querySelector('[data-key="img1"]');

  // FIRST
  const firstRect = elImg.getBoundingClientRect();

  const state = (elApp.dataset.state =
                 elApp.dataset.state === "detail" ? "gallery" : "detail");
  elScene = document.querySelector(`[data-scene="${state}"]`);

  requestAnimationFrame(() => {
    const elNextImg = elScene.querySelector('[data-key="img1"]');

    // LAST
    const lastRect = elNextImg.getBoundingClientRect();

    // INVERT
    const deltaX = firstRect.left - lastRect.left;
    const deltaY = firstRect.top - lastRect.top;
    const deltaW = firstRect.width / lastRect.width;
    const deltaH = firstRect.height / lastRect.height;

    elNextImg.style.transition = "none";
    elNextImg.style.transformOrigin = `top left`;
    elNextImg.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`;

    // PLAY
    requestAnimationFrame(() => {
      elNextImg.style.transition = "transform .5s cubic-bezier(.5,0,.5,1)";
      elNextImg.style.transform = "none";
    });
  });
});


setTimeout(function(){
  elApp.click();
},1500);

});