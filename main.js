$(document).ready(function () {

    checkHover();
    hoverCards();

    let bodyHeigth = $(window).height() - 80;

    $('body').css({
        'height' : bodyHeigth
    })

    overviewHeight();
});

function checkHover() {
    $("#1").hover(function () {
        $(".logo").css({
            'background-image' : 'url("./logos/MobiusML.png")',
            'display' : 'block'
        });
    }, function () {
        $(".logo").css({
            'display' : 'none'
        });
    });

    $("#2").hover(function () {
        $(".logo").css({
            'background-image' : 'url("./logos/memedb.png")',
            'display' : 'block'
        });
    }, function () {
        $(".logo").css({
            'display' : 'none'
        });
    });

    $("#3").hover(function () {
        $(".logo").css({
            'background-image' : 'url("./logos/ChromaTilt.png")',
            'display' : 'block'
        });
    }, function () {
        $(".logo").css({
            'display' : 'none'
        });
    });

    $("#4").hover(function () {
        $(".logo").css({
            'background-image' : 'url("./logos/PuzzleTimer.png")',
            'display' : 'block'
        });
    }, function () {
        $(".logo").css({
            'display' : 'none'
        });
    });
}

function getScreenDim() {
    console.log('width: ', $(window).width());
    console.log('height: ', $(window).height());
}

var lastTimeStamp;

function hoverCards() {
    var x, y;
    let cards = $('.card');
    for(c in cards) cards[c].id = 'card-' + c

    cards.mousemove(function(e) {

        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        width = $(this).width();
        height = $(this).height();

        xDeg = map(x, 0, width, -12, 12);
        yDeg = map(y, 0, height, 12, -12);

        $(this).css({
            'transform' : `perspective(1000px) rotateX(${yDeg}deg) rotateY(${xDeg}deg)`
        });
    });

    cards.on("mouseleave", function() {
        $(this).css({
            'transform' : `perspective(1000px) rotateX(0deg) rotateY(0deg)`
        });
    });
}

function map(input, lowIn, highIn, lowOut, highOut) {
    return (input - lowIn) * (highOut - lowOut) / (highIn - lowIn) + lowOut;
}

function overviewHeight() {
    let blockWrappers = $('.block-wrapper');
    let blockWrapperHeights = []
    let smallestblock = blockWrappers[0].height;

    console.log('')

    for(b in blockWrappers) {
        blockWrappers[b].id = 'block-wrapper-' + c;
        let currentHeight = blockWrappers[b].height();
        blockWrapperHeights.push(currentHeight);
        if (currentHeight < smallestblock) {
            smallestblock = currentHeight;
        }
    }
    console.log('smallest block is ', smallestblock);
}