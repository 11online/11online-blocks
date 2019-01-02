/**
 * Block dependencies
 */
import './style.scss';
import './editor.scss';

import classnames from 'classnames';
import Card from "./card";

/**
 * Internal block libraries
 */
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
                cardEditable,
            },
            className,
            setAttributes,
            editable,
        } = this.props;

        // const editable = () => {
        //     setAttributes({
        //         cardEditable: true,
        //     } );
        // };

        return (
            <div className={ className }>
                <Fragment>
                    {/* { this.editable() } */}
                    { <Card editable={ true } {...{ setAttributes, ...this.props }} /> }               
               </Fragment>
            </div>
        );
    }
}