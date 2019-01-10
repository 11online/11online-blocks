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
const {
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
                columnClass,
                cardCount,
            },
                className,
                setAttributes
        } = this.props;

        const firstClass = classnames( columnClass, 'first' );
        const classes = classnames( className, 'main-wrapper-eleven-online' );

        return (
            <div className={ classes }> 
                <Fragment>
                   <div className={ firstClass }>                 
                        <Card editable={ true } {...{ setAttributes, ...this.props }} />
                        <p>{cardCount}</p>
                    </div> 
                    <div className="clearfix"></div> 
                </Fragment>               
            </div>
        );
    }
}