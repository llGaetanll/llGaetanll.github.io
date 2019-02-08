function addElement(title, desc, imgUrl, projectName, projectNumber) {
    console.log('adding element');
    let element = 
    `<div class="block">
        <a href="./project.html?${projectName}")>
            <div class="block-desc">
                <h4>${title}</h4>
                <p>${desc}</p>
            </div>
            <img src="${imgUrl}">
        </a>
    </div>`;

    if(projectNumber % 2 == 0) {
        $('.column.left').append(element);
    } else if(projectNumber % 2 == 1) {
        $('.column.right').append(element);
    }
}

function loadProjects() {
    PROJECTS_CARDS.forEach((e, i) => {
        addElement(e.title, e.desc, e.img, e.name, i);
    });
}

$(document).ready(function () {
    loadProjects();
});