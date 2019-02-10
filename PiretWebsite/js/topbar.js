class TopBar {
    constructor(placement, color, top) {
        this.height = 40;
        this.prevPos;
        this.prevTime;
        this.main = placement;
        this.animationSpeed = 200;
        this.colorThreshold = color;
        this.maxV = 0.8;
        this.top = top;
        this.hideTimeout = 3000;
    }

    // static so no instance is required to call it
    static create(parent, colorThreshold = 500, top = 60) {
        this.instance = new TopBar(parent, colorThreshold, top);
        this.instance.__setup();
        return this.instance;
    }

    __setup() {
        this.__genTopBar();
        this.__genProperties();
        return;
    }

    __genTopBar() {
        // load object
        this.logo = TOPBAR.logo;
        this.tabs = TOPBAR.tabs;

        let logoElement =
            `<div class="header-box">
                <img src="${this.logo}" onClick="redirect('index.html')" class="logo">
                <h1>Piret Johanson Studio</h1>
            </div>`;

        let section = '';
        this.mostSubTabs = 0;

        this.tabs.forEach((e) => {
            let currentKey = e[Object.keys(e)[0]];
            let tab = '';
            let subtabs = '';
            let subtabCount = 0;

            // itterate the current object
            currentKey.forEach((u) => {
                if(typeof u == 'string') {
                    tab =`<h2 class="tab" onClick="redirect('${u ? u : ''}')">${Object.keys(e)[0]}</h2>\n`;
                } else {
                    subtabs += `<h3 class="subtab" onClick="redirect('${u[Object.keys(u)[0]] ? u[Object.keys(u)[0]] : ''}')">${Object.keys(u)}</h3>\n`;
                }              
                subtabCount++;
            });

            section +=
            `<div class="section">
                ${tab}\n
                ${subtabs}
            </div>\n`

            if (subtabCount > this.mostSubTabs) {
                this.mostSubTabs = subtabCount;
            }
        });

        let element =
            `<div class="top-bar">
                ${logoElement}
                <div class="spacer"></div>
                ${section}
            </div>`;

        $(this.main).prepend(element);
        this.totalHeight = $('.top-bar').outerHeight(false);
    }

    __genProperties() {
        $('.top-bar').css({
            'transition-duration': this.animationSpeed / 1000 + 's',
            'height': this.height + 'px'
        });
        $('.subtab').css('transition-duration', this.animationSpeed / 1000 + 's');

        $(window).on('scroll', () => {
            this.getScrollInfo();
        });

        $('.tab').each((i, e) => {
            e.id = 'tab-' + i;
        });

        $('.section').each((i, e) => {
            let subtabs = $(e).find('.subtab');
            if(subtabs.length > 0) {
                $(subtabs).attr('class', 'subtab ' + i);
            }
        });

        $('.section').hover(function () {
            let childrenCount = $(this).find('.subtab').length;
            topbar.expand(childrenCount);

            let id = $(this).find('.tab').attr('id').replace('tab-', '');
            let subtabID = '.subtab.' + id;
            $(subtabID).css('opacity', 1);
        }, function () {
            $('.subtab').css('opacity', 0);
        });

        $('.top-bar').hover(() => {}, () => {
            topbar.contract();
        })
    }

    __colorBar(shouldColor) {
        if(shouldColor) {
            $('.top-bar').css('background-color', '#f7f7f7');
            $('.top-bar').css('border-color', '#ccc');
        } else {
            $('.top-bar').css('background-color', 'transparent');
            $('.top-bar').css('border-color', 'transparent');
        }
    }

    getScrollInfo() {
        // scrolling speed
        let newPos = window.scrollY;
        let newTime = new Date / 1;
        if (this.prevPos == null) {
            this.prevPos = newPos;
            this.prevTime = newTime;
            return;
        }
        let dy = newPos - this.prevPos;
        let dt = newTime - this.prevTime;

        let dydt = dy / dt;
        // console.log('dy/dt: ', dy/dt);

        if (dydt < -this.maxV || newPos < this.height) {
            this.showBar();
        }

        if (dydt > this.maxV) {
            this.hideBar();
        }

        if((newPos > this.height + this.colorThreshold) && (dydt > this.maxV)) {
            setTimeout(function() {
                this.__colorBar(true);
            }, 300);
        }

        // if the bar is up at the top
        if (newPos < this.height + this.top) {
            this.__colorBar(false);
            this.showBar();
            $('.top-bar').css('top', this.top);
        }

        this.prevTime = newTime;
        this.prevPos = newPos;
    }

    showBar() {
        $('.top-bar').css('top', 0);
    }

    hideBar() {
        $('.top-bar').css('top', -this.totalHeight);
    }

    expand(elementsCount) {
        let sectionHeight = $('.section').height();
        let subtabHeight = $('.subtab').outerHeight(true);
        let height = sectionHeight + subtabHeight * elementsCount - 12;
        if(elementsCount == 0) {
            height = this.height;
        }
        $('.top-bar').css('height', height);
        $('.subtab').css('display', 'block');
        setTimeout(() => {
            if (this.contracting == true) return;
            // $('.subtab').css('display', 'block');
            // $('.subtab').css('opacity', 1);
        }, this.animationSpeed);

    }

    contract() {
        this.contracting = true;
        $('.subtab').css('opacity', 0);
        setTimeout(() => {
            $('.subtab').css('display', 'none');
            $('.top-bar').css('height', this.height);
            this.contracting = false;
        }, this.animationSpeed);
    }
}

let color = document.currentScript.getAttribute('colorThreshold');
let topVal = document.currentScript.getAttribute('topVal');

$(document).ready(() => {
    topbar = TopBar.create('body', color, top);
});