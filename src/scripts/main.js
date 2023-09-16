const openPopupButton = document.querySelector(".header__right__btn");
const carouselBtn = document.querySelectorAll(".carousel__desc__btn--green");
const closePopupButton = document.querySelector("#close-popup");
const popup = document.querySelector("#popup");
const navBtn = document.querySelector(".nav__btn");
const submitBtn = document.querySelector(".submit-button");

function openPopup() {
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}

function closePopupOutsideClick(event) {
  if (event.target === popup) {
    closePopup();
  }
}

document.addEventListener("click", closePopupOutsideClick);
submitBtn.addEventListener("click", closePopup);
openPopupButton.addEventListener("click", openPopup);
navBtn.addEventListener("click", openPopup);
carouselBtn.forEach((item) => item.addEventListener("click", openPopup));
closePopupButton.addEventListener("click", closePopup);

// Функция для отправки данных формы на сервер
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    const formData = new FormData(event.target);

    fetch("php/send.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "Сообщение успешно отправлено") {
          console.log(data);
        } else {
          console.log("Произошла ошибка при отправке сообщения");
        }
      })
      .catch((error) => {
        console.error("Ошибка при отправке данных:", error);
      });
  });

/*-----------------------slider--------------------*/

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
  // Default parameters
  slidesPerView: 1,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
    },
    next: {
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

      const totalSlides = this.slides.length;

      document.getElementById("totalSlides").textContent = totalSlides;
    },
  },
});

const currentSlide = swiper.activeIndex + 1;
document.getElementById("currentSlide").textContent = currentSlide;
const totalSlides = swiper.slides.length;
document.getElementById("totalSlides").textContent = totalSlides;

const swiper1 = document.querySelector(".swiper").swiper;
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

const burger = document.querySelector(".burger-menu");
const list = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  list.classList.toggle("active");
});
