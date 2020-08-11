var cost = parseInt($(".productPrice").html());
var name = $(".productName").html();
var price = parseInt($(".productPrice").html());

// hide cart content when there's no product in it
$(".button").hide();
$(".number").hide();

// function to add product to the cart and display it there
  $('.buy').click(function(){
        $(".product").text(name);                       // displays product name in the cart
        $(".selectedPrice").text("₹"+cost);             // displays product price in the cart


       $(this).closest('.bottom').addClass("clicked");   //changes card layout when user taps on buy now
    
       $("#total").text("Total cost: ₹");                 // displays "total cost" in the cart
       $("#cost").text(cost);                             // displays cost in the cart
       $(".selectedImage").attr("src", "nike101.png");    // adds image in the cart
       
       // unhides everything that was previously hidden by pressing remove
       $(".selectedImage").show();                            
       $(".selectedPrice").show();                            
       $(".product").show();
       $("#cost").show();
       $("#total").show();
       $(".button").show();
       $(".number").show();


       // choosing number of products to be bought (+/-)
        $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);

                $input.change();
                $("#cost").text(cost * count); // displays cost*no. of items
                return false;
      });

      $('.plus').click(function () {
          var $input = $(this).parent().find('input');

          var count = parseInt($input.val()) + 1;
          count = count < 1 ? 1 : count;
          $input.val(count);

          $input.change();
          $("#cost").text(cost * count);

          return false;
      });
  });

  //function to remove product from the cart
  $('.remove').click(function(){
      var $input = $('.input');
      $input.val(1); //sets value of number of products to 1

      $('.bottom').removeClass("clicked");
      //hides everything in the cart
      $(".selectedImage").hide();
      $(".selectedPrice").hide();
      $(".product").text("Your cart is empty.");
      $("#cost").hide();
      $("#total").hide();
      $(".button").hide();
      $(".number").hide();
  });

  //handling donation part
  $(".denomination").click(function(event) {
      $(".denomination").removeClass("selected").prop('checked', false);
      $(".denomination-other input").removeClass("selected").val('');
      $(this).addClass("selected");
      $(this).children(":first").prop('checked', true);
      $(".buttonDonate").text('Donate ₹' + $(this).children(":first").val())
  });

  $(".denomination-other input").on('keypress', function (event) {
    
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
    
    $(".denomination").removeClass("selected").prop('checked', false);
    $(this).addClass("selected");
    $(".buttonDonate").text('Donate ₹' + $(this).val() + key );
  });

    // click counter (no. of products in the shopping cart)
    $('.buy').click(function() {
      $('#clickme').html(function(i, val) { return val*1+1 });
      
    });
    $('.remove').click(function() {
      $('#clickme').html(function(i, val) { return val*1-1 });
    });







      