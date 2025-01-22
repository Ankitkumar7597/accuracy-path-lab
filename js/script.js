document.querySelector('.menu-btn').addEventListener('click', function () {
    const sidebar = document.querySelector('.mobile-siderbar');
    const menubtn = document.querySelector('.menu-btn');
    sidebar.classList.toggle('active');
    menubtn.classList.toggle('active');
});


// swiper custom code

var swiper = new Swiper(".hero-carousel", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
        nextEl: ".hero-next",
        prevEl: ".hero-prev",
      },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    on: {
        init: function () {
          const activeSlide = document.querySelector('.swiper-slide-active .animated-text');
          if (activeSlide) {
            activeSlide.style.opacity = '1';
            activeSlide.style.transform = 'translateY(0)';
          }
        },
        slideChangeTransitionStart: function () {
          document.querySelectorAll('.animated-text').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
          });
        },
        slideChangeTransitionEnd: function () {
          const activeSlide = document.querySelector('.swiper-slide-active .animated-text');
          if (activeSlide) {
            activeSlide.style.opacity = '1';
            activeSlide.style.transform = 'translateY(0)';
          }
        },
      },
  });
var swiper = new Swiper(".testmonial-carousel", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
        nextEl: ".testmonial-next",
        prevEl: ".testmonial-prev",
      },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },

        slidesPerView: "1",
        spaceBetween: 0,
        
      });
