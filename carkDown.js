function carkDown(text, p0 = 0, lvl = 0) {

    // check for objects
    if (typeof text != 'string') {
        let inner = '';

        text.forEach(o => {
            inner += carkDown(o, p0, lvl + 1);
        });

        return `<div class="${lvl % 2 == 1 ? 'column' : 'row'}">${inner}</div>`;
    }

    // potential addons
    if (text === ' ')
        return '<div style="display: flex; flex: 1; height: 20px"></div>';

    if (text === '---')
        return '<div class="divider"></div>';

    // if there is no formatting and it's our first time seeing the text
    if (!text.includes('[') && p0 == 0)
        return `<p>${text}</p>`;

    let textChars = text.split('');
    // 3 pointers: one at each space + 1, another at [, another at ]
    let p1 = 0,
        p2 = 0,
        p3 = 0,
        opNum = 0,
        clNum = 0; // op and cl allow us to detect nested parsing
    while (p0 < textChars.length) {
        // the first pointer is a space iff p2 has not been found yet
        if (textChars[p0] == ' ' && p2 == 0)
            p1 = p0 + 1;


        if (textChars[p0] == '[') {
            opNum++;

            if (p2 == 0)
                p2 = p0;
        }

        if (textChars[p0] == ']')
            clNum++;

        // ensures we are always doing the outermost operation first
        if (textChars[p0] == ']' && opNum == clNum) {
            p3 = parseInt(p0);

            // handle attributes
            let p5 = p1;
            while (p5 < p2) {
                if (textChars[p5] == '.' || textChars[p5] == '#')
                    break;
                p5++;
            }

            // extract all attributes and parse accordingly
            let attr = text.substring(p5, p2);
            let a0 = 0,
                classes = [],
                ids = [];
            for (let a = 1; a <= attr.length; a++) {
                if (attr[a0] == '.' && (attr[a] == '.' || attr[a] == '#' || a == attr.length)) {
                    classes.push(attr.substring(a0 + 1, a));
                    a0 = a;
                    continue;
                }

                if (attr[a0] == '#' && (attr[a] == '.' || attr[a] == '#' || a == attr.length)) {
                    ids.push(attr.substring(a0 + 1, a));
                    a0 = a;
                    continue;
                }
            }

            let ctxt = '',
                itxt = '';

            classes.forEach((c, i) => {
                ctxt += c;
                if (i != classes.length - 1)
                    ctxt += ' ';
            });

            ids.forEach((id, i) => {
                itxt += id;
                if (i != ids.length - 1)
                    itxt += ' ';
            })

            let
                classText = ` class="${ctxt}"`,
                idText = ` id="${itxt}"`;

            // get operation names
            let operation = text.substring(p1, p5);

            switch (operation) {
                case 'h1':
                    text =
                        text.substring(0, p1) +
                        `<h1${classes.length > 0 ? classText : ''}${ids.length > 0 ? idText : ''}>${text.substring(p2 + 1, p3)}</h1>` +
                        text.substring(p3 + 1, text.length);

                    text = carkDown(text, p0 + 4);
                    break;
                case 'h2':
                    text =
                        text.substring(0, p1) +
                        `<h2${classes.length > 0 ? classText : ''}${ids.length > 0 ? idText : ''}>${text.substring(p2 + 1, p3)}</h2>` +
                        text.substring(p3 + 1, text.length);

                    // recursively parses the inner text of the element
                    text = carkDown(text, p0 + 4);
                    break;
                case 'h3':
                    text =
                        text.substring(0, p1) +
                        `<h3${classes.length > 0 ? classText : ''}${ids.length > 0 ? idText : ''}>${text.substring(p2 + 1, p3)}</h3>` +
                        text.substring(p3 + 1, text.length);

                    text = carkDown(text, p0 + 4);
                    break;
                case 'h4':
                    text =
                        text.substring(0, p1) +
                        `<h4${classes.length > 0 ? classText : ''}${ids.length > 0 ? idText : ''}>${text.substring(p2 + 1, p3)}</h4>` +
                        text.substring(p3 + 1, text.length);

                    carkDown(text, p0 + 4);
                    break;
                case 'h5':
                    text =
                        text.substring(0, p1) +
                        `<h5${classes.length > 0 ? classText : ''}${ids.length > 0 ? idText : ''}>${text.substring(p2 + 1, p3)}</h5>` +
                        text.substring(p3 + 1, text.length);

                    text = carkDown(text, p0 + 4);
                    break;
                case '^':
                    // img
                    text =
                        text.substring(0, p1) +
                        `<img src="${text.substring(p2 + 1, p3)}"${classes.length > 0 ? classText : ''}${ids.length > 0 ? idText : ''}>` +
                        text.substring(p3 + 1, text.length);

                    carkDown(text, p0 + 9);
                    break;
                case '*':
                    // bold
                    text =
                        text.substring(0, p1) +
                        `<b${classes.length > 0 ? classText : ''}${ids.length > 0 ? idText : ''}>${text.substring(p2 + 1, p3)}</b>` +
                        text.substring(p3 + 1, text.length);

                    text = carkDown(text, p0 + 4);
                    break;
                case '_':
                    // italicized
                    text =
                        text.substring(0, p1) +
                        `<i${classes.length > 0 ? classText : ''}${ids.length > 0 ? idText : ''}>${text.substring(p2 + 1, p3)}</i>` +
                        text.substring(p3 + 1, text.length);

                    text = carkDown(text, p0 + 4);
                    break;
                case '$':
                    // url has 2 parameters, we need to find the ,
                    // go backwards and find the first ,
                    let p4 = p0;
                    while (p4 > p2) {
                        if (textChars[p4] == ',')
                            break;

                        p4--;
                    }

                    // only parse if there it's carkdown compatible
                    const title = text.substring(p2 + 1, p4).indexOf('[') > 0 ? carkDown(text.substring(p2 + 1, p4), 0, lvl) : text.substring(p2 + 1, p4);

                    text =
                        text.substring(0, p1) +
                        `<a href="${text.substring(p4 + 1, p3).replace(/ /g, '')}"${classes.length > 0 ? classText : ''}${ids.length > 0 ? idText : ''}>${title}</a>` +
                        text.substring(p3 + 1, text.length);
                    break;
                case 'YT':
                    // youtube embeds
                    let url = text.substring(p2 + 1, p3);
                    let youtubeCode = url.substring(url.length - 11, url.length);

                    text = 
                        text.substring(0, p1) +
                        `<iframe class="youtube" src="https://www.youtube.com/embed/${youtubeCode}" 
                                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                                picture-in-picture" allowfullscreen></iframe>`
                        + text.substring(p3 + 1, text.length);
                    break;
            }

            if(textChars.length > p3 - p0) // <p> only when other text comes before or after it
                text = `<p>${carkDown(text, p0 + 9)}</p>`;
        }

        p0++; // this is kinda like the stack pointer
    }

    return text;
}

console.log(carkDown('$.hello[hello, g]'))