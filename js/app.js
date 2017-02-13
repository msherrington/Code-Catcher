console.log('JS loaded!');
$(() => {



  const $codewall = $('.codewall');

  // code catcher dude
  const $coder = $('#coder');

  // vars for falling divs
  const $fallingDiv1 = $('#column1');
  const $fallingDiv2 = $('#column2');
  const $fallingDiv3 = $('#column3');
  const $fallingDiv4 = $('#column4');
  const $fallingDiv5 = $('#column5');
  const $fallingDiv6 = $('#column6');
  const $fallingDiv7 = $('#column7');
  const $fallingDiv8 = $('#column8');
  const $fallingDiv9 = $('#column9');
  const $fallingDiv10 = $('#column10');

  // array of falling divs, for random selection
  const $fallingDivs = [ $fallingDiv1, $fallingDiv2, $fallingDiv3, $fallingDiv4, $fallingDiv5, $fallingDiv6, $fallingDiv7, $fallingDiv8, $fallingDiv9, $fallingDiv10 ];

  //hide all falling divs before the game starts
  function hideFallingDivs() {
    for (let i = 0; i < $fallingDivs.length; i++) {
      $fallingDivs[i].hide();
    }
  }
  hideFallingDivs();

  // vars for images of falling divs
  const $fallingImage1 = $('#drop1');
  const $fallingImage2 = $('#drop2');
  const $fallingImage3 = $('#drop3');
  const $fallingImage4 = $('#drop4');
  const $fallingImage5 = $('#drop5');
  const $fallingImage6 = $('#drop6');
  const $fallingImage7 = $('#drop7');
  const $fallingImage8 = $('#drop8');
  const $fallingImage9 = $('#drop9');
  const $fallingImage10 = $('#drop10');

  // array of falling image vars, for random selection
  const $fallingImages = [ $fallingImage1, $fallingImage2, $fallingImage3, $fallingImage4, $fallingImage5, $fallingImage6, $fallingImage7, $fallingImage8, $fallingImage9, $fallingImage10 ];


  //create variable ready for randomly selecting a falling div
  let $randomArrayChoice = null;
  //create variable ready for randomly selecting a falling image
  let $imageFunctionChoice = null;



  function drop(){
    //array of functions to assign image to falling div
    const $imageFunctions = [ html, bug, css, css, bug, jScript, html, css, jScript, css, bug, html ];

    //generates random index of $fallingDivs and $fallingImages arrays
    $randomArrayChoice = Math.floor(Math.random()*$fallingImages.length);
    //generates random index of $imageFunctions array
    $imageFunctionChoice = Math.floor(Math.random()*$imageFunctions.length);

    //function assigns 'bug' image to falling div
    function bug() {
      $fallingImages[$randomArrayChoice].attr('src', 'images/bug.png', 'class', 'bug', 'height', '50px', 'width', '50px');
    }
    //function assigns 'html' image to falling div
    function html() {
      $fallingImages[$randomArrayChoice].attr('src', 'images/html.png', 'class', 'code');
    }
    //function assigns 'css' image to falling div
    function css() {
      $fallingImages[$randomArrayChoice].attr('src', 'images/css3.png', 'class', 'code');
    }
    //function assigns 'css' image to falling div
    function jScript() {
      $fallingImages[$randomArrayChoice].attr('src', 'images/javascript.png', 'class', 'code');
    }

    //chooses random image function and runs it
    $imageFunctions[$imageFunctionChoice]();

    //fades-in random div with image, animates div to make it fall
    $fallingDivs[$randomArrayChoice].fadeIn('slow').animate({
      top: 500
    }, {
      duration: 3000,
      easing: 'linear',
      complete: reset,
      progress: function() {
        // console.log($(this).position());
        if (($(this).position().top > 400) && ($(this).position().top < 500) && ($coder.position().left >= ($(this).position().left + 100)) && ($coder.position().left <= ($(this).position().left) - 100)) {
          alert('collide');
          // if id = bug, shake
        }
      }
    });
  }

  //reset the falling div to the top and hide it again
  function reset() {
    $(this).css({
      top: 0
    });
    $(this).hide();
  }

  //start random divs falling
  function startGame() {
    setInterval(() => {
      drop();
    }, 2000);
  }

  startGame();

  // drop();

  //event listener for arrrow keys to move coder
  var pressed = false;
  $(document).on('keydown', (e) => {
    if(!pressed){ //only start animation once
      const width = $codewall.width();
      switch (e.which) {
        case 37:
          console.log($coder.position());
          $coder.stop().animate({
            left: '-=' + width //allow the user the move the div over the whole doc
          }, 3000); //left arrow key
          break;
        case 39:
          console.log($coder.position());
          $coder.stop().animate({
            left: '+=' + width //allow the user the move the div over the whole doc
          }, 3000); //left arrow key
          break;
      }
    }
    pressed = true;
  }).on('keyup', () => {
    $coder.stop(); // stop the current animation
    pressed = false;
  });




  // OLD event listener for left/right arrow keys
  // $(document).on('keyup', (e) => {
  //   switch (e.which) {
  //     case 37:
  //       $coder.stop().animate({
  //         left: '-=80'
  //       }, () => {
  //       }); //left arrow key
  //       break;
  //     case 39:
  //       $coder.stop().animate({
  //         left: '+=80'
  //       }, () => {
  //         console.log($coder.position());
  //       }); //right arrow key
  //       break;
  //   }
  // });



  //event listener for when coder is moving
  // $coder.on('change' (e) {
  //   if ((e.target).position().left < -20) {
  //     $coder.position.left = -20
  //   }
  // });


//PSEUDO CODE

// work out how to place falling divs in relation to codeWall - DONE
//fade in falling objects - DONE
//iterate through divs to decide which one starts falling when - DONE
//location of div compared to top left corner of box
//function to place image on falling div - DONE
//function to decide whether div is "code or bug"

//styling: codeWall image
//sound effects!
//welcome screen with instructions page and play button
//main screen - timer, score, lives, hi score
//play again button

//THIS IS THE BOTTOM OF THE DOM CONTENT LOADER
});











// // let imgValue = null;
// function html(e) {
//   $(e.target).attr('src', 'images/html.png');
//   // imgValue = 'code';
//   $(e.target).off();
// }
// // function css(e) {
// //   $(e.target).attr('src', 'images/css.png');
// //   // imgValue = 'code';
// //   $(e.target).off();
// // }
// // function javascript(e) {
// //   $(e.target).attr('src', 'images/javascript.png');
// //   // imgValue = 'code';
// //   $(e.target).off();
// // }
// function bug() {
//   $(target).attr('src', 'images/bug.png');
//   // imgValue = 'bug';
//   $(target).off();
// }
