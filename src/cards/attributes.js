const attributes = {
    columnClass: {
        type: 'string',
        default: 'one-half',
    },
    currentCard: {
        type: 'number',
        default: -1,
    }, 
    isEditing: {
        type: 'boolean',
        default: false,
    } ,
    align: {
        type: 'string',
        default: 'center',
    },
    cards: {
        type: 'array',
        default: [
            {
                cardTitle: '',
                cardText: '',
                cardTextAlignment: 'center',
                cardHeadingSize: 'h2',
                imgID: null,
                imgURL: null,
                cardBtnPresent: false,
                buttonURL: 'http://',
                buttonText: 'Click here',
                buttonStyleClass: 'primary',
                newTab: true,
                useColor: false,
                colorFontControl: '#000000',
                colorBackgroundControl: 'transparent',
            },
        ],
    },
}

export default attributes;