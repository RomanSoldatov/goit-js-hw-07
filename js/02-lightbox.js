import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}">
    </a>
  </li>`
    )
    .join("");
}

list.addEventListener("click", handleClick);
let lightbox;
function handleClick(event) {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const index = galleryItems.findIndex(
      (item) => item.original === event.target.parentElement.href
    );

    if (!lightbox) {
      lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
      });
    }

    lightbox.open(index);
  }
}

document.addEventListener("keydown", onKeyPress);

function onKeyPress(event) {
  if (event.key === "ArrowLeft" && lightbox) {
    lightbox.prev();
  } else if (event.key === "ArrowRight" && lightbox) {
    lightbox.next();
  } else if (event.key === "Escape" && lightbox) {
    lightbox.close();
  }
}

console.log(galleryItems);

// Завдання 2 - бібліотека SimpleLightbox
// Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.

// Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

// <li class="gallery__item">
//    <a class="gallery__link" href="large-image.jpg">
//       <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//    </a>
// </li>

// Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
