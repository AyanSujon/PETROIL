//  Back To top Button

//  Back To top Button
// ===== Menu Fixed =======
let main_menu = document.querySelector('.main_menu')

console.log(main_menu)

window.addEventListener('scroll', ()=>{
  let scrolling = this.scrollY

  if(scrolling > 100){
    main_menu.classList.add('fixed_menu')
  }
  else{
    main_menu.classList.remove('fixed_menu')
  }
})
// }}}}} Start Card Slider {{{{{{{{{
  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows:false,
          dotsClass:true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// }}}}} End Card Slider {{{{{{{{{

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});