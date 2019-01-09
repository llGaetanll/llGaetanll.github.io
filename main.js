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
    let wrappers = $('.block-wrapper');
    for(w in wrappers) wrappers[w].id = w;
    let shouldScroll = [];
    
    for(let i = 0; i < wrappers.length; i++) {
        let currentWrapper = '#' + wrappers[i].id;
        let height = $(currentWrapper).height();
        let totalHeight = 0;
        $(currentWrapper).children().each(function () {
            totalHeight += $(this).height();
        });

        if(totalHeight > height) {
            shouldScroll.push(true);
            $(currentWrapper).addClass('scrollable');
        } else if(height >= totalHeight) {
            shouldScroll.push(false);
        }
    }
    console.log(shouldScroll);

}