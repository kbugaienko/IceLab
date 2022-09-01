$(function(){
  $('.testimonial__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $('.menu__btn').on('click', function(){
    $('.header__list').toggleClass('header__list--active');
  });
});
