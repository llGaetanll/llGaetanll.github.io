class Journal {
    constructor(category) {
        this.category = category;
    }

    static create(category = '') {
        if(!this.instance) {
            this.instance = new Journal(category);
            this.instance.__init();
        }

        return this.instance;
    }

    __init() {
        this.loadPosts(this.category);
    }

    loadPosts(category) {

        if(this.category == '') {
            let postKeys = Object.keys(JOURNAL.posts);
            let itt = 0;
            for(let key in JOURNAL.posts) {
                JOURNAL.posts[key].forEach((e) => {
                    let image = './assets/img/journal/' + e.img;
            
                    let post =
                    `<div class="column">
                        <div style="flex:1">
                            <img src="${image}" />
                        </div>
                        <div class="post-description">
                            <h5>${e.type}</h5>
                            <h4>${e.title}</h4>
                            <p>${e.text}</p>
                            <a href="${e.url}" >Read More</a>
                        </div>
                        
                    </div>\n`;

                    let i = itt % 3;
                    $(`#col-${i}`).append(post);
                    itt++;
                });
            }

            return;
        }

        // can't find category
        if(!JOURNAL.posts[this.category]) {
            throw new Error('No posts of type ',this.category);
        }

        switch (category) {
            case "Insights":
                // 3 columns
                if(!$('#col-3')) {
                    // remove new column
                    $('#col-3').remove();
                }

                if(!$('#col-2')) {
                    $('.row.main').append('<div class="column journal" id="col-2" ></div>');
                }

                JOURNAL.posts[this.category].forEach((element, itterator) => {
                    let image = './assets/img/journal/' + element.img;
                    
                    let post =
                    `<div class="column">
                        <div style="flex:1">
                            <img src="${image}" />
                        </div>
                        <div class="post-description">
                            <h5>${element.type}</h5>
                            <h4>${element.title}</h4>
                            <p>${element.text}</p>
                            <a href="${element.url}" >Read More</a>
                        </div>
                    </div>\n`;
        
                    let i = itterator % 3;
        
                    $(`#col-${i}`).append(post);
                });
                break;
            case "Awards":
                // 4 columns
                if(!$('#col-3')) {
                    $('.row.main').append('<div class="column journal" id="col-3" ></div>');
                }
                $('.row.main').append('<div class="column journal" id="col-3" ></div>');

                JOURNAL.posts[this.category].forEach((element, itterator) => {
                    let image = './assets/img/journal/' + element.img;
                    
                    let post =
                    `<div class="column">
                        <div style="flex:1">
                            <img src="${image}" />
                        </div>
                        <div class="post-description">
                            <h5>${element.type}</h5>
                            <h4>${element.title}</h4>
                            <p>${element.text}</p>
                            <a href="${element.url}" >Read More</a>
                        </div>
                    </div>\n`;
        
                    let i = itterator % 4;
        
                    $(`#col-${i}`).append(post);
                });

                break;
            
            case "Press": 
                if($('#col-3')) $('#col-3').remove();
                if($('#col-2')) $('#col-2').remove();

                JOURNAL.posts[this.category].forEach((element, itterator) => {
                    let image = './assets/img/journal/' + element.img;
                    
                    let post =
                    `<div class="column">
                        <div style="flex:1">
                            <a href="${element.url}" >
                                <img src="${image}" />
                            </a>
                        </div>
                    </div>\n`;
        
                    let i = itterator % 2;
        
                    $(`#col-${i}`).append(post);
                });
        }
        
        return;
    }
}

$(document).ready(function() {
    let category = getJournalCategory();
    Journal.create(category);
});

function getJournalCategory() {
    let url = document.location.href;
    let params = url.split('?')[1];
    return params;
}