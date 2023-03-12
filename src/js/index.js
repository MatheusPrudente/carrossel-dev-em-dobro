const carousel = document.querySelector(".carousel");
const carouselButtons = document.querySelector(".carousel-buttons");
const information = document.querySelector(".information");
const scrollTime = 4000;

const scroll = setInterval(() => {
  const buttons = document.querySelectorAll(".button");

  for (let index = 0; index < buttons.length; index++) {
    let element = buttons[index];
    if (element.classList.contains("selected")) {
      let nextElement = buttons[0];
      let nextIndex = 0;

      if (buttons[index + 1]) {
        nextIndex = index + 1;
        nextElement = buttons[nextIndex];
      }

      rotateCarousel(nextElement, nextIndex);
      break;
    }
  }
}, scrollTime);

fetch("../src/data/data.json")
  .then((response) => {
    return response.json()
  }).then((data) => {
    show(data);
  });

function show(data) {
  let logo = document.createElement("img");
  logo.src = data.logo.source;
  logo.alt = data.logo.alternateText;
  logo.classList.add("logo");

  let description = document.createElement("p");
  description.classList.add("description");
  description.textContent = data.description;

  information.appendChild(logo);
  information.appendChild(description);

  data.gallery.forEach((image, index) => {
    let imageElement = document.createElement("img");
    imageElement.src = image.source;
    imageElement.alt = image.alternateText;
    imageElement.classList.add("carousel-image");

    let buttonElement = document.createElement("button");
    buttonElement.classList.add("button");

    if (index == 0) {
      imageElement.classList.add("actived")
      buttonElement.classList.add("selected")
    }

    buttonElement.addEventListener("click", () => {
      rotateCarousel(buttonElement, index);
    });

    carousel.appendChild(imageElement);
    carouselButtons.appendChild(buttonElement);
  })
}

function rotateCarousel(element, index) {
  disableSelectedButton();
  element.classList.add("selected");
  hideActiveImage();
  showBackgroundImage(index);
}

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