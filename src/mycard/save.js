/**
 * Block dependencies
 */
import './style.scss';

import classnames from 'classnames';
import Card from "./card";

/**
 * Internal block libraries
 */
const { Component } = wp.element; 

 /**
 * Create a Save Component
 */
export default class Save extends Component {

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

        // const notEditable = () => {
        //     setAttributes({
        //         cardEditable: false,
        //     } );
        // };

        return (
            <div className={ className }>
                {/* { this.notEditable() } */}
                { <Card editable={ false } {...{ setAttributes, ...this.props }} /> }
            </div>
        );

    }
}