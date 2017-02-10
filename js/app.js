console.log('JS loaded!');
$(() => {

  const $fallingDiv = $('#column1');
  const $fallingDiv2 = $('#column2');
  const $coder = $('#coder');


  // .fadeIn()
  function drop(){
    $fallingDiv.animate({
      top: 565
    }, {
      duration: 3000,
      easing: 'linear',
      complete: reset
    });
    $fallingDiv2.animate({
      top: 565
    }, {
      duration: 3000,
      easing: 'linear',
      complete: reset
    });
  }



  function reset() {
    $(this).css({
      top: -35
    });
    // drop();
  }

  drop();


  // event listener for left/right arrow keys
  $(document).on('keydown', (e) => {
    switch (e.which) {
      case 37:
        $coder.stop().animate({
          left: '-=100'
        }); //left arrow key
        break;
      case 39:
        $coder.stop().animate({
          left: '+=100'
        }); //right arrow key
        break;
    }
  });



//PSEUDO CODE

// work out how to place falling divs in relation to codeWall

//fade in falling objects
//iterate through divs to decide which one starts falling when
//location of div compared to top left corner of box
//function to place image on falling div
//function to decide whether div is "code or bug"

//styling: codeWall image
// falling code images
// coder image!


//bottom of DOM content loader
});
