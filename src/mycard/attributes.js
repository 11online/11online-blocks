const attributes = {
    cardID: {
        type: 'string',
        source: "attribute",
        selector: ".mycard-eleven-online",
        attribute: "id",
        default: '',
    },
    cardTitle: {
        type: 'string',
        // source: 'text',
        // selector: '.card-title-eleven-online',
        // default: 'Card Title',
    },
    cardText: {
        type: 'string',
        source: 'html',
        selector: 'p',
        // default: 'Card text content',
    },
    /*
    card: {
        type: 'object',
        source: 'query',
        selector: '.mycard-eleven-online',
        query: {
            // cardID: {
            //     type: 'number',
            //     // source: "attribute",
            //     // attribute: "id",
            //     default: 1,
            // },
            // cardTitle: {
            //     type: 'string',
            //     source: 'text',
            //     selector: '.card-title-eleven-online',
            //     default: 'Card Title',
            // },
            // cardText: {
            //     type: 'string',
            //     source: 'html',
            //     selector: 'p',
            //     default: 'Card text content',
            // },
        }

    },
    */
}

export default attributes;