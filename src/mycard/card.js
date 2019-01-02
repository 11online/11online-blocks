/**
 * Card Component dependencies
 */
import icons from './icons';
import './editor.scss';

import classnames from 'classnames';

/**
 * Internal Libraries
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText } = wp.editor;
const {
} = wp.components;

/**
 * Create a Card Component
 */
export default class Card extends Component {

    constructor(props) {
        super( ...arguments );
        this.props = props;
        this.state = {
            isEditing: false
        }
    }

    render() {
        const {
            attributes: {
                cardID, 
                cardTitle,
                cardText,
                // card: {
                //     // cardID,
                    
                // }
            },
            className,
            setAttributes,
            editable,
        } = this.props;

        const classes = classnames(
            className,
            'mycard-eleven-online'
        );

        //const setCardID = () => setAttributes( { cardID: "1" } );

        if (!cardID) {
            this.props.setAttributes( { cardID: "1" } );
        }

        return (
            editable ?
                <div className={ classnames } id={ cardID }>
                    <Fragment>
                        <RichText
                            tagName="h2"
                            placeholder={ __( 'Add your card title' ) }
                            value={ cardTitle }
                            // style={ { textAlign: textAlignment, color: colorFontControl } }
                            onChange={ cardTitle => setAttributes( { cardTitle } ) }                           
                        />
                        <RichText
                            tagName="p"
                            placeholder={ __( 'Add your card text' ) }
                            value={ cardText }
                            // style={ { textAlign: textAlignment, color: colorFontControl } }
                            onChange={ cardText => setAttributes( { cardText } ) }                 		
                        />
                    </Fragment>
                </div>
            :
                <Fragment>
                <div className={ classes } id={ cardID }>
                    <div className="card-title-eleven-online">
                        <h2>{ cardTitle }</h2>
                    </div>
                    <p>{ cardText }</p>
                </div>
            </Fragment>
        );
    }
}