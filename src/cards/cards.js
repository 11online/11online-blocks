/**
 * Cards Component dependencies
 */
import './editor.scss';
import './style.scss';

import classnames from 'classnames';
import Card from "./card";

/**
 * Used Libraries
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
} = wp.components;

/**
 * Create a Cards Component
 */
export default class Card extends Component {

    constructor(props) {
        super( ...arguments );
        this.props = props;
    }

    render() {
        const {
            attributes: { 
                columnClass,
                cards,
            },
                setAttributes
        } = this.props;

        const firstClass = classnames( columnClass, 'first' );

        const isRightSpot = (colClass, pos) => {
            return (
            (
                (colClass === 'one-half' && (pos+1) % 2 === 0) ||
                (colClass === 'one-third' && (pos+1) % 3 === 0) ||
                (colClass === 'one-fourth' && (pos+1) % 4 === 0) ||
                (colClass === 'one-sixth' && (pos+1) % 6 === 0)
            )  ?  true
                
           : false );
        }

        const renderCards = ( canEdit ) => {
            let myCards = [];
            const currCount = cards.length;
            myCards.push( 
                <div className={ firstClass }>                 
                    <Card index={ 0 } editable={ canEdit } {...{ setAttributes, ...this.props }} />
                </div> 
            ); 
            for (let i = 1; i < currCount; i++) {
                if ( isRightSpot(columnClass, i) )
                    myCards.push( <div className="clearfix"></div> );
                myCards.push( 
                    <div className={ columnClass }>                 
                        <Card index={ i } editable={ canEdit } {...{ setAttributes, ...this.props }} />
                    </div> 
                ); 
            }
            if ( !isRightSpot(columnClass, cardCount-1) )
                myCards.push( <div className="clearfix"></div> );
            return myCards;
        }

        return (
            editable ? 
                <Fragment>
                    { renderCards(true) }
                </Fragment>
                : 
                <Fragment>
                    { renderCards(false) }
                </Fragment>
        );
    }
}