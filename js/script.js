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


var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 1,
  perMove: 1,
  snap: boolean = true,
  arrows: true,
  speed: 3000,
} );
splide.mount();