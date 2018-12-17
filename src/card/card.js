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
const { Component } = wp.element;
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
    }
    render() {
        const {
            attributes: { 
                cardCount,
                cardInd,
                titles,
                messages,
                title,
                message,
                textAlignment,
                styleClass,
                cardSelected,
            },
                className,
                setAttributes,
                isSelected,

        } = this.props;

        /*
        const classes = classnames(
            className,
            'card-block'
        );
        */

        { this.isSelected ?
            setAttributes( { cardSelected: true } )
            :
            setAttributes( { cardSelected: false } )
        }
  
        return (
            <div className={ styleClass } style={ { textAlign: textAlignment } }>
                <RichText
                    tagName="h3"
                    formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                    placeholder={ __( 'Add your custom title' ) }
                    value={ title }
                    // value={ titles[cardInd] }
                    onChange={ title => setAttributes( { title } ) }  
                    // onChange={ (value, cardInd) => setAttributes( { titles[cardInd]: value } ) }                          
                />
                <RichText
                    tagName="p"
                    formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                    placeholder={ __( 'Add your custom message' ) }
                    value={ message }
                    onChange={ message => setAttributes( { message } ) }                 		
                />
            </div>
        );

    }
}