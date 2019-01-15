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
    paddingTop: {
        type: 'string',
        default: '5',
    },
    paddingBottom: {
        type: 'string',
        default: '5',
    },
}

export default attributes;