console.log('JS loaded!');
$(() => {

  const $codewall = $('.codewall');

  // code catcher dude
  const $coder = $('#coder');

  // var for falling divs
  const $fallingDivs = $('.column');

  //hide falling divs before game starts
  $fallingDivs.hide();

  //event listener for arrrow keys to move coder
  var pressed = false;
  $(document).on('keydown', (e) => {
    if(!pressed){ //only start animation once
      const width = $codewall.width();
      switch (e.which) {
        case 37:  //left arrow key
          // console.log($coder.position());
          $coder.stop().animate({
            left: '-=' + width //allow coder to move along whole codewall
          }, 3000);
          break;
        case 39:  //right arrow key
          // console.log($coder.position());
          $coder.stop().animate({
            left: '+=' + width //allow coder to move along whole codewall
          }, 3000);
          break;
      }
    }
    pressed = true;
  }).on('keyup', () => {
    $coder.stop(); // stop the current animation
    pressed = false;
  });

  let $score = 0;
  const $scoreDisplay = $('.score');


  function drop(){
    //array to assign image to falling div
    const images = ['bug', 'html', 'html', 'html', 'html', 'html', 'css', 'javascript'];
    //generates random index of $fallingDivs and $fallingImages arrays
    const $randomDiv = $fallingDivs.eq(Math.floor(Math.random()*$fallingDivs.length));
    const chosenImage = images[Math.floor(Math.random() * images.length)];

    //assigns random img to falling div and changes class
    $randomDiv
      .find('img')
      .attr('src', `images/${chosenImage}.png`)
      .attr('class', chosenImage);

    let catchResult = null;

    //fades-in random div with image, animates div to make it fall
    $randomDiv.fadeIn('slow').animate({
      top: 500
    }, {
      duration: 3000,
      easing: 'linear',
      complete: reset,
      progress: function() {
        // && ($(this).position().top < 500)
        if (($(this).position().top >= 460) && ($coder.position().left < ($(this).position().left + 20)) && ($coder.position().left > ($(this).position().left) - 20)) {
          $coder.stop();
          pressed = false;
          if (chosenImage === 'bug' && catchResult === null) {
            catchResult = 'bug';
            // if id = bug, shake
            $coder.addClass('shaking'); //not sure where to put the reset
            pressed = true;
          } else if (chosenImage === 'html' && catchResult === null) {
            catchResult = 'html';
            $score++;
            $scoreDisplay.text($score);
            console.log($score);
          } else if (chosenImage === 'css' && catchResult === null) {
            catchResult = 'css';
            $score = $score + 3;
            $scoreDisplay.text($score);
            console.log($score);
          } else if (chosenImage === 'javascript' && catchResult === null) {
            catchResult = 'javascript';
            $score = $score + 5;
            $scoreDisplay.text($score);
            console.log($score);
          }
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
    $coder.removeClass('shaking'); // where to move this?
  }

  //start random divs falling
  function startGame() {
    setInterval(() => {
      drop();
    }, 1000);
  }

  startGame();


  // drop();





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
