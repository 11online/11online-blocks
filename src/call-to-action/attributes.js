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
    radioControl: {
        type: "string",
        default: "1",
    },
    selectControl: {
        type: "string",
        default: "A",
    },
    imgURL: {
        type: 'string',
        default: null,
    },
    imgID: {
        type: 'number',
        default: null,
    },
    imgOpacity: {
        type: 'number',
        default: "10", 
    },
    newTab: {
        type: 'boolean',
        default: true,
    }
};

export default attributes;