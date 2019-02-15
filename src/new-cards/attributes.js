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
                imgOpacity: '10',
                cardBtnPresent: false,
                buttonURL: 'http://',
                buttonText: 'Click here',
                buttonStyleClass: 'primary',
                newTab: true,
                colorFontControl: '#000000',
            },
        ],
    },
}

export default attributes;