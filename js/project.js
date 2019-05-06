class Project {

    constructor(object) {
        this.object = PROJECTS[object]; // loads object that contains project data
        this.projectImagePath = './assets/img/projects/' + object + '/'; // image paths to load project assets
        this.main = '.main';
        this.margin = 45;

        this.name = this.object[0].substring(3, this.object[0].length - 1);

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

    loadProject() {
        $('head').append(`<title>${this.name}</title>`)
        this.object.forEach(o => this.html += carkDown(o));

        $(this.main).append(this.html);
    }
}

$(document).ready(function() {
    let name = document.location.href.split('?')[1];
    console.log('loading project ', name);
    Project.create(name);
});