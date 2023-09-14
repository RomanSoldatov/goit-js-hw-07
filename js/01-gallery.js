import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }, index) => `
       <li class="gallery__item" data-index="${index}">
       <a class="gallery__link" href="${original}">
       <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
  `
    )
    .join("");
}

function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const currentImg = event.target.closest(".gallery__item");
  const index = currentImg.dataset.index;
  const instance = basicLightbox.create(
    `<div class="modal"><img src="${galleryItems[index].original}" alt="${galleryItems[index].description}" class="gallery__image" /></div>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  instance.show();

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      const openModal = document.querySelector(".modal");
      if (openModal) {
        instance.close();
      }
    }
  }
}
