$(function(){
  $('.testimonial__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  
  $('.menu__btn').on('click', function(){
    $('.header__list').toggleClass('header__list--active');
    $('.header__search').toggleClass('header__search--active');
  });

  $('.header__search-input').on('focus', function() {
    $('.header__search-input').addClass('header__search-input-open');
    $('.header__search-btn').addClass('header__search-btn-show');
  });
  
  $('.header__search-input').on('blur', function() {
    if ($('.header__search-input').val() === '') {
      $('.header__search-input').removeClass('header__search-input-open');
      $('.header__search-btn').removeClass('header__search-btn-show');
    }
  });

  $('.header__search-btn').on('click', function() {
    $('.header__search-input').val('').focus();
  });
});
