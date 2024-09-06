$(document).ready(function () {
  $.fn.BeerSlider = function (options) {
    options = options || {};
    return this.each(function () {
      new BeerSlider(this, options);
    });
  };

  $(".beer-slider").each(function (index, el) {
    $(el).BeerSlider({
      start: $(el).data("start"),
    });
  });

  $(".top-slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 700,
    fade: true,
    slidesToShow: 1,
    swipe: false,
    prevArrow: $(".top-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".top-slider-wrap .slider-navigation .slick-next"),
  });

  $(".buttons a").smoothScroll({});

  function initializeSlickSlider(sliderElement) {
    // Инициализация слайдера с поиском стрелок внутри контейнера слайда
    sliderElement.slick({
      dots: false,
      arrows: true,
      infinite: true,
      fade: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: sliderElement.closest(".slider-wrap").find(".slick-prev"),
      nextArrow: sliderElement.closest(".slider-wrap").find(".slick-next"),
    });
  }

  // Инициализация слайдера в первой вкладке
  initializeSlickSlider($("#tab-1 .slider"));

  // Переключение вкладок
  $(".tabs .tab").on("click", function () {
    const tabId = $(this).data("tab");

    // Активируем выбранную вкладку
    $(".tabs .tab").removeClass("active");
    $(this).addClass("active");

    // Показываем контент выбранной вкладки
    $(".tab-content").removeClass("active");
    $("#tab-" + tabId).addClass("active");

    // Инициализируем слайдер в активной вкладке, если он еще не был инициализирован
    const sliderElement = $("#tab-" + tabId + " .slider");
    if (!sliderElement.hasClass("slick-initialized")) {
      initializeSlickSlider(sliderElement);
    } else {
      // Перезапуск слайдера, если он уже инициализирован
      sliderElement.slick("setPosition");
    }
  });

  // Активируем первую вкладку по умолчанию
  $(".tabs .tab:first").click();

  function initializeSlickSlider2(sliderElement) {
    // Инициализация слайдера с поиском стрелок внутри контейнера слайда
    sliderElement.slick({
      dots: false,
      arrows: true,
      infinite: true,
      fade: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: sliderElement.closest(".slider-wrap2").find(".slick-prev"),
      nextArrow: sliderElement.closest(".slider-wrap2").find(".slick-next"),
    });
  }

  // Инициализация слайдера в первой вкладке
  initializeSlickSlider2($("#tab-5 .slider2"));

  // Переключение вкладок
  $(".tabs2 .tab").on("click", function () {
    const tabId2 = $(this).data("tab");

    // Активируем выбранную вкладку
    $(".tabs2 .tab").removeClass("active");
    $(this).addClass("active");

    // Показываем контент выбранной вкладки
    $(".tab-content-wrap2 .tab-content").removeClass("active");
    $("#tab-" + tabId2).addClass("active");

    // Инициализируем слайдер в активной вкладке, если он еще не был инициализирован
    const sliderElement = $("#tab-" + tabId2 + " .slider2");
    if (!sliderElement.hasClass("slick-initialized")) {
      initializeSlickSlider2(sliderElement);
    } else {
      // Перезапуск слайдера, если он уже инициализирован
      sliderElement.slick("setPosition");
    }
  });

  // Активируем первую вкладку по умолчанию
  $(".tabs2 .tab:first").click();

  $(".rooms-item1").on("click", function () {
    $(".select-rooms .tab1").addClass("active");
    $(".rooms-items").addClass("hide");
  });

  $(".rooms-item2").on("click", function () {
    $(".select-rooms .tab2").addClass("active");
    $(".rooms-items").addClass("hide");
  });
  $(".rooms-tab .bottom .back").on("click", function () {
    $(this).closest(".rooms-tab").addClass("hide");
    $(".rooms-items").removeClass("hide");
    $(".rooms-tab").removeClass("active");
  });
});
