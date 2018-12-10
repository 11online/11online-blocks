/**
 * Block dependencies
 */
import './style.scss';
import './editor.scss';

import classnames from 'classnames';
import Inspector from "./inspector";
import Controls from "./controls";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element; 
const { RichText } = wp.editor;
const {
    Tooltip,
    TextControl,
} = wp.components;
const { Fragment } = wp.element; 


/**
 * Create an Edit Component
 */
export default class Edit extends Component {

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
                setAttributes
        } = this.props;

        return (
            <div className={ className } style={ { textAlign: textAlignment } }>
                <Fragment>
                    {/* <Inspector {...{ setAttributes, ...this.props }} /> */}
                    <Controls {...{ setAttributes, ...this.props }} />
                    <RichText
                        tagName="h3"
                        placeholder={ __( 'Add your custom title' ) }
                        value={ title }
                        onChange={ title => setAttributes( { title } ) }                           
                    />
                    <RichText
                        tagName="p"
                        placeholder={ __( 'Add your custom message' ) }
                        value={ message }
                        onChange={ message => setAttributes( { message } ) }                 		
                    />
                </Fragment>
            </div>
        );
    }
}