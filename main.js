$(document).ready(function () {

    $('.fdf-screen-slider__wrapper').slick({
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '5vw',
        infinite: true,
        dots: false,
        arrows: true,
        appendArrows: '.fdf-screen-slider__wrapper',
        prevArrow: `
      <button type="button" class="slick-prev">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A070C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>`,
        nextArrow: `
      <button type="button" class="slick-next">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A070C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>`,
    });
});