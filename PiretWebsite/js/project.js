class Project {

    constructor(object) {
        this.object = PROJECTS[object];
        this.projectImagePath = './assets/img/projects/' + object + '/';
        this.main = '.main';

        this.margin = 45;

        this.textStructure = '';
        this.textLayer = 0;
    }

    static create(structure) {
        console.log('creating project', structure);
        if (!this.instance) {
            this.instance = new Project(structure);
            this.instance.__init();
        }
        return this.instance;
    }

    __init() {
        this.loadProject();

        this.eventListeners();

        setTimeout(() => {
            this.resizeImages();
        }, 10)
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

    __readImageStructure(parent, depth = 0) {
        var className =
            depth == 0 ?
            "column images" :
            depth % 2 == 0 ?
            "column" :
            "row images";
            // this is the html element to be returned
        var img = `<div class='${className}'>\n`;
        for (var i = 0; i < parent.length; i++) {
            if (Array.isArray(parent[i])) {
                img += this.__readImageStructure(parent[i], depth + 1) + "\n";
            } else {
                img +=
                `<div class="img-wrapper">
                    <img class="display" src='${this.projectImagePath + parent[i]}'>
                </div>`;
            }
        }
        img += '</div>';
        return img;
    }

    __addParagraph(textArrays) {
        let element = '';
        textArrays.forEach((e) => {
            element += `<p>${e}</p>`;
        });
        return element;
    }

    __getImageHeight(img) {
        return new Promise((resolve) => {
            $(img).ready(() => resolve($(img).height()))
        })
    }

    eventListeners() {
        $(window).on('resize', () => {
            this.resizeImages();
        });
    }

    loadProject() {
        const img = this.object.Images;
        const intro = this.object.Intro;
        const text = this.object.Text;

        // everything is optional
        img ? this.genIntro(intro) : null;
        intro ? this.genImages(img) : null;
        text ? this.genTexts(text) : null;
    }

    genIntro(intro) {
        let paragraphs = this.__addParagraph(intro.desc);

        let element = $(
            `<div class="row text">
            <div class="column">
                <h2>${intro.Title}</h2>
            </div>
            <div class="column desc">
                ${paragraphs}
            </div>
        </div>`
        );

        $('body').prepend(`<img class="main-img" src="${this.projectImagePath + intro.mainImg}">`);

        $(this.main).append(element);

        $('.column.desc').css('margin-left', this.margin);
    }

    genImages(img) {
        let images = this.__readImageStructure(img);

        let element = $(
            `<div class="column images">
            ${images}
        </div>`
        );

        $(this.main).append(images);
    }

    genTexts(object) {
        let element = this.__readTextStructure(object);

        $(this.main).append(element);
    }

    resizeImages() {
        // let contentWidth = $('.main').width();
        // // deal with normal images
        // // let images = $('.display');
        // // for (let i = 0; i < images.length; i++) {
        // //     console.log('.' + images[i].className);
        // //     $('.' + images[i].className).css("width", contentWidth);
        // // }
        // // deal with image rows
        // let imgCount = $('.row.images').children().length;

        // let imageWidth = (contentWidth - ((imgCount - 1) * this.margin)) / imgCount;

        // // $('.i-row').css({
        // //     'width': imageWidth
        // // });

        $('')

        // set content margin so we can see the main img
        this.__getImageHeight('.main-img')
            .then((h) => {
                this.contentMargin = h * 0.8;
                $('.main').css('margin-top', this.contentMargin);

                
                let imgRowWidth = ($('.row.images').width() - this.margin) / 2;
                console.log('image width now: ', imgRowWidth);
                $('.row.images > .img-wrapper').css({'width': imgRowWidth});
                // $('.row.images').css({
                //     'margin-bottom': this.margin,
                //     'margin-top': this.margin,
                //     'margin-right': -this.margin / 2,
                //     'margin-left': -this.margin / 2,
                // });
            });
    }
}

$(document).ready(function() {
    let name = getProjectName();
    Project.create(name);
});

function getProjectName() {
    let url = document.location.href;
    let params = url.split('?')[1];
    return params;
}