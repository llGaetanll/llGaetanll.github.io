$(document).ready(function() {
  slideShow($('.background-wrapper'))
});

function slideShow(parentElement) {
  // get number of images
  const transitionDelay = 3000;
  let totalHeight = 0;
  let heightArray = [];
  $(parentElement).children().each((i, e) => {
    let currentHeight = $(e).height()
    totalHeight += currentHeight;
    heightArray.push(currentHeight);
  });
  console.log('all heights: ', heightArray);
  console.log('totalHeight: ', totalHeight);

  function rotateImages() {
  
    
  
    setTimeout(rotateImages(), transitionDelay);
  }
}

function redirect(route) {
  console.log('redirecting')
  window.location.replace(route);
}


var keyPressed = false;
const TIMEOUT = 3000;

$(window).on('keypress', function() {
  if(!keyPressed) {
    keyPressed = true;
    setTimeout(function() {
      keyPressed ? popUpA() : null;
    }, TIMEOUT);
  }
});

$(window).on('keyup', function() {
  keyPressed = false;
});