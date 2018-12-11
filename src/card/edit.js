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
                columnClass,
            },
                className,
                setAttributes
        } = this.props;

        const firstClass = classnames(
            columnClass,
            'first'
        );

        const cards = [];

        return (
            <div className={ className } style={ { textAlign: textAlignment } }>
                <Fragment>
                    <Inspector {...{ setAttributes, ...this.props }} />
                    <Controls {...{ setAttributes, ...this.props }} />
                    { columnClass === 'none' &&
                        <p>Please select a column class first</p>
                    }
                    { columnClass === 'one-half' ? 
                        <Fragment>
                            <div className={ firstClass }>
                                <Card {...{ setAttributes, ...this.props }} />
                            </div>
                            <div className={ columnClass }>
                                <Card {...{ setAttributes, ...this.props }} />
                            </div>
                            <div className="clearfix"></div>
                        </Fragment>
                        : ''
                    }
                </Fragment>
            </div>
        );
    }
}