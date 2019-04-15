$(document).ready(function () {
    // parseToHTML(`My projects and awards are listed here on this page and you can *[click]* on them to find out more on my GitHub[https://github.com/llGaetanll]`);
    loadData(overview);
});

function loadData(content) {
    let parsedHTML = '';

    // iterates every section in the object
    for (let section in content) {
        let sectionData;

        console.log('testing "' + section + '" of type', typeof content[section][0]);
        if (typeof content[section][0] == 'string') {
            // About Me would match here
            let strings = '';
            content[section].forEach(str => {
                strings += parseToHTML(str);
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
                let titleHTML = obj['title'] ? `<h3>${obj['title']} ${subtitleHTML}</h3>` : '';

                let descHTML = obj['desc'] ? `<p class="desc">${obj['desc']}</p>` : '';

                let linksHTML;

                // add buttons
                if (obj['links']) {
                    let links = obj['links'];
                    linksHTML = '';

                    links.forEach(l => {
                        linksHTML += `<a class="ref-button" href="${l.url}"><h4>${l.name}</h4></a>`;
                    });
                }

                let aboutHTML;
                if (obj['about']) {
                    let about = obj['about'];
                    aboutHTML = '';

                    if (typeof about == 'string') {
                        aboutHTML = parseToHTML(about);
                    } else {
                        // if it's an array, add multiple strings
                        about.forEach(str => {
                            aboutHTML += parseToHTML(str);
                        });
                    }
                }

                const action =
                `<div class="action">
                    <div class="action-title">
                        ${titleHTML}
                        ${descHTML}
                    </div>
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
    console.log('this worked:', parsedHTML);
    $('.main').append(parsedHTML);
}

/*
 * @param carkDown {string} carkDown - formatted String
 * @returns {string} formattedHTML
 */

// each string is a paragraph
// each paragraph can contain images, bold text, urls, or all of them
function parseToHTML(carkDown) {
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
        console.log(url);
        return `<img src="${url}" class="cover-photo" />`;
    }

    // // bold text
    // let boldTexts = carkDown.match()
    // while(boldTexts) {
    //     console.log(boldTexts);
    //     carkDown =
    //         carkDown.substring()
    // }

    return `<p>${carkDown}</p>`;
}