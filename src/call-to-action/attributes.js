const attributes = {
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
    textAlignment: {
        type: 'string',
        default: 'center',
    },
    align: {
        type: 'string',
        default: 'center',
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
        default: 'transparent',
    },
};

export default attributes;