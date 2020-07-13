function name (){
  var slider = tns({
    container: '.carusel_slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    speed: 1500,
   /*  axis: "vertical", */
    autoplayTimeout: 2500,
    navPosition: "bottom"
  });
  
/*   document.querySelector('.slick-prev').onclick = function () {
    slider.goTo('prev');
  };
  document.querySelector('.slick-next').onclick = function () {
    slider.goTo('next');
  }; */
};
function name1 (){
  var slider = tns({
    container: '.portfolio_slider',
    items: 2,
    slidesToScroll: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    speed: 4500,
   /*  axis: "vertical", */
    autoplayTimeout: 3500,
    navPosition: "bottom"
  });
};
name();
name1();


$("a[href^='#']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});
$(window).scroll(function(){
  if($(this).scrollTop() > 800) {
    $(".conect")
        .addClass('dropdown_conect_active')
        .removeClass('dropdown_conect')
    $(".conect1")
        .addClass('dropdown-content_conect_active')
        .removeClass('dropdown-content_conect')
  }else{
    $(".conect")
      .addClass('dropdown_conect')
      .removeClass('dropdown_conect_active')
    $(".conect1")
      .addClass('dropdown-content_conect')
      .removeClass('dropdown-content_conect_active')
  }
});
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu_wrapper'),
  menuItem = document.querySelectorAll('a'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_wrapper_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_wrapper_active');
      });
  });
});





/* var sliderPortfolio = tns({
  container: '.portfolio_slider',
  items: 3,
  slideBy: 'page',
  autoplay: true,
  controls: false,
  navPosition: "bottom",
}); */

/* $(document).ready(function(){
  $('.portfolio_slider').slick(
    {
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  }
  );
  
}); */


/* {
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
centerPadding: '60px',
slidesToShow: 3,
responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }
]
} */