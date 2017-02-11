console.log('JS loaded!');
$(() => {

  const $falling1 = $('#column1');
  // const $falling2 = $('#column2');
  // const $falling3 = $('#column3');
  // const $falling4 = $('#column4');
  // const $falling5 = $('#column5');
  // const $falling6 = $('#column6');
  // const $falling7 = $('#column7');
  // const $falling8 = $('#column8');
  // const $falling9 = $('#column9');
  // const $falling10 = $('#column10');

  const $coder = $('#coder');

  function shake() {
    $('#coder').effect( 'shake', {times: 1}, 200 );
  }

  // .fadeIn()
  function drop(){
    $falling1.animate({
      top: 565
    }, {
      duration: 4500,
      easing: 'linear',
      complete: reset,
      progress: function() {
        console.log($(this).position());
        if (($(this).position().top > 530) && ($(this).position().top < 550) && (($coder.position().left >= -35) && ($coder.position().left <= 30))) {
          // alert('collide');
          shake();
        }
      }
    });
    // $falling2.animate({
    //   top: 565
    // }, {
    //   duration: 3000,
    //   easing: 'linear',
    //   complete: reset
    // });
    // let top = $testObj.top
  }

  function reset() {
    $(this).css({
      top: 0
    });
  }

  drop();


  // event listener for left/right arrow keys
  $(document).on('keyup', (e) => {
    switch (e.which) {
      case 37:
        $coder.stop().animate({
          left: '-=60'
        }, () => {
          console.log($coder.position());
        }); //left arrow key
        break;
      case 39:
        $coder.stop().animate({
          left: '+=60'
        }, () => {
          console.log($coder.position());
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
