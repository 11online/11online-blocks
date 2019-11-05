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
        default: '10',
    },
	useOverlay: {
		type: 'string',
		default: 'no'
	},
	colorOverlayControl: {
		type: 'string',
		default: 'transparent'
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
    align: {
        type: 'string',
        default: 'wide',
    },
}

export default attributes;
