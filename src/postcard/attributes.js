const attributes = {
    title: {
        source: 'string',
        default: 'Resource',
    },
    titleHeadingSize: {
        type: 'string',
        default: 'h2',
    },
    colorFontControl: {
        type: 'string',
        default: '#000000'
    },
    titleAlignment: {
        type: 'string',
    },
    text: {
        type: 'string',
        source: 'html',
        selector: 'p',
        default: 'Paragraph content',
    },
    imgID: {
        type: 'number',
        default: null,
    },
    imgURL: {
        type: 'string',
        default: null,
    },
    useBackgroundColor: {
        type: 'boolean',
        default: false,
    },
    colorBackgroundControl: {
        type: 'string',
        default: 'transparent',
    },
};

export default attributes;