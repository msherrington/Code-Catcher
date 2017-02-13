console.log('JS loaded!');
$(() => {


    // TO DO LIST...
    //-------------------
    // how to temp disable func keys when shaking?
    // how to clear shake from css? run in sequence?
    // NEED RESET WHEN TIMER RUNS OUT!!!
    // BOUNDARIES FOR CODER dude
    // DEBUG DROPPING IMAGES CHANGING HALFWAY THROUGH DROPPING
    // INCREASE SPEED AT A CERTAIN SCORE
    // ADD SOUND EFFECTS!!
    // HI SCORE BOX
    //styling: codeWall image
    //sound effects!
    //Instruction page (slide in)
    // hide everything add just show when using buttons
    //main screen - timer, score, lives, hi score
    //play again button
    //

    // how to change margin of codewall now??
    // ASK CONNOR ABOUT THIS!!!
    //lock scroll background-color
    //.animate Scroll to element in a function


  const $playButton = $('#play');

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

  const $timer = $('.timer');

  let timeRemaining = 60;
  let timer = null;

  // timer countdown function
  function startTime() {
    $scoreDisplay.text(0);
    timer = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        $timer.html(timeRemaining);
      } else if (timeRemaining === 0) {
        clearInterval(timer);
        timeRemaining = 60;
      }
    }, 1000);
  }

  // variable for the score
  // let $hiScore = 0;
  let $score = 0;
  const $scoreDisplay = $('.score');
  // const $highScoreDisplay = $('.hiscore');
  //
  // if ($hiScore < $score) {
  //   $hiScore = $score;
  //   alert($hiScore);
  //   $highScoreDisplay.push($hiScore);
  // }


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

    // stops coder shaking after catching a bug image
    function shakeReset() {
      $coder.removeClass('shaking');
    }

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
            $coder.addClass('shaking');
            $score = $score - 5;
            $scoreDisplay.text($score);
            pressed = true;
            setTimeout(shakeReset, 1500);
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
    startGame();
    startTime();
  }

  // event listener for play button
  $playButton.on('click', playGame);


//THIS IS THE BOTTOM OF THE DOM CONTENT LOADER
});
