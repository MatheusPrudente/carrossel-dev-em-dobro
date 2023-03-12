const carouselButtons = document.querySelectorAll(".button");
const carouselImages = document.querySelectorAll(".carousel-image");

carouselButtons.forEach((element, index) => {
  element.addEventListener("click", () => {
    disableSelectedButton();
    element.classList.add("selected");
    hideActiveImage();
    showBackgroundImage(index);
  });
});

function disableSelectedButton() {
  const button = document.querySelector(".selected");
  button.classList.remove("selected");
}

function hideActiveImage() {
  const image = document.querySelector(".actived");
  image.classList.remove("actived");
}

function showBackgroundImage(index) {
  carouselImages[index].classList.add("actived");
}