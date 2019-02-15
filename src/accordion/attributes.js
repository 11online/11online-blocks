const attributes = {
    title: {
        type: 'string',
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
        default: 'center'
    },
    text: {
        type: 'string',
        source: 'html',
        selector: 'p',
    },
    useBackgroundColor: {
        type: 'boolean',
        default: false,
    },
    colorBackgroundControl: {
        type: 'string',
        default: 'transparent',
    },
    align: {
        type: 'string',
        default: 'wide',
    },
    btnID: {
        type: 'string',
        default: null,
    }
};

export default attributes;