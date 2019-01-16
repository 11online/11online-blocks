const attributes = {
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
    imgOpacity: {
        type: 'number',
        default: "10", 
    },
    colorBackgroundControl: {
        type: 'string',
        default: 'transparent'
    },
    padTop: {
        type: 'number',
        default: '20',
    },
    padBottom: {
        type: 'number',
        default: '20',
    },
}

export default attributes;