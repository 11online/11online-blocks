/**
 * Card Component dependencies
 */
import './editor.scss';

import classnames from 'classnames';
import Controls from "./controls";

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
    }

    render() {
        const {
            attributes: {
                cardTitle,
                cardText,
            },
            className,
            setAttributes,
            editable,
        } = this.props;

        const classes = classnames(
            className,
            'mycard-eleven-online'
        );

        return (
            editable ?
                <div className={ classnames }>
                    <Fragment>
                        <Controls {...{ setAttributes, ...this.props }} />
                        <RichText
                            tagName="h2"
                            placeholder={ __( 'Add your card title' ) }
                            value={ cardTitle }
                            // style={ { textAlign: textAlignment, color: colorFontControl } }
                            onChange={ cardTitle  => setAttributes( { cardTitle  } ) }         
                        />
                        <RichText
                            tagName="p"
                            placeholder={ __( 'Add your card text' ) }
                            value={ cardText }
                            // style={ { textAlign: textAlignment, color: colorFontControl } }
                            onChange={ cardText  => setAttributes( { cardText  } ) }                   		
                        />
                    </Fragment>
                </div>
           :
                <Fragment>
                    <div className={ classes }>
                        <h2>{ cardTitle }</h2>
                        <p>{ cardText }</p>
                    </div>
                </Fragment>
        );
    }
}