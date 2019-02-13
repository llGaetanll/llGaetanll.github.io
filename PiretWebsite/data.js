const HOME = {
  "slideshow": [{
      "Title": "Title of the project",
      "desc": "A short description of the project",
      "url": "This is where the project redirects",
      "img": "Ocean Front 2.jpg"
    },
    {
      "Title": "Title of the project",
      "desc": "A short description of the project",
      "url": "This is where the project redirects",
      "img": "On The Water.jpg"
    },
    {
      "Title": "Title of the project",
      "desc": "A short description of the project",
      "url": "This is where the project redirects",
      "img": "Villa Fendi.jpg"
    }
  ],
  "text": {
    "title": "This is the title",
    "desc": [
        [`Piret Johanson Studio is a Miami-based Concierge Design Firm established in 2001, and specializes in bespoke
        European Designs. Our projects range from luxury homes and modern workspaces to art galleries, and our
        services are offered throughout the US, Europe and Latin America. `,
        `PJS has received multiple international
      design awards such as Interior Design Magazine’s Best of the Year Finalist and International Property Awards’
      Best Office Interior. The studio’s work has also been featured in top publications such as Interior Design
      Magazine, Elle, and Miami Magazine.`
      ]
      
    ]
  }
}

const PROJECTS_CARDS = [{
    "title": "Project Name",
    "desc": "This is some text",
    "img": "./assets/img/projects/main/IMG_0098.jpg",
    "name": "PARIS_PIED_A_TERRE"
  },
  {
    "title": "This is cool!",
    "desc": "This is some text 2",
    "img": "./assets/img/projects/main/3.jpg",
    "url": ""
  },
  {
    "title": "This is cool!",
    "desc": "This is some text 3",
    "img": "./assets/img/projects/main/ideoboxgallerycover.jpg",
    "url": ""
  },
  {
    "title": "This is cool!",
    "desc": "This is some text 3",
    "img": "./assets/img/projects/main/OnTheWaterCoverIMG.jpg",
    "url": ""
  }
];

const PROJECTS = {
  "PARIS_PIED_A_TERRE": {
    "Intro": {
      "Title": "Paris Pied-a-Terre",
      "Location": "Paris - France",
      "desc": [
        "This is a description of the project, you can make it as long or as short as you want it doesnt matter",
        "Each string in this array is its own paragraph.",
        "This is a new paragraph that will show up on the page",
        "This is the 4th paragraph"
      ],
      "mainImg": "IMG_0098.jpg"
    },
    "Images": [
      [
        "IMG_0112.jpg",
        "IMG_0085.jpg"
      ],
      "IMG_0026.jpg"
    ]
  }
};

const TOPBAR = {
  "logo": "./assets/img/root/PJS_LOGO.png",
  "tabs": [{
      "HOME": ["index.html"]
    },
    {
      "ABOUT": ["about.html", {
          "The Studio": "where the tab leads"
        },
        {
          "The Designer": "where the tab leads"
        },
        {
          "The Philosophy": "where the tab leads"
        },
        {
          "The Process": "where the tab leads"
        },
      ]
    },
    {
      "PROJECTS": ["projects.html",
        {
          "Commercial": "where the tab leads"
        },
        {
          "Residential": "where the tab leads"
        }
      ]
    },
    {
      "JOURNAL": ["", {
          "Insights": "journal.html?Insights"
        },
        {
          "Awards": "journal.html?Awards"
        },
        {
          "Press": "journal.html?Press"
        }
      ]
    },
    {
      "CONTACT": ["contact.html"]
    }
  ]
}

const JOURNAL = {
  "posts": {
    "Insights": [{
      "type" : "PRESS / PRINT / OCT ’14",
      "title": "CURVES a la MODE – INTERIOR DESIGN MAGAZINE",
      "img": "sampleimg.png",
      "text": `While modeling in Paris, Piret Johanson was in and out
      of ateliers, meeting Yves Saint Laurent and Karl
      Lagerfeld. That fashionable background informed the
      budding interior designer’s two-phase scheme for the
      New York office of Valtech, a chic multinational…`,
      "url": "where this post goes to"
    },
    {
      "type" : "PRESS / PRINT / OCT ’14",
      "title": "CURVES a la MODE – INTERIOR DESIGN MAGAZINE",
      "img": "sampleimg.png",
      "text": `While modeling in Paris, Piret Johanson was in and out
      of ateliers, meeting Yves Saint Laurent and Karl
      Lagerfeld. That fashionable background informed the
      budding interior designer’s two-phase scheme for the
      New York office of Valtech, a chic multinational…`,
      "url": "where this post goes to"
    }],
    "Awards": [{
      "type" : "PRESS / PRINT / OCT ’14",
      "title": "CURVES a la MODE – INTERIOR DESIGN MAGAZINE",
      "img": "sampleimg.png",
      "text": `While modeling in Paris, Piret Johanson was in and out
      of ateliers, meeting Yves Saint Laurent and Karl
      Lagerfeld. That fashionable background informed the
      budding interior designer’s two-phase scheme for the
      New York office of Valtech, a chic multinational…`,
      "url": "where this post goes to"
    },
    {
      "type" : "PRESS / PRINT / OCT ’14",
      "title": "CURVES a la MODE – INTERIOR DESIGN MAGAZINE",
      "img": "sampleimg.png",
      "text": `While modeling in Paris, Piret Johanson was in and out
      of ateliers, meeting Yves Saint Laurent and Karl
      Lagerfeld. That fashionable background informed the
      budding interior designer’s two-phase scheme for the
      New York office of Valtech, a chic multinational…`,
      "url": "where this post goes to"
    },
    {
      "type" : "PRESS / PRINT / OCT ’14",
      "title": "CURVES a la MODE – INTERIOR DESIGN MAGAZINE",
      "img": "sampleimg.png",
      "text": `While modeling in Paris, Piret Johanson was in and out
      of ateliers, meeting Yves Saint Laurent and Karl
      Lagerfeld. That fashionable background informed the
      budding interior designer’s two-phase scheme for the
      New York office of Valtech, a chic multinational…`,
      "url": "where this post goes to"
    },
    {
      "type" : "PRESS / PRINT / OCT ’14",
      "title": "CURVES a la MODE – INTERIOR DESIGN MAGAZINE",
      "img": "sampleimg.png",
      "text": `While modeling in Paris, Piret Johanson was in and out
      of ateliers, meeting Yves Saint Laurent and Karl
      Lagerfeld. That fashionable background informed the
      budding interior designer’s two-phase scheme for the
      New York office of Valtech, a chic multinational…`,
      "url": "where this post goes to"
    }],
    "Press": [{
      "img": "sampleimg.png",
      "url": "where this post goes to"
    },
    {
      "img": "sampleimg.png",
      "url": "where this post goes to"
    },
    {
      "img": "sampleimg.png",
      "url": "where this post goes to"
    },
    {
      "img": "sampleimg.png",
      "url": "where this post goes to"
    },]
  }
}