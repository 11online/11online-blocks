const attributes = {
    title: {
        source: 'string',
        source: 'text',
        default: 'Resource',
    },
    titleHeadingSize: {
        type: 'string',
        default: 'h2',
    },
    titleColor: {
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
    colorBackgroundControl: {
        type: 'string',
        default: '#FFFFFF'
    },
};

export default attributes;