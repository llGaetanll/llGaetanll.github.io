$(document).ready(function () {
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
});