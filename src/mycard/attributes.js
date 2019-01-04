const attributes = {
    cardTitle: {
        // type: 'string',
        // source: 'text',
        type: 'string',
        source: 'html',
        selector: 'h2',
        // source: 'text',
        // selector: '.card-title-eleven-online',
        default: 'Card Title',
    },
    cardText: {
        // type: 'string',
        // source: 'text',
        type: 'string',
        source: 'html',
        selector: 'p',
        default: 'Card text content',
    },
    cardTextAlignment: {
        type: 'string',
    },
    cardImgID: {
        type: 'number',
        default: null,
    },
    cardImgURL: {
        type: 'string',
        // source: 'attribute',
        // attribute: 'src',
        // selector: 'img',
        default: null,
    },
    cardImgAlt: {
        type: 'string',
        // source: 'attribute',
        // attribute: 'alt',
        // selector: 'img',
        default: null,
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
    newTab: {
        type: 'boolean',
        default: true,
    },
    useColor: {
        type: 'boolean',
        default: false,
    },
    colorFontControl: {
        type: 'string',
        default: '#000000'
    },
    colorBackgroundControl: {
        type: 'string',
        default: 'transparent',
    },
}

export default attributes;