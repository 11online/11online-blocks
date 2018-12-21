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
                cardID,
                cardTextAlignment,
            }, 
            className,
            setAttributes
        } = this.props;

        return (
            <div className={ className } style={ { textAlign: cardTextAlignment } }>
               { cardID && <Card {...{ setAttributes, ...this.props }} /> }
               <h1>My Title {cardID}</h1>
            </div>
        //  <div>Something went wrong</div>
        );

    }
}