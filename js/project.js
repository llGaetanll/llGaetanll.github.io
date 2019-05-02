class Project {

    constructor(object) {
        this.object = PROJECTS[object]; // loads object that contains project data
        this.projectImagePath = './assets/img/projects/' + object + '/'; // image paths to load project assets
        this.main = '.main';

        this.margin = 45;

        this.html = '';
    }

    static create(structure) {
        console.log('creating project', structure);
        if (!this.instance) {
            this.instance = new Project(structure);
            this.instance.loadProject();
        }
        return this.instance;
    }

    _cDownToHTML(carkDown) {
        const imgUrlRegex = /(?<=\^\[)[^\]]*/g;
        const boldTextRegex = /(?<=\*\[)[^\]]*/g;
        const urlLinkRegex = /(?<=\w*\[)[^\]]*/g;
        const urlNameRegex = /\w*(?=\[)/g;

        const imgRegex = /\^\[.*\]/g;
        const boldRegex = /\*\[.*\]/g;
        // const urlRegex;

        const regexs = [/img\[.*\]/g, /\*\[.*\]/g, ]

        // images
        let url = carkDown.match(imgUrlRegex);
        if(url){
            return `<img src="${url}" class="cover-photo" />`;
        }

        // bold text
        let boldI = 0; // this increments with exec
        let boldTexts = boldRegex.exec(carkDown);
        let previousBoldIndex = 0;
        while(boldTexts != null) {
            let boldIndex = boldTexts.index;
            let text = boldTextRegex.exec(carkDown);
            carkDown = 
                carkDown.substring(previousBoldIndex, boldIndex)
                + `<b>${text[boldI]}</b>`
                + carkDown.substring(boldIndex + text[boldI].length + 3);

            boldI++;
            boldTexts = boldRegex.exec(carkDown);
        }

        // links
        let ulrI = 0;
        let link = urlLinkRegex.exec(carkDown);
        let previousUrlIndex = 0;
        while(link != null) {
            let urlIndex = link.index; // regex of the name
            let name = urlNameRegex.exec(carkDown);
            let nameIndex = name.index;
            carkDown = 
                carkDown.substring(previousUrlIndex, nameIndex)
                + `<a href="${link[ulrI]}">${name[ulrI]}</a>`
                + carkDown.substring(urlIndex + name.length + link[ulrI].length);

            ulrI++;
            link = urlLinkRegex.exec(carkDown);
        }

        return `<p>${carkDown}</p>`;
    }

    loadProject() {
        // this goes through the structure of the object and creates the html
        this.object.forEach(o => {
            // o is either text on an object
            if(typeof o == 'string') {
                // carkdown parser here
                this.html += _cDownToHTML(o);
            } else {
                // these items are stacked horizontally
                let subHTML = ''
                o.forEach(d => {
                    // carkdown parser here
                    subHTML += cDownToHTML(d);
                });
                this.html +=
                `<div class="row">${subHTML}</div>`;
                
            }
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