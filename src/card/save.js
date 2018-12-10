/**
 * Block dependencies
 */
import './style.scss';

import classnames from 'classnames';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element; 
const { RichText } = wp.editor;

 /**
 * Create a Save Component
 */
export default class Save extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { 
            attributes: {
                title,
                message,
                textAlignment,
            }, 
            className,
        } = this.props;
        return (
            <div className={ className } style={ { textAlign: textAlignment } }>
                <RichText.Content 
                    tagName="h3" 
                    value={ title }
                />
                <RichText.Content 
                    tagName="p" 
                    value={ message }
                /> 
            </div>
        );

    }
}