$("button").click(function(){
    $logo = $('#logo');
    $icon = $('.navbar-toggler');
    $img = $('.img');
    $body = $('#Home-content');
    $($img).toggleClass('imgLogo');

    // $($icon).toggleClass('newLocation');
    // $($icon).toggleClass('disappear');
    // setTimeout(function(){
    // //    $($icon).toggleClass('newLocation');
    // $($body).toggleClass('blurBg');

    // }, 700);
});

// $(function() {
//     $(document).click(function (event) {
//       $('.navbar-collapse').collapse('hide');
//       $(".img").toggleClass('newLocation2');
//     });
//   });

$(document).click(function(e) {
	if (!$(e.target).is('.navbar-collapse')) {
        $('.collapse').collapse('hide');
        // $('.icon').toggleClass('newLocation');
        // setTimeout(function(){
        //     //    $($icon).toggleClass('newLocation');
        //     $($body).toggleClass('blurBg');
        
        //     }, 700);

    }
    // else {
    // $($body).toggleClass('blurBg');
    // // $('.navbar-collapse').slideToggle();
    // }
});

$(window).scroll(function() {
    /* affix after scrolling 100px */
    if ($(document).scrollTop() > 50) {
      $('.navbar').addClass('blurry');
      $('.mainLogo').addClass('Logo');
    } else {
      $('.navbar').removeClass('blurry');
      $('.mainLogo').removeClass('Logo');

    }
  });


  $(function () {
    var words = ["Home", "Home", "Home", "Home", "Home"];
    var wordIndex = 0;
    var randTime = 1500; //how long each letter should shuffle
    var waitTime = 4000; //how long each word stay normal
  
    setInterval(function () {
      if (wordIndex > words.length - 1) {
        wordIndex = 0;
      }
      $('.Link1').html("").css({
        width: words[wordIndex].length / 2 * 45 + "px"
      });
      var letters = words[wordIndex].split("");
  
      letters.forEach(function (letter) {
        $('.Link1').append('<span class="letter">' + letter + "</span>");
      });
  
      $('.letter').each(function () {
        var l = $(this);
  
        setTimeout(function () {
          clearInterval(randomize);
          l.text(letters[l.index()]);
  
        }, randTime);
  
        var randomize = setInterval(function () {
          l.text(String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33));
        }, 50);
      });
      var w = Math.floor(Math.random() * (words.length - 1));
      while (w === wordIndex) {
        w = Math.floor(Math.random() * (words.length - 1));
      }
      wordIndex = w;
    }, waitTime);
  });

  $(function () {
    var words = ["Team", "Team", "Team", "Team", "Team"];
    var wordIndex = 0;
    var randTime = 1500; //how long each letter should shuffle
    var waitTime = 4000; //how long each word stay normal
  
    setInterval(function () {
      if (wordIndex > words.length - 1) {
        wordIndex = 0;
      }
      $('.Link2').html("").css({
        width: words[wordIndex].length / 2 * 45 + "px"
      });
      var letters = words[wordIndex].split("");
  
      letters.forEach(function (letter) {
        $('.Link2').append('<span class="letter">' + letter + "</span>");
      });
  
      $('.letter').each(function () {
        var l = $(this);
  
        setTimeout(function () {
          clearInterval(randomize);
          l.text(letters[l.index()]);
  
        }, randTime);
  
        var randomize = setInterval(function () {
          l.text(String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33));
        }, 50);
      });
      var w = Math.floor(Math.random() * (words.length - 1));
      while (w === wordIndex) {
        w = Math.floor(Math.random() * (words.length - 1));
      }
      wordIndex = w;
    }, waitTime);
  });