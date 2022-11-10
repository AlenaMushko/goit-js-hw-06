const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const galleryEl = document.querySelector(".gallery");

// const onImagesList = images.map((image) => {
//   const liImagesEl = document.createElement("li");
//   const imgImagesEl = document.createElement("img");
//   imgImagesEl.src = image.url;
//   imgImagesEl.alt = image.alt;

//   liImagesEl.append(imgImagesEl);

//   return liImagesEl;
// });

// galleryEl.append(...onImagesList);

const galleryEl = document.querySelector(".gallery");
const onImagesList = images
  .map(
    (image) =>
      `<li class="gallery__list"><img class="gallery__img" src="${image.url}" alt="${image.alt}"></li>`
  )
  .join("");

console.log(onImagesList);
galleryEl.insertAdjacentHTML("beforeend", onImagesList);
