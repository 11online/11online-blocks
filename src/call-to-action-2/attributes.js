const attributes = {
    headline: {
        type: 'string',
    },
    message: {
        type: 'string',
    },
    textAlignment: {
        type: 'string',
        default: 'left',
    },
    headingSize: {
        type: 'string',
        default: 'h2',
    },
    buttons: {
        type: 'array',
        default: [],
    },
    buttonStyleClass: {
        type: 'string',
        default: 'primary',
    },
    align: {
        type: 'string',
        default: 'wide',
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
    logoID: {
        type: 'number',
        default: null,
    },
    logoURL: {
        type: 'string',
        default: null,
    },
    logoAlt: {
        type: 'string',
        default: null,
    },
    imgOpacity: {
        type: 'number',
        default: "10", 
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