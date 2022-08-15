$(document).ready(function () {
  // MODAL
  var modalText = {
    starflix: {
      title: "Starflix",
      tag: "ENTERTAINMENT APP",
      detail:
        "Starflix is a great project, where I applied almost everything I know about React. Here you can search for movies and series by genre, title and actors, you can add them to your watchlist. It uses react-router, redux, styled-components, my own hooks, react-icons, formik, material-ui and more. It is not ready for production yet, I am working on it. You can ask for my project files on Github.",
      link: "https://github.com/exequiel-mas/starflix",
    },
    weather: {
      title: "Weather App",
      tag: "WEATHER APP",
      detail:
        "Weather App was a challenging project. Developed by me and a partner. We used 3 different APIs and included features like changing the theme, check the weather in any city and from your location. We used react-context, styled-components, sass, and more libraries.",
      link: "https://weather-app-le.netlify.app/",
    },
    quizzical: {
      title: "Quizzical App",
      tag: "QUIZ GAME",
      detail:
        "Quizzical is a Quiz Game buit in React. You can learn a lot of things by choosing from many categories.",
      link: "https://quizz-app-exe.netlify.app",
    },
    sibblings: {
      title: "Find Sibblings",
      tag: "CARDS GAME",
      detail:
        "This is an App where I tested my Javascript knowledge and applied Bootstrap for styling. The best thing was that I added several functionalities that this kind of games do not usually have.",
      link: "https://findsiblings.netlify.app/",
    },
    diezmil: {
      title: "Diez Mil",
      tag: "DICE GAME",
      detail:
        "This project was a great challenge. I had to use all my Javascript knowledge. Create a complex logic and implement a lot of functions. It still has a lot of room for improvement.",
      link: "https://diez-mil-exe-mas.netlify.app/",
    },
    random: {
      title: "Random Advice Generator",
      tag: "API CHALLENGE",
      detail: "Javascript Challenge taken from FrontEndMentor Challenges",
      link: "https://random-advicer-massimelli.netlify.app/",
    },
    mundial: {
      title: "Mundial Qatar Fixture",
      tag: "FIXTURE APP",
      detail:
        "The day of the world cup draw I was so excited that I decided to make an interactive fixture in Javascript.Here we applied Javascript and Bootstrap",
      link: "https://github.com/exequiel-mas/mundial-app",
    },
    joblist: {
      title: "Job Listing App",
      tag: "React Challenge",
      detail:
        "This project was a big React challenge, applying filters that condition the rendering in different parts of the tree.",
    },
    petshop: {
      title: "PetShop Ecommerce",
      tag: "FRONT END CHALLEGE",
      detail:
        "In this project I put my HTML and CSS knowledge to the test. Includes mobile and desktop layout",
    },
    manage: {
      title: "Manage Web",
      tag: "LANDING PAGE",
      detail:
        "In this project I put my HTML and CSS knowledge to the test. Includes mobile and desktop layout",
    },
    picsome: {
      title: "Pic Some",
      tag: "REACT ECOMMERCE",
      detail: "In this project I put my Advanced React knowledge in practice",
      link: "https://picsome-ex-mas.netlify.app",
    },
    meme: {
      title: "Meme Generator",
      tag: "Scrimba React Course",
      detail: "Tackling React Basics",
      link: "https://meme-generator-ex-mas.netlify.app",
    },
    forkify: {
      title: "Forkify App",
      tag: "FOOD RECIPES APP",
      detail: "Tackling Javascript Advanced",
      link: "https://github.com/exequiel-mas/forkify.git",
    },
  };

  $("#gallery .button").on("click", function () {
    fillModal(this.id);
    $(".modal-wrap").addClass("visible");
  });

  $(".close").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  $(".mask").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  var carousel = $("#carousel"),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $("#next").click(function () {
    shiftSlide(-1);
  });
  $("#prev").click(function () {
    shiftSlide(1);
  });

  carousel.on("mousedown", function () {
    if (carousel.hasClass("transition")) return;
    dragStart = event.pageX;
    $(this).on("mousemove", function () {
      dragEnd = event.pageX;
      $(this).css("transform", "translateX(" + dragPos() + "px)");
    });
    $(document).on("mouseup", function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $(".carousel-wrap, .slide").css("width", slideWidth);
    $(".modal").css("max-width", slideWidth);
    $("#carousel").css("left", slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass("transition")) return;
    dragEnd = dragStart;
    $(document).off("mouseup");
    carousel
      .off("mousemove")
      .addClass("transition")
      .css("transform", "translateX(" + direction * slideWidth + "px)");
    setTimeout(function () {
      if (direction === 1) {
        $(".slide:first").before($(".slide:last"));
      } else if (direction === -1) {
        $(".slide:last").after($(".slide:first"));
      }
      carousel.removeClass("transition");
      carousel.css("transform", "translateX(0px)");
    }, 700);
  }

  function fillModal(id) {
    $("#modal .title").text(modalText[id].title);
    $("#modal .detail").text(modalText[id].detail);
    $("#modal .tag").text(modalText[id].tag);
    if (modalText[id].link)
      $("#modal .button")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].link);

    $.each($("#modal li"), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($("#modal .slide"), function (index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + "-" + index + ".jpg') center center/cover",
        backgroundSize: "cover",
      });
    });
  }
});
