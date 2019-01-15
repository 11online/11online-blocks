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
export default class Cards extends Component {

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
                setAttributes,
                inEditor,
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
                    
            : false 
           );
        }

        const isFirst = (colClass, pos) => {
            return (
                (
                    (colClass === 'one-half' && pos % 2 === 0) ||
                    (colClass === 'one-third' && pos % 3 === 0) ||
                    (colClass === 'one-fourth' && pos % 4 === 0) ||
                    (colClass === 'one-sixth' && pos % 6 === 0)

                ) ? true
                : false 
            );
        }

        const renderCards = ( canEdit ) => {
            const myCards = [];
            const currCount = cards.length;
            let currClass;
            
            for (let i = 0; i < currCount; i++) {
                currClass = isFirst(columnClass, i) ? firstClass : columnClass;
                myCards.push( 
                    <div className={ currClass }>                 
                        <Card index={ i } editable={ canEdit } {...{ setAttributes, ...this.props }} />
                    </div> 
                ); 
                if ( isRightSpot(columnClass, i) )
                    myCards.push( <div className="clearfix"></div> );
            }
            if ( !isRightSpot(columnClass, currCount-1) )
                myCards.push( <div className="clearfix"></div> );
            return myCards;
        }

        return (
            inEditor ? 
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