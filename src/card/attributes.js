const attributes = {
    columnClass: {
        type: 'string',
        default: 'one-half',
    },
    styleClass: {
        type: 'string',
        default: 'card-primary',
    },
    cards: {
        type: 'array',
        default: [],
    },
    card: {
        type: 'object',
        cardID: {
            type: 'number',
            default: 0,
        },
        cardImgID: {
            type: 'number',
            default: null,
        },
        cardImgURL: {
            type: 'string',
            source: 'attribute',
            attribute: 'src',
            selector: 'img',
            default: null,
        },
        cardImgAlt: {
            type: 'string',
            source: 'attribute',
            attribute: 'alt',
            selector: 'img',
            default: '',
        },
        cardTitle: {
            type: 'string',
            source: 'html',
            selector: 'h3',
        },
        cardMessage: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
        cardBtnURL: {
            type: 'string',
            source: 'attribute',
            attribute: 'href',
            selector: 'a',
            default: 'http://'     
        },
        cardBtnText: {
            type: 'string',
            source: 'text',
            selector: 'a',
            default: 'Click here',
        },
        cardTextAlignment: {
            type: 'string',
        },
    },
};

export default attributes;