const carousel = document.querySelector(".carousel");
const carouselButtons = document.querySelector(".carousel-buttons");

fetch("../src/data/data.json")
  .then((response) => {
    return response.json()
  }).then((data) => {
    data.forEach((d, index ) => {
      let image = document.createElement("img");
      image.src = d.source;
      image.alt = d.alternateText;
      image.classList.add("carousel-image");

      let button = document.createElement("button");
      button.classList.add("button");

      if(index == 0) {
        image.classList.add("actived")
        button.classList.add("selected")
      }

      button.addEventListener("click", () => {
        disableSelectedButton();
        button.classList.add("selected");
        hideActiveImage();
        showBackgroundImage(index);
      });

      carousel.appendChild(image);
      carouselButtons.appendChild(button);
    })
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
  const carouselImages = document.querySelectorAll(".carousel-image");
  carouselImages[index].classList.add("actived");
}