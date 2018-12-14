const attributes = {
    textAlignment: {
        type: 'string',
    },
    cardCount: {
        type: 'number',
        default: 0,
    },
    cardInd: {
        type: 'number',
        default: 0,
    },
    cards: {
        type: 'array',
        default: [],
    },
    titles: {
        type: 'array',
        source: 'html',
        selector: 'h3',
    },
    title: {
        // type: 'array',
        source: 'html',
        selector: 'h3',
    },
    messages: {
        type: 'array',
        source: 'html',
        selector: 'p',
    },
    message: {
        // type: 'array',
        source: 'html',
        selector: 'p',
    },
    columnClass: {
        type: 'string',
        default: 'none',
    },
    styleClass: {
        type: 'string',
        default: 'card-primary',
    },
    imgID: {
        type: 'number',
        default: null,
    },
    imgURL: {
        type: 'string',
        default: null,
    },
    cardSelected: {
        type: 'boolean',
        default: false,
    },
    
    // cards: {
    //     type: 'array',
    //     source: 'query',
    //     selector: '.card-eleven',
    //     query: {
    //         cardTitle: {
    //             type: 'string',
    //             source: 'html',
    //             selector: 'h3',
    //         },
    //         cardText: {
    //             type: 'string',
    //             source: 'html',
    //             selector: 'p',
    //         },
    //         cardImgID: {
    //             type: 'number',
    //             default: null,
    //         },
    //         cardImgURL: {
    //             type: 'string',
    //             default: null,
    //         },
    //         cardImgAlt: {
    //             type: 'string',
    //             default: null,
    //         },
    //     },
    // },

    /*
    title: {
        type: 'string',
        source: 'text',
    },
    headline: {
        source: 'html',
        selector: 'h3',
    },
    message: {
        source: 'html',
        selector: 'p',
    },
    text: {
        type: 'string',
        source: 'text',
        selector: 'a',
        default: 'Click here',
    },
    url: {
        type: 'string',
        source: 'attribute',
        attribute: 'href',
        selector: 'a',
        default: 'http://'              
    },
    
    align: {
        type: 'string',
    },
    styleClass: {
        type: 'string',
        default: 'primary',
    },
    bgrOption: {
        type: 'string',
        default: 'bgrImage',
    },
    imgID: {
        type: 'number',
        default: null,
    },
    imgURL: {
        type: 'string',
        default: null,
    },
    imgOpacity: {
        type: 'number',
        default: "10", 
    },
    newTab: {
        type: 'boolean',
        default: true,
    },
    colorFontControl: {
        type: 'string',
        default: '#000000'
    },
    colorBackgroundControl: {
        type: 'string',
        default: '#FFFFFF'
    },
    */
};

export default attributes;