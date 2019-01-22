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
    cards: {
        type: 'array',
        default: [
            {
                cardTitle: '',
                cardText: '',
                cardTextAlignment: 'left',
                cardHeadingSize: 'h2',
                cardImgID: null,
                cardImgURL: null,
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