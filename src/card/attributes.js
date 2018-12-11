const attributes = {
    textAlignment: {
        type: 'string',
    },
    title: {
        // type: 'array',
        source: 'html',
        selector: 'h3',
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
    cardInd: {
        type: 'number',
        default: 0,
    }

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