const attributes = {
    columnClass: {
        type: 'string',
        default: 'one-half',
    },
    cardCount: {
        type: 'number',
        default: 1,
    },
    isEditing: {
        type: 'boolean',
        default: false,
    },
    currentID: {
        type: 'string',
        default: null,
    },
    cards: {
        type: 'array',
        default: [],
    },
    cardID: {
        type: 'string',
        default: null,
    },
    cardTitle: {
        type: 'string',
        default: 'Card Title',
    },
    cardText: {
        type: 'string',
        default: 'Card text content',
    },
    cardTextAlignment: {
        type: 'string',
    },
    cardHeadingSize: {
        type: 'string',
        default: 'h2',
    },
    cardImgID: {
        type: 'number',
        default: null,
    },
    cardImgURL: {
        type: 'string',
        default: null,
    },
    cardBtnPresent: {
        type: 'boolean',
        default: false,
    },
    buttonURL: {
        type: 'string',
        source: 'attribute',
        attribute: 'href',
        selector: 'a',
        default: 'http://'       
    },
    buttonText: {
        type: 'string',
        source: 'text',
        selector: 'a',
        default: 'Click here',
    },
    buttonStyleClass: {
        type: 'string',
        default: 'primary',
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