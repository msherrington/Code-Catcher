console.log('JS loaded!');
$(() => {

  //two lines for scroll lock
  $('body').css('overflow','hidden');
  $('body').attr('scroll','no');

    // TO DO LIST...
    //-------------------
    // NEED RESET WHEN TIMER RUNS OUT!!!
    // INCREASE SPEED AT A CERTAIN SCORE
    //
    // BOUNDARIES FOR CODER dude
    // DEBUG DROPPING IMAGES CHANGING HALFWAY THROUGH DROPPING

    //styling:
    //ADD SOUND EFFECTS!!
    // HI SCORE BOX
    // hide everything and just show it when using play button??
    //main screen - timer, score, lives, hi score
    //
    // how to temp disable func keys when shaking?

    //codeWall image - DONE
    //Instruction page - DONE
    //play again button - DONE
    // ask Connor how to lock scroll bars - DONE.
    // how to clear shake from css? - DONE
    // how to change margin of codewall - DONE. (padding of container)


  const $codewall = $('.codewall');

  const $startBtn = $('#startBtn');

  const buzz = $('#buzz');
  const pop = $('#pop');
  const pop2 = $('#pop2');

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
          console.log($coder.position());
          $coder.stop().animate({
            left: '-=' + width //allow coder to move along whole codewall
          }, 3000);
          break;
        case 39:  //right arrow key
          console.log($coder.position());
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

  const $timer = $('.timer');

  let timeRemaining = 60;
  let timer = null;

  // timer countdown function
  function startTime() {
    $coder.show().animate({
      left: 450
    });
    $scoreBoard.text(0);
    timer = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        $timer.html(timeRemaining);
      } else if (timeRemaining === 0) {
        clearInterval(timer);
        timeRemaining = 60;
        $coder.hide().animate({
          left: -2000
        });
        console.log($coder.position());
        $startBtn.html('Play again?').show();
      }
    }, 1000);
  }

  // variable for the score
  let $score = 0;
  // variable for scoreboard
  const $scoreBoard = $('.score');


  // stops coder shaking after catching a bug image
  function shakeReset() {
    $coder.removeClass('shaking');
  }

  function drop(){
    //array to assign image to falling div
    const images = [ 'html', 'html', 'html', 'html', 'html', 'html', 'html', 'html', 'css', 'css', 'css', 'css', 'bug', 'bug', 'bug', 'bug', 'javascript', 'javascript'];

    //generates random index of $fallingDivs and $fallingImages arrays
    const $randomDiv = $fallingDivs.eq(Math.floor(Math.random()*$fallingDivs.length));
    const chosenImage = images[Math.floor(Math.random() * images.length)];

    //assigns random img to falling div and changes class
    $randomDiv
      .find('img')
      .attr('src', `images/${chosenImage}.png`)
      .attr('class', chosenImage);

    // variable to store value of last falling image caught by coder
    let catchResult = null;


    //fades-in random div with image, animates div to make it fall
    $randomDiv.fadeIn('slow').animate({
      top: 500
    }, {
      duration: 3000,
      easing: 'linear',
      complete: reset,
      progress: function() {
        if (($(this).position().top >= 460) && ($coder.position().left < ($(this).position().left + 20)) && ($coder.position().left > ($(this).position().left) - 20)) {
          $coder.stop();
          pressed = false;
          // if coder catches bug, -5 points, shake coder
          if (chosenImage === 'bug' && catchResult === null) {
            buzz[0].play();
            catchResult = 'bug';
            $coder.addClass('shaking');
            $score = $score - 5;
            $scoreBoard.text($score);
            pressed = true;
            setTimeout(shakeReset, 500);
          // if coder catches html, +1 point
          } else if (chosenImage === 'html' && catchResult === null) {
            pop[0].play();
            catchResult = 'html';
            $score++;
            $scoreBoard.text($score);
          // if coder catches css, +3 points
          } else if (chosenImage === 'css' && catchResult === null) {
            pop[0].play();
            catchResult = 'css';
            $score = $score + 3;
            $scoreBoard.text($score);
          // if coder catches javascript, +5 points
          } else if (chosenImage === 'javascript' && catchResult === null) {
            pop[0].play();
            catchResult = 'javascript';
            $score = $score + 5;
            $scoreBoard.text($score);
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

  //start random divs falling
  function startGame() {
    setInterval(() => {
      drop();
    }, 1000);
  }
  // drop();


  //function for play button
  function playGame() {
    $startBtn.hide();
    startGame();
    startTime();
  }
  // playGame();

  //event listener for start button
  $startBtn.on('click', playGame);


//THIS IS THE BOTTOM OF THE DOM CONTENT LOADER
});
