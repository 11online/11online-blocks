const attributes = {
    styleClass: {
        type: 'string',
        default: 'card-primary',
    },
    newTab: {
        type: 'boolean',
        default: true,
    },
    cardID: {
        type: 'number',
        default: null,
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
        default: null,
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
    cardBtnPresent: {
        type: 'boolean',
        default: false,
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
};

export default attributes;