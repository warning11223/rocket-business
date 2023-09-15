// Находим элементы на странице
const openPopupButton = document.querySelector(".header__right__btn");
const carouselBtn = document.querySelectorAll(".carousel__desc__btn--green");
const closePopupButton = document.querySelector("#close-popup");
const popup = document.querySelector("#popup");
const navBtn = document.querySelector(".nav__btn");

// Функция для открытия всплывающего окна
function openPopup() {
  popup.style.display = "flex";
}

// Функция для закрытия всплывающего окна
function closePopup() {
  popup.style.display = "none";
}

// Функция для закрытия всплывающего окна при клике вне окна
function closePopupOutsideClick(event) {
  if (event.target === popup) {
    closePopup();
  }
}

// Добавляем обработчик события для клика на документе
document.addEventListener("click", closePopupOutsideClick);

// Добавляем обработчики событий
openPopupButton.addEventListener("click", openPopup);
navBtn.addEventListener("click", openPopup);
carouselBtn.forEach((item) => item.addEventListener("click", openPopup));
closePopupButton.addEventListener("click", closePopup);

// Функция для отправки данных формы на сервер
function submitForm(event) {
  event.preventDefault(); // Предотвращаем стандартное действие отправки формы

  const form = document.getElementById("contact-form");
  const formData = new FormData(form);

  // Отправка данных на сервер
  fetch("server-script.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Данные успешно отправлены!");
        closePopup();
      } else {
        alert("Произошла ошибка при отправке данных.");
      }
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
}

// Добавляем обработчик события для отправки формы
document.getElementById("contact-form").addEventListener("submit", submitForm);

/*-----------------------slider--------------------*/

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
  // Default parameters
  slidesPerView: 1,
  effect: "creative",
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ["100%", 0, 0],
    },
  },
  navigation: false,
  on: {
    slideChange: function () {
      // Получите текущий активный слайд
      const currentSlide = this.activeIndex + 1;

      // Обновите элемент с номером текущего слайда
      document.getElementById("currentSlide").textContent = currentSlide;

      // Получите общее количество слайдов
      const totalSlides = this.slides.length;

      // Обновите элемент с максимальным количеством слайдов
      document.getElementById("totalSlides").textContent = totalSlides;
    },
  },
});

const currentSlide = swiper.activeIndex + 1;
document.getElementById("currentSlide").textContent = currentSlide;
const totalSlides = swiper.slides.length;
document.getElementById("totalSlides").textContent = totalSlides;

const swiper1 = document.querySelector(".swiper").swiper;

// Now you can use all slider methods like
swiper1.slideNext();

const prevButton = document.querySelector(".carousel__arrow--left");
const nextButton = document.querySelector(".carousel__arrow--right");

prevButton.addEventListener("click", () => {
  swiper1.slidePrev(); // Переключиться на предыдущий слайд
});

nextButton.addEventListener("click", () => {
  swiper1.slideNext(); // Переключиться на следующий слайд
});

/*-----------------burger-menu-------------------*/

// Получаем кнопку и список
const burger = document.querySelector(".burger-menu");
const list = document.querySelector(".nav");

// Добавляем обработчик клика на кнопку
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  list.classList.toggle("active"); // Переключаем класс для применения анимации
});
