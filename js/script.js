jQuery(($) => {
  $(".select").on("click", ".select__head", function () {
      if ($(this).hasClass("open")) {
          $(this).removeClass("open");
          $(this).next().fadeOut();
      } else {
          $(".select__head").removeClass("open");
          $(".select__list").fadeOut();
          $(this).addClass("open");
          $(this).next().fadeIn();
      }
  });

  $(".select").on("click", ".select__item", function () {
      $(".select__head").removeClass("open");
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
      if (!$(e.target).closest(".select").length) {
          $(".select__head").removeClass("open");
          $(".select__list").fadeOut();
      }
  });
});

//===Mini PopUp========================
//===Переменные========================
// let min_popUp = document.querySelector('.mini__wrapper__one')
let btnLogoNext = document.querySelector('.btnLogoNext')
// let btnLogo = document.querySelectorAll('.cross__one__btn')
let min_popUp_two = document.querySelector('.mini__wrapper__two')
let close_popUp = document.querySelectorAll('.cross__one')

//=========Лисенеры Mini PopUp=========
// btnLogo.forEach(btn => {
//     btn.addEventListener('click', showMinPopUp)
// })
btnLogoNext.addEventListener('click', showMinPopUp__two)

// function showMinPopUp() {
//     min_popUp.classList.add('active__min__popUp')
// }
function showMinPopUp__two() {
    // min_popUp.classList.remove('active__min__popUp')
    min_popUp_two.classList.add('active__min__popUp__thanks')
}

close_popUp.forEach(btn => {
  btn.addEventListener('click', closeAllPopUp)
})
function closeAllPopUp() {
  // min_popUp.classList.remove('active__min__popUp')
  min_popUp_two.classList.remove('active__min__popUp__thanks')
}



let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

let nav__clicks = document.querySelectorAll('.nav__click')
nav__clicks.forEach( btn => {
    btn.addEventListener('click', function(){
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
    })
})

document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !menu.contains(e.target)) {
    menuBtn.classList.remove("active");
    menu.classList.remove('active');
  }
});


var splide = new Splide( '.splide.bigWidth__slide', {
  type   : 'loop',
  perPage: 1,
  perMove: 1,
  snap: boolean = true,
  arrows: true,
  speed: 3000,
} );
splide.mount();

var splide = new Splide( '.splide.smallWidth__slide', {
  type   : 'loop',
  perPage: 1,
  perMove: 1,
  snap: boolean = true,
  arrows: true,
  speed: 3000,
} );
splide.mount();
