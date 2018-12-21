/**
 * Block dependencies
 */
import './style.scss';
import './editor.scss';

import classnames from 'classnames';
import Inspector from "./inspector";
import Controls from "./controls";
import Card from "./card";

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

    constructor(props) {
        super( ...arguments );
        this.props = props;
    }

    render() {
        const {
            attributes: { 
                styleClass,
                cardTextAlignment,
                cardID,
                cardTitle, 
                cardMessage, 
                cardImgID, 
                cardImgURL, 
                cardImgAlt,
                cardBtnURL,
                cardBtnText, 
                newTab,  
            },
                className,
                setAttributes
        } = this.props;

        const randomNumber = () => (
            Math.floor(Math.random() * 1000000)
        );

        return (
            <div className={ className } style={ { textAlign: cardTextAlignment } }>
                <Fragment>
                    <Inspector {...{ setAttributes, ...this.props }} />
                    <Controls {...{ setAttributes, ...this.props }} />
                    { cardID && <Card {...{ setAttributes, ...this.props }} /> }               
               </Fragment>
            </div>
        );
    }
}