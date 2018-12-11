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

    constructor() {
        super( ...arguments );
    }
    render() {
        const {
            attributes: { 
                title,
                message,
                textAlignment,
                styleClass,
            },
                className,
                setAttributes
        } = this.props;

        return (
            <div className={ className } style={ { textAlign: textAlignment } }>
                <RichText
                    tagName="h3"
                    formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                    placeholder={ __( 'Add your custom title' ) }
                    value={ title }
                    onChange={ title => setAttributes( { title } ) }                           
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