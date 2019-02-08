class Home {
    constructor() {
        this.main = '.slideshow';
        this.slideTimeoutMS = 6000;
    }

    static create() {
        if (!this.instance) {
            this.instance = new Home();
            this.instance.__init();
        }
        return this.instance;
    }

    __init() {
        this.createSlideShow();
        this.createContent();

        this.runSlideshow();
    }

    __hasLoaded() {
        return new Promise((res) => {
            $(document).ready(() => res());
        })
    }

    __readTextStructure(parent, depth = 0) {
        var className =
            depth == 0 ?
            "column text" :
            depth % 2 == 0 ?
            "column" :
            "row para";
        var text = `<div class='${className}'>\n`;
        for (var i = 0; i < parent.length; i++) {
            if (Array.isArray(parent[i])) {
                text += this.__readTextStructure(parent[i], depth + 1) + "\n";
            } else {
                text += `<p class="t-para">${parent[i]}</p>\n`;
            }
        }
        text += '</div>';
        return text;
    }

    createSlideShow() {
        const object = HOME.slideshow;
        const path = './assets/img/home/showcasedProjects/';

        for (var i = 0; i < object.length; i++) {
            let title = object[i].Title;
            let desc = object[i].desc;
            let url = object[i].url;
            let img = path + object[i].img;

            let element =
                `<div class="slide-container" id='slide-${i}' onClick="loadProject('${url}')">
                    <div class="slide-info" id="desc-${i}">
                        <h5>${title}</h5>
                        <p>${desc}</p>
                    </div>
                    <div class="slide-img" style="background-image: url('${img}')"></div>
                </div>`;

            $(this.main).append(element);
        }

        this.slideNumber = i;
    }

    createContent() {
        const object = HOME.text;
        let title = object.title;
        let desc = object.desc;

        let element = this.__readTextStructure(desc);
        $('body').append(element)
    }

    runSlideshow(slide = 0) {
        let currentSlide = '#slide-' + slide;
        let currentDesc = '#desc-' + slide;

        $(currentSlide).css('flex', '1');
        $(currentDesc).css('display', 'block');

        setTimeout(() => {
            $('.slide-info').css('opacity', 1);
        }, 1000);

        setTimeout(() => {
            $('.slide-info').css('opacity', 0);

            setTimeout(() => {
                $(currentDesc).css('display', 'none');
                $(currentSlide).css('flex', '0');
                this.runSlideshow((slide + 1) % 3);
            }, 300);
        }, this.slideTimeoutMS);
    }
}

$(document).ready(() => {
    Home.create();
})