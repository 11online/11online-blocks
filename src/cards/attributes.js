const attributes = {
    columnClass: {
        type: 'string',
        default: 'one-half',
    },   
    cards: {
        type: 'array',
        default: [
            {
                isEditing: false,
                cardTitle: 'Card Title',
                cardText: 'Card text content',
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
                colorBackgroundControl: '#FFFFFF',
            },
        ],
    },
}

export default attributes;