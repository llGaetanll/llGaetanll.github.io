$(document).ready(function () {
    loadData(overview);
});

function loadData(content) {
    let parsedHTML = '';

    // iterates every section in the object
    for (let section in content) {
        let sectionData;

        // console.log('testing "' + section + '" of type', typeof content[section][0]);
        if (typeof content[section][0] == 'string') {
            // About Me would match here
            let strings = '';
            content[section].forEach(str => {
                strings += carkDown(str);
            });

            sectionData = 
            `<div class="section" id="${section.toLowerCase().replace(/ /g, "-")}">
                <h2>${section.toUpperCase()}</h2>
                <div class="block-wrapper">
                    ${strings}
                    <div class="end"></div>
                </div>
            </div>`;
        } else {
            // Projects would match here
            let actions = '';

            content[section].forEach(obj => {
                let subtitleHTML = obj['subtitle'] ? `<span>— ${obj['subtitle']}</span>` : '';
                let titleHTML = obj['title'] ? `<a href="./project.html?${obj['title'].replace(/[, ]/g, "-").toLowerCase()}"><h3>${obj['title']} ${subtitleHTML}</h3></a>` : '';

                let descHTML = obj['desc'] ? `<p class="desc">${obj['desc']}</p>` : '';

                let linksHTML = '';

                // add buttons
                if (obj['links']) {
                    console.log('link here');
                    let links = obj['links'];
                    linksHTML = '';

                    links.forEach(l => {
                        linksHTML += `<a class="ref-button" href="${l.url}"><h4>${l.name}</h4></a>`;
                    });
                }

                let aboutHTML = '';
                if (obj['about']) {
                    let about = obj['about'];
                    aboutHTML = '';

                    if (typeof about == 'string') {
                        aboutHTML = carkDown(about);
                    } else {
                        // if it's an array, add multiple strings
                        about.forEach(str => {
                            aboutHTML += carkDown(str);
                        });
                    }
                }

                const action =
                `<div class="action">
                    <div class="action-title">
                        ${titleHTML}
                        ${descHTML}
                    </div>
                    ${linksHTML}
                    ${aboutHTML}
                </div>`;

                actions += action;
            });

            sectionData = 
            `<div class="section" id="${section.toLowerCase().replace(/ /g, "-")}">
                <h2>${section.toUpperCase()}</h2>
                <div class="block-wrapper">
                    ${actions}
                    <div class="end"></div>
                </div>
            </div>`
        }

        parsedHTML += sectionData;
    }

    // console.log(parsedHTML);
    // console.log('this worked:', parsedHTML);
    $('.main').append(parsedHTML);
}