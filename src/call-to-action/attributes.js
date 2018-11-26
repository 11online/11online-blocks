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
    highContrast: {
        type: 'boolean',
        default: false,
    },
    radioControl: {
        type: "string",
        default: "a"
    },
    toggleControl: {
        type: "boolean"
    },
    selectControl: {
        type: "string"
    },
};

export default attributes;