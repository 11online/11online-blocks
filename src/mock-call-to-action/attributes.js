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
    },
    url: {
        type: 'string',
        source: 'attribute',
        attribute: 'href',
        selector: 'a',               
    },
    textAlignment: {
        type: 'string',
    },
    align: {
        type: 'string',
    },
    highContrast: {
        type: 'boolean',
        default: false,
    },
    radioControl: {
        type: "string",
        default: "1",
    },
    toggleControl: {
        type: "boolean",
    },
    selectControl: {
        type: "string",
        default: "A",
    },
    imgURL: {
        type: 'string',
        source: 'attribute',
        attribute: 'src',
        selector: 'img',
        default: null,
    },
    imgID: {
        type: 'number',
        default: null,
    },
    imgAlt: {
        type: 'string',
        source: 'attribute',
        attribute: 'alt',
        selector: 'img',
        default: null, 
    },
};

export default attributes;