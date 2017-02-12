console.log('JS loaded!');
$(() => {



  const $codewall = $('.codewall');

  // code catcher dude
  const $coder = $('#coder');

  // vars for falling divs
  const $falling1 = $('#column1');
  const $falling2 = $('#column2');
  const $falling3 = $('#column3');
  const $falling4 = $('#column4');
  const $falling5 = $('#column5');
  const $falling6 = $('#column6');
  const $falling7 = $('#column7');
  const $falling8 = $('#column8');
  const $falling9 = $('#column9');
  const $falling10 = $('#column10');

  // array of falling divs, for random selection
  const $fallingDivs = [ $falling1, $falling2, $falling3, $falling4, $falling5, $falling6, $falling7, $falling8, $falling9, $falling10 ];

  // vars for images of falling divs
  const $imageDrop1 = $('#drop1');
  const $imageDrop2 = $('#drop2');
  const $imageDrop3 = $('#drop3');
  const $imageDrop4 = $('#drop4');
  const $imageDrop5 = $('#drop5');
  const $imageDrop6 = $('#drop6');
  const $imageDrop7 = $('#drop7');
  const $imageDrop8 = $('#drop8');
  const $imageDrop9 = $('#drop9');
  const $imageDrop10 = $('#drop10');

  // array of falling image vars, for random selection
  const $imageDrops = [ $imageDrop1, $imageDrop2, $imageDrop3, $imageDrop4, $imageDrop5, $imageDrop6, $imageDrop7, $imageDrop8, $imageDrop9, $imageDrop10 ];


  let $randomDiv = null;
  let $imageChoice = null;

  //four functions for choosing img src
  //put functions in array




  // function random() {
  // }

  // .fadeIn()
  function drop(){
    $randomDiv = Math.floor(Math.random()*10);
    $imageChoice = Math.floor(Math.random()*12);

    const $imagesLevel1 = [ html, bug, html, html, bug, html, html, bug, html, html, bug, html ];

    function bug() {
      $imageDrops[$randomDiv].attr('src', 'images/bug.png', 'class', 'bug');
    }

    function html() {
      $imageDrops[$randomDiv].attr('src', 'images/html.png', 'class', 'code');
    }

    $imagesLevel1[$imageChoice]();
    $fallingDivs[$randomDiv].animate({
      top: 565
    }, {
      duration: 3000,
      easing: 'linear',
      complete: reset,
      progress: function() {
        // console.log($(this).position());
        if (($(this).position().top > 530) && ($(this).position().top < 550) && (($coder.position().left >= -35) && ($coder.position().left <= 30))) {
          // alert('collide');
          // shake();
          // if id = bug, shake
        }
        // reset div attributes
        // hide it
      }
    });
  }

  function reset() {
    $(this).css({
      top: 0
    });
  }

  drop();



  //testing new event listener for arrrow keys
  var pressed = false;
  $(document).on('keydown', (e) => {
    if(!pressed){ //only start animation once
      const width = $codewall.width();
      switch (e.which) {
        case 37:
          $coder.stop().animate({
            left: '-=' + width //allow the user the move the div over the whole doc
          }, 3000); //left arrow key
          break;
        case 39:
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
  //         console.log($coder.position());
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



  // function shake() {
  //   $('#coder').effect( 'shake', {times: 1}, 200 );
  // }

  // $coder.on('change' (e) {
  //   //event listener for when he's moving
  // })


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
