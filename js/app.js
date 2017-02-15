console.log('JS loaded!');
$(() => {

  //two lines for scroll lock
  $('body').css('overflow','hidden');
  $('body').attr('scroll','no');

    // TO DO LIST...
    //-------------------
    // maybe increase falling speed a little
    //check for how many objects falling at same time - maybe incease
    //more bugs appearing?!


    // BOUNDARIES FOR CODER dude - kind of done.

    //increase scores

    //styling:
    // animate page down (so hide instructions)
    // explain about bugs hiding
    // ADD SOUND EFFECTS!!
    // HI SCORE BOX?
    // hide everything and just show it when using start button?? e.g. timer, score box
    //main screen - timer, score, lives, hi score



  const $codewall = $('.codewall');

  const $startBtn = $('#startBtn');

  const buzz = $('#buzz');
  const pop = $('#pop');

  // code catcher dude
  const $coder = $('#coder');

  // var for falling divs
  const $fallingDivs = $('.column');

  //variables for timer
  const $timer = $('.timer');
  let timeRemaining = 60;
  let timer = null;

  // variables for scoreboard
  const $scoreDisplay = $('.score-display');
  // const $scoreBoard = $('.score-board');

  //hide falling divs before game starts
  $fallingDivs.hide();
  $timer.hide();
  // $scoreBoard.hide();

  //event listener for arrrow keys to move coder
  var pressed = false;
  $(document).on('keydown', (e) => {
    if(!pressed){ //start the coder moving (once only)
      const width = $codewall.width();
      switch (e.which) {
        case 37:  //left arrow key
          $coder.stop().animate({
            left: '-=' + width //allow coder to move along whole codewall
          }, 1500);
          break;
        case 39:  //right arrow key
          $coder.stop().animate({
            left: '+=' + width //allow coder to move along whole codewall
          }, 1500);
          break;
      }
    }
    pressed = true;
  }).on('keyup', () => {
    $coder.stop(); // stop the coder moving
    pressed = false;
    if ($coder.position().left < -35) {
      $coder.animate({
        left: -35
      });
    } else if ($coder.position().left > 835) {
      $coder.animate({
        left: 835
      });
    }
  });

  //variable for the speed of falling items (in millisecs)
  let dropSpeed = 3000;

  // timer countdown function
  function startTime() {
    $timer.show();
    $coder.show();
    // $scoreBoard.show();
    $scoreDisplay.text(0);
    timer = setInterval(() => {
      if (timeRemaining > 0) {
        imageDrop();
        timeRemaining--;
        dropSpeed = dropSpeed - 45;
        $timer.html(timeRemaining);
      } else if (timeRemaining === 0) {
        clearInterval(timer);
        timeRemaining = 60;
        dropSpeed = 3000;
        $score = 0;
        $coder.hide().animate({
          left: 400
        });
        $startBtn.html('Play again?').show();
        $timer.hide();
        // $scoreBoard.hide();
      }
    }, 1000);
  }

  // variable for the score
  let $score = 0;

  // stops coder shaking after catching a bug image
  function shakeReset() {
    $coder.removeClass('shaking');
  }

  function imageDrop(){

    //array to assign image to falling div
    const images = [ 'html', 'html', 'html', 'html', 'html', 'html', 'css', 'css', 'css', 'css', 'bug', 'bug', 'bug', 'bug', 'bug', 'javascript', 'javascript', 'javascript'];

    //generates random index of $fallingDivs and $fallingImages arrays
    const $randomDiv = $fallingDivs.eq(Math.floor(Math.random()*$fallingDivs.length));
    const chosenImage = images[Math.floor(Math.random() * images.length)];

    // checks that randomDiv is not already falling
    if ($randomDiv.is(':animated') === false) {
      //assigns random img to falling div and changes class
      $randomDiv
        .find('img')
        .attr('src', `images/${chosenImage}.png`)
        .attr('class', chosenImage);
    }

    // variable to store value of last falling image caught by coder
    let catchResult = null;

    //fades-in random div with image, animates div to make it fall
    $randomDiv.fadeIn().animate({
      top: 510
    }, {
      duration: dropSpeed,
      easing: 'linear',
      complete: reset,
      progress: function() {
        if (($(this).position().top >= 460) && ($coder.position().left < ($(this).position().left + 20)) && ($coder.position().left > ($(this).position().left) - 20)) {
          $coder.stop(); // stops coder after a catch, to stop him flying off the screen
          pressed = false;
          // if coder catches bug, -5 points, shake coder
          if (chosenImage === 'bug' && catchResult === null) {
            buzz[0].play();
            catchResult = 'bug';
            $coder.addClass('shaking');
            $score = $score - 500;
            $scoreDisplay.text($score);
            pressed = true;
            setTimeout(shakeReset, 500);
          // if coder catches html, +1 point
          } else if (chosenImage === 'html' && catchResult === null) {
            pop[0].play();
            catchResult = 'html';
            $score = $score + 100;
            $scoreDisplay.text($score);
          // if coder catches css, +3 points
          } else if (chosenImage === 'css' && catchResult === null) {
            pop[0].play();
            catchResult = 'css';
            $score = $score + 200;
            $scoreDisplay.text($score);
          // if coder catches javascript, +5 points
          } else if (chosenImage === 'javascript' && catchResult === null) {
            pop[0].play();
            catchResult = 'javascript';
            $score = $score + 300;
            $scoreDisplay.text($score);
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
  }

  //function for play button
  function startGame() {
    $startBtn.hide();
    startTime();
  }

  //event listener for start button
  $startBtn.on('click', startGame);


//THIS IS THE BOTTOM OF THE DOM CONTENT LOADER
});




//DONE LIST
// arrow keys needed in instructions - DONE
// DEBUG DROPPING IMAGES CHANGING HALFWAY THROUGH DROPPING - SEEMS TO BE DONE!! :-)
// NEED RESET WHEN TIMER RUNS OUT!!! - done
// hide already falling images when timer runs out - and reset them! - unnecessary when speed increases!!
//codeWall image - DONE
//Instruction page - DONE
//play again button - DONE
// ask Connor how to lock scroll bars - DONE.
// how to clear shake from css? - DONE
// how to change margin of codewall - DONE. (padding of container)
