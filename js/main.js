// update current year of copyright in footer
$(() => {
  $('[data-copyright-year]').html(new Date().getFullYear());
});

document.addEventListener('DOMContentLoaded', () => {
  const lenis = new Lenis({
    lerp: 0.09,
    smoothWheel: true,
    wheelMultiplier: 0.7,
    gestureOrientation: 'vertical',
    normalizeWheel: false,
    smoothTouch: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  // Сброс прокрутки при загрузке страницы
  window.addEventListener('load', () => {
    if (window.innerWidth > 767) {
      setTimeout(() => {
        lenis.scrollTo(0, {
          immediate: true
        });
      }, 0);
    }
  });
  // Управление Lenis с помощью кнопок
  document.querySelectorAll("[data-lenis-start]").forEach(el => {
    el.addEventListener("click", () => lenis.start());
  });
  document.querySelectorAll("[data-lenis-stop]").forEach(el => {
    el.addEventListener("click", () => lenis.stop());
  });
  document.querySelectorAll("[data-lenis-toggle]").forEach(el => {
    el.addEventListener("click", function() {
      this.classList.toggle("stop-scroll");
      if (this.classList.contains("stop-scroll")) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });
  });
});

function checkScaleAndSetOpacity() {
  document.querySelectorAll('.explode').forEach(explode => {
    const transform = window.getComputedStyle(explode).transform;
    if (transform !== 'none') {
      const matrixValues = transform.match(/matrix.*\((.+)\)/)[1].split(', ');
      const scaleX = parseFloat(matrixValues[0]);
      if (scaleX <= 0.1) {
        explode.style.opacity = '0';
      } else {
        explode.style.opacity = '1';
      }
    }
  });
}

window.addEventListener('load', checkScaleAndSetOpacity);
setInterval(checkScaleAndSetOpacity, 100);

document.querySelectorAll('.button-main').forEach(button => {
  const explode = button.querySelector('.explode');
  const btnTxt = button.querySelector('.btn-text');
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    explode.style.left = `${x}px`;
    explode.style.top = `${y}px`;
    explode.style.transform = 'scale(50)';
    btnTxt.style.color = 'white';
  });
  button.addEventListener('mouseleave', () => {
    explode.style.transform = 'scale(.1)';
    btnTxt.style.color = '#080808';
  });
});

document.querySelectorAll('.nav_link-c').forEach(button => {
  const explode = button.querySelector('.explode');
  const btnTxt = button.querySelector('.btn-text');
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    explode.style.left = `${x}px`;
    explode.style.top = `${y}px`;
    explode.style.transform = 'scale(50)';
    btnTxt.style.color = 'white';
  });
  button.addEventListener('mouseleave', () => {
    explode.style.transform = 'scale(.1)';
    btnTxt.style.color = '';
  });
});

document.querySelectorAll('[button-main-text-white]').forEach(button => {
  const explode = button.querySelector('.explode');
  const btnTxt = button.querySelector('.btn-text');
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    explode.style.left = `${x}px`;
    explode.style.top = `${y}px`;
    explode.style.transform = 'scale(50)';
    btnTxt.style.color = 'white';
  });
  button.addEventListener('mouseleave', () => {
    explode.style.transform = 'scale(.1)';
    btnTxt.style.color = '';
  });
});

document.querySelectorAll('[button-main-text-white-big]').forEach(button => {
  const explode = button.querySelector('.explode');
  const btnTxt = button.querySelector('.btn-text');
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    explode.style.left = `${x}px`;
    explode.style.top = `${y}px`;
    explode.style.transform = 'scale(70)';
    btnTxt.style.color = 'white';
  });
  button.addEventListener('mouseleave', () => {
    explode.style.transform = 'scale(.1)';
    btnTxt.style.color = '';
  });
});

if (window.innerWidth >= 767) {
  let typeSplit = new SplitType('[animate]', {
    types: 'lines, words, chars',
    tagName: 'span'
  })
  gsap.from('[animate] .char', {
    opacity: 0,
    duration: 2,
    ease: 'power2.out',
    stagger: 0.05,
    scrollTrigger: {
      trigger: '[animate]',
      start: 'top 90%',
      end: 'bottom 20%',
      scrub: true
    }
  })
}

if (window.innerWidth >= 767) {
  document.addEventListener('DOMContentLoaded', function() {
    let typeSplit2 = new SplitType('[animate-2]', {
      types: 'lines, words, chars',
      tagName: 'span'
    });
    gsap.from('[animate-2] .char', {
      opacity: 0,
      duration: 2,
      ease: 'power2.out',
      stagger: 0.05,
      scrollTrigger: {
        trigger: '[animate-2]',
        start: 'top 90%',
        end: 'bottom 20%',
        scrub: true
      }
    });
  });
}

const swiperSlides = document.querySelectorAll('.swiper-slide');
swiperSlides.forEach(slide => {
  slide.style.width = '600px';
});
swiperSlides.forEach(slide => {
  const hoverIcon = slide.querySelector('.hover-icon');
  slide.addEventListener('mouseenter', () => {
    slide.style.transition = 'background-color 0.7s ease, color 0.3s ease';
    slide.style.backgroundColor = '#080808';
    slide.style.color = '#FFFFFF';
  });
  slide.addEventListener('mouseleave', () => {
    slide.style.transition = 'background-color 0.7s ease, color 0.3s ease';
    slide.style.backgroundColor = '#F5F5F5';
    slide.style.color = '#080808';
  });
});
// Swiper
let swiper = new Swiper('.swiper', {
  speed: 2100,
  slidesPerView: 1,
  spaceBetween: 14,
  allowTouchMove: true,
  loop: true,
  autoplay: false,
  mousewheel: {
    forceToAxis: true, // Позволяет вертикальной прокрутке не влиять на горизонтальный слайдер
    sensitivity: 1, // Настройка чувствительности прокрутки
  },
  keyboard: true,
  simulateTouch: true, // Включает симуляцию касаний для десктопов
  touchRatio: 1, // Коэффициент чувствительности тачпада
  touchAngle: 45,
  breakpoints: {
    767: {
      slidesPerView: 2.25,
      spaceBetween: 10,
    },
  }
});

var audio = new Audio("https://dl.dropboxusercontent.com/s/03lxlbaek2ye22m/click_min.mp3");
const audios = {};
document.querySelectorAll(".awards-list-item").forEach((el, index) => {
  audios[index] = audio.cloneNode();
  el.addEventListener("mouseenter", () => audios[index].play());
});

document.addEventListener('scroll', function() {
  if (window.innerWidth > 767) {
    const homeElement = document.querySelector('.showreal-home');
    const videoElement = document.querySelector('.show-real-video');
    const lap = document.querySelector('.lap-top-bg');
    const triggerSection = document.querySelector('.section.hero.home');
    const sectionHeight = triggerSection.offsetHeight;
    const scrollPosition = window.scrollY;
    const scrollFraction = scrollPosition / sectionHeight;
    let startSize = (window.innerWidth >= 1921) ? 60 : 48;
    let endSize = 100;
    if (scrollFraction <= 0.20) {
      homeElement.style.width = `${startSize}%`;
      homeElement.style.borderRadius = '1.7vw';
      videoElement.style.borderRadius = '1.2vw';
      lap.style.borderRadius = '1.7vw';
    } else if (scrollFraction > 0.20 && scrollFraction <= 0.33) {
      const newSize = startSize + ((endSize - startSize) * ((scrollFraction - 0.20) / 0.13));
      // Расчет нового значения для радиусов
      const newBorderRadiusHomeLap = 1.7 - (1.7 * ((scrollFraction - 0.20) / 0.13));
      const newBorderRadiusVideo = 1.2 - (1.2 * ((scrollFraction - 0.20) / 0.13));
      homeElement.style.width = `${newSize}%`;
      homeElement.style.borderRadius = `${newBorderRadiusHomeLap}vw`;
      videoElement.style.borderRadius = `${newBorderRadiusVideo}vw`;
      lap.style.borderRadius = `${newBorderRadiusHomeLap}vw`;
    } else {
      homeElement.style.width = `${endSize}%`;
      homeElement.style.borderRadius = '0vw';
      videoElement.style.borderRadius = '0vw';
      lap.style.borderRadius = '0vw';
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth > 767) {
    // Устанавливаем начальные стили для элементов
    const heading2 = document.querySelector('.heading-2.text-align-center.size');
    const iconFullIcon = document.querySelector('.icon-clutch-full-icon');
    const firstLineTestimonial = document.querySelector('.first-line-testimoniall');
    const iconSmall = document.querySelector('.icon-clutch-small');
    const headingWrapTestimonial = document.querySelector('.heading-wrap-testimoniall');
    const iconFull = document.querySelector('.icon-clutch-full');

    function setInitialStyles() {
      heading2.style.width = '19.5rem';
      heading2.style.opacity = '1';
      iconFullIcon.style.opacity = '0';
      firstLineTestimonial.style.height = '4vw';
      firstLineTestimonial.style.transform = 'scale(1)';
      firstLineTestimonial.style.opacity = '1';
      iconSmall.style.opacity = '1';
      headingWrapTestimonial.style.width = '33rem';
      iconFull.style.width = '3.875vw';
      iconFull.style.opacity = '1';
    }

    function animateStyles() {
      heading2.style.width = '0rem';
      heading2.style.opacity = '0';
      heading2.style.transition = 'width 0.5s ease, opacity 0.4s ease';
      iconFullIcon.style.opacity = '1';
      iconFullIcon.style.transition = 'opacity 0.7s ease';
      firstLineTestimonial.style.height = '0vw';
      firstLineTestimonial.style.transform = 'scale(0.4)';
      firstLineTestimonial.style.opacity = '0';
      firstLineTestimonial.style.transition = 'height 0.7s ease, transform 0.7s ease, opacity 0.3s ease';
      iconSmall.style.opacity = '0';
      iconSmall.style.transition = 'opacity 0.5s ease';
      headingWrapTestimonial.style.width = '4rem';
      headingWrapTestimonial.style.transition = 'width 0.7s ease';
      iconFull.style.width = '16.6vw';
      iconFull.style.opacity = '1';
      iconFull.style.transition = 'width 0.7s ease, opacity 0.7s ease';
    }
    setInitialStyles();
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
      const headerBlock = document.querySelector('.header-block');
      const rect = headerBlock.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      if (rect.top <= windowHeight / 5 && rect.bottom >= windowHeight / 5) {
        if (scrollTop > lastScrollTop) {
          // Скролл вниз
          animateStyles();
        } else {
          // Скролл вверх
          setInitialStyles();
        }
      }
      lastScrollTop = scrollTop;
    });
  }
});

const magnets2 = document.querySelectorAll('.social-footer-wrap');
const strength2 = 10; // Сила магнитного эффекта
magnets2.forEach(magnet => {
  magnet.addEventListener('mousemove', (e) => {
    const magnetRect = magnet.getBoundingClientRect();
    const magnetX = magnetRect.left + magnetRect.width / 2;
    const magnetY = magnetRect.top + magnetRect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const distX = (mouseX - magnetX) / magnetRect.width * strength2;
    const distY = (mouseY - magnetY) / magnetRect.height * strength2;
    magnet.style.transform = `translate(${distX}px, ${distY}px)`;
  });
  magnet.addEventListener('mouseleave', () => {
    magnet.style.transform = 'translate(0, 0)';
  });
});

document.querySelectorAll('.social-footer').forEach(button => {
const explode = button.querySelector('.explode');
button.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  explode.style.left = `${x}px`;
  explode.style.top = `${y}px`;
  explode.style.transform = 'scale(20)';
});
button.addEventListener('mouseleave', () => {
  explode.style.transform = 'scale(.1)';
});
});

document.querySelectorAll('.nav_link-cta').forEach(button => {
const explode = button.querySelector('.explode');
const btnTxt2 = button.querySelector('.btn-text');
button.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  explode.style.left = `${x}px`;
  explode.style.top = `${y}px`;
  explode.style.transform = 'scale(70)';
  btnTxt2.style.color = '#fff'
});
button.addEventListener('mouseleave', () => {
  explode.style.transform = 'scale(.1)';
  btnTxt2.style.color = ''
});
});

document.getElementById('callButton').addEventListener('click', function() {
  document.getElementById('menuButton').click();
});

document.getElementById("cards").onmousemove = (e) => {
for (const card of document.getElementsByClassName("service-card")) {
  const rect = card.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);
}
};

function checkHeight() {
const element = document.querySelector('.cards-cases-left-wrap');
if (window.innerHeight >= 800 && window.innerHeight <= 840) {
  element.classList.add('height');
} else {
  element.classList.remove('height');
}
}
window.addEventListener('load', checkHeight);
window.addEventListener('resize', checkHeight);

let lastScrollTop = 0;
document.addEventListener("scroll", () => {
const screenWidth = window.innerWidth;
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if (screenWidth > 767) {
  if (scrollTop > lastScrollTop) {
    // Скролл вниз
    document.querySelector('.header-btn-wrap').style.transition = 'width 0.7s ease';
    document.querySelector('.header-btn-wrap').style.width = '16rem';
    document.querySelector('.nav-link-wrap').style.transition = 'transform 0.7s ease, width 0.7s ease, opacity 0.7s ease';
    document.querySelector('.nav-link-wrap').style.transform = 'scale(0.6)';
    document.querySelector('.nav-link-wrap').style.width = '0rem';
    document.querySelector('.nav-link-wrap').style.opacity = '0';
    document.querySelector('.nav-new').style.transition = 'width 0.7s ease';
    document.querySelector('.nav-new').style.width = '24rem';
    document.querySelector('.nav_link-c.contact.grey').style.transition = 'transform 0.7s ease, opacity 0.7s ease';
    document.querySelector('.nav_link-c.contact.grey').style.transform = 'scale(1)';
    document.querySelector('.nav_link-c.contact.grey').style.opacity = '1';
  } else {
    // Скролл вверх
    document.querySelector('.header-btn-wrap').style.transition = 'width 0.7s ease';
    document.querySelector('.header-btn-wrap').style.width = '7rem';
    document.querySelector('.nav-link-wrap').style.transition = 'transform 0.7s ease, width 0.7s ease, opacity 0.7s ease';
    document.querySelector('.nav-link-wrap').style.transform = 'scale(1)';
    document.querySelector('.nav-link-wrap').style.width = '20rem';
    document.querySelector('.nav-link-wrap').style.opacity = '1';
    document.querySelector('.nav-new').style.transition = 'width 0.7s ease';
    document.querySelector('.nav-new').style.width = '41rem';
    document.querySelector('.nav_link-c.contact.grey').style.transition = 'transform 0.7s ease, opacity 0.7s ease';
    document.querySelector('.nav_link-c.contact.grey').style.transform = 'scale(0.6)';
    document.querySelector('.nav_link-c.contact.grey').style.opacity = '0';
  }
  // Обновляем последнюю позицию скролла
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}
});

document.addEventListener('DOMContentLoaded', function() {
const navNew = document.querySelector('.nav-new');
const logoWhite = document.querySelector('.logo-white');
const logoBlack = document.querySelector('.logo-black');
const sections = document.querySelectorAll('[section-color]');
const btn = document.querySelector('.nav_link-c.contact.grey');
const btnTxt = document.querySelector('.nav_link-c.contact.grey .btn-text.opacity-90');
const navTxt = document.querySelectorAll('.nav-new .footer-nav-link.hover');

function updateNavStyles() {
  const navRect = navNew.getBoundingClientRect();
  let sectionColor = 'white'; // По умолчанию
  if (window.innerWidth > 767) {
    // Проверка цвета секции только для больших экранов
    sections.forEach(section => {
      const sectionRect = section.getBoundingClientRect();
      if (navRect.top >= sectionRect.top && navRect.bottom <= sectionRect.bottom) {
        sectionColor = section.getAttribute('section-color');
      }
    });
    if (sectionColor === 'black') {
      navNew.style.backgroundColor = '#191919';
    } else {
      navNew.style.backgroundColor = '#FAFAFA';
    }
  }
  // Применение стилей в зависимости от ширины экрана
  if (window.innerWidth <= 767) {
    // Проверка цвета секции для мобильных устройств
    sections.forEach(section => {
      const sectionRect = section.getBoundingClientRect();
      if (navRect.top >= sectionRect.top && navRect.bottom <= sectionRect.bottom) {
        sectionColor = section.getAttribute('section-color');
      }
    });
    if (sectionColor === 'black') {
      logoWhite.style.opacity = '100';
      logoWhite.style.zIndex = '3';
      logoBlack.style.opacity = '0';
      logoBlack.style.zIndex = '2';
    } else {
      logoWhite.style.opacity = '0';
      logoWhite.style.zIndex = '2';
      logoBlack.style.opacity = '100';
      logoBlack.style.zIndex = '3';
    }
  } else {
    // Стили для больших экранов
    if (sectionColor === 'black') {
      logoWhite.style.opacity = '100';
      logoWhite.style.zIndex = '3';
      logoBlack.style.opacity = '0';
      logoBlack.style.zIndex = '2';
    } else {
      logoWhite.style.opacity = '0';
      logoWhite.style.zIndex = '2';
      logoBlack.style.opacity = '100';
      logoBlack.style.zIndex = '3';
    }
  }
  // Обновление стилей кнопок и текста
  if (sectionColor === 'black') {
    btn.style.backgroundColor = '#404040';
    btnTxt.style.color = '#fff';
    navTxt.forEach(element => {
      element.style.color = '#fff';
    });
  } else {
    btn.style.backgroundColor = '#E5E5E5';
    btnTxt.style.color = '#080808';
    navTxt.forEach(element => {
      element.style.color = '#080808';
    });
  }
}
// Запускаем проверку при загрузке страницы
updateNavStyles();
// Обновляем стили при прокрутке
window.addEventListener('scroll', updateNavStyles);
// Обновляем стили при изменении размера окна
window.addEventListener('resize', updateNavStyles);
});


document.addEventListener('DOMContentLoaded', function() {
const burgerWrap = document.querySelector('.burger-wrap');
const logoWhite = document.querySelector('.logo-white');
const logoBlack = document.querySelector('.logo-black');
// Функция для переключения стилей
function toggleLogoStyles() {
  const isActive = logoWhite.style.opacity === '100';
  if (isActive) {
    // Сброс стилей при втором клике
    logoWhite.style.opacity = '';
    logoWhite.style.zIndex = '';
    logoBlack.style.opacity = '';
    logoBlack.style.zIndex = '';
  } else {
    // Установка стилей при первом клике
    logoWhite.style.opacity = '100';
    logoWhite.style.zIndex = '3';
    logoBlack.style.opacity = '0';
    logoBlack.style.zIndex = '2';
  }
}
// Привязка события клика к burgerWrap
burgerWrap.addEventListener('click', toggleLogoStyles);
});

document.querySelectorAll('.social-footer').forEach(button => {
const explode = button.querySelector('.explode');
button.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  explode.style.left = `${x}px`;
  explode.style.top = `${y}px`;
  explode.style.transform = 'scale(20)';
});
button.addEventListener('mouseleave', () => {
  explode.style.transform = 'scale(.1)';
});
});

document.querySelectorAll('.nav_link-c').forEach(button => {
const explode = button.querySelector('.explode');
const btnTxt = button.querySelector('.btn-text');
button.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  explode.style.left = `${x}px`;
  explode.style.top = `${y}px`;
  explode.style.transform = 'scale(50)';
  btnTxt.style.color = 'white';
});
button.addEventListener('mouseleave', () => {
  explode.style.transform = 'scale(.1)';
  btnTxt.style.color = '';
});
});

document.addEventListener('DOMContentLoaded', () => {
const preloader = document.getElementById('preloader');
const startPreloader = document.getElementById('startPreloader');
// Функция для скрытия прелодера
function hidePreloader() {
  if (preloader) {
    preloader.style.display = 'none';
  }
}
// Обработчик события перед закрытием/перезагрузкой страницы
window.addEventListener('beforeunload', (event) => {
  if (!event.target.activeElement.hasAttribute('internal-link')) {
    sessionStorage.setItem('preloaderClicked', 'false');
  }
});
// Проверяем, был ли уже выполнен автоклик по кнопке
if (!sessionStorage.getItem('preloaderClicked') || sessionStorage.getItem('preloaderClicked') === 'false') {
  // Если нет, нажимаем кнопку
  if (startPreloader) {
    startPreloader.click();
  }
  // Устанавливаем флаг в сессионное хранилище
  sessionStorage.setItem('preloaderClicked', 'true');
} else {
  // Если был клик, скрываем прелодер
  hidePreloader();
}
// Обрабатываем внутренние ссылки
document.addEventListener('click', (event) => {
  if (event.target.matches('[internal-link]')) {
    hidePreloader();
  }
});
});


! function(o, c) {
var n = c.documentElement,
  t = " w-mod-";
n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document);


WebFont.load({
google: {
  families: ["Lora:regular,500,700"]
}
});
