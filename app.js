const images = [
  {
    thumbnailsrc: "./assets/thumbnail1.jpg",
    src: "./assets/flower1.jpg",
    alt: "Overhead view of many daisy flowers",
  },
  {
    thumbnailsrc: "./assets/thumbnail2.jpg",
    src: "./assets/flower2.jpg",
    alt: "Closeup of bright pink Chrysanthemums",
  },
  {
    thumbnailsrc: "./assets/thumbnail3.jpg",
    src: "./assets/flower3.jpg",
    alt: "Overhead view of many varieties of succulents",
  },
  {
    thumbnailsrc: "./assets/thumbnail4.jpg",
    src: "./assets/flower4.jpg",
    alt: "Closeup of light pink lilies",
  },
  {
    thumbnailsrc: "./assets/thumbnail5.jpg",
    src: "./assets/flower5.jpg",
    alt: "Overhead view of multiple purple and white crocus flowers",
  },
];

const smallContainer = document.getElementById("thumbnail-container");
let currentImgIndex = 0;

function createThumbnails() {
  images.forEach((thumbnail, index) => {
    let thumbnailPicture = document.createElement("img");
    thumbnailPicture.setAttribute("src", thumbnail.thumbnailsrc);
    thumbnailPicture.setAttribute("alt", thumbnail.value);
    thumbnailPicture.classList.add("thumbnail-image");
    smallContainer.appendChild(thumbnailPicture);
    thumbnailPicture.addEventListener("click", () => {
      currentImgIndex = index;
      createMainImage();
    });
  });
}
createThumbnails(images);

const mainContainer = document.getElementById("image-container");
let mainPicture = document.createElement("img");
mainPicture.setAttribute("src", images[currentImgIndex].src);
mainPicture.setAttribute("alt", images[currentImgIndex].alt);
mainPicture.classList.add("main-image");
mainContainer.appendChild(mainPicture);

function createMainImage() {
  mainPicture.setAttribute("src", images[currentImgIndex].src);
  mainPicture.setAttribute("alt", images[currentImgIndex].alt);
}

const leftButton = document.getElementById("button-left");
leftButton.addEventListener("click", () => {
  if (currentImgIndex == 0) {
    currentImgIndex += 4;
    mainPicture.setAttribute("src", images[currentImgIndex].src);
    mainPicture.setAttribute("alt", images[currentImgIndex].alt);
  } else {
    currentImgIndex -= 1;
    mainPicture.setAttribute("src", images[currentImgIndex].src);
    mainPicture.setAttribute("alt", images[currentImgIndex].alt);
  }
});

const rightButton = document.getElementById("button-right");
rightButton.addEventListener("click", () => {
  if (currentImgIndex == 4) {
    currentImgIndex -= 4;
    mainPicture.setAttribute("src", images[currentImgIndex].src);
    mainPicture.setAttribute("alt", images[currentImgIndex].alt);
  } else {
    currentImgIndex += 1;
    mainPicture.setAttribute("src", images[currentImgIndex].src);
    mainPicture.setAttribute("alt", images[currentImgIndex].alt);
  }
});

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.e;

  if (e.keyCode == "37") {
    if (currentImgIndex == 0) {
      currentImgIndex += 4;
      mainPicture.setAttribute("src", images[currentImgIndex].src);
      mainPicture.setAttribute("alt", images[currentImgIndex].alt);
    } else {
      currentImgIndex -= 1;
      mainPicture.setAttribute("src", images[currentImgIndex].src);
      mainPicture.setAttribute("alt", images[currentImgIndex].alt);
    }
  } else if (e.keyCode == "39") {
    if (currentImgIndex == 4) {
      currentImgIndex -= 4;
      mainPicture.setAttribute("src", images[currentImgIndex].src);
      mainPicture.setAttribute("alt", images[currentImgIndex].alt);
    } else {
      currentImgIndex += 1;
      mainPicture.setAttribute("src", images[currentImgIndex].src);
      mainPicture.setAttribute("alt", images[currentImgIndex].alt);
    }
  }
}
