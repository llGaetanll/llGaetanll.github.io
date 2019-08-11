(function main() {
    // add logo
    lottie.loadAnimation({
        container: document.getElementById('logo'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'anims/animated logo.json' // the path to the animation json
    });
})();