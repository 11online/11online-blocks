/**
 * Cards Component dependencies
 */
import './editor.scss';
import './style.scss';

import classnames from 'classnames';
import Controls from "./controls";
import Inspector from "./inspector";
import Card from "./card";

/**
 * Used Libraries
 */
const { Component, Fragment } = wp.element;

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
                isEditing,
            },
                setAttributes,
                inEditor,
                isSelected,
        } = this.props;

        const firstClass = classnames( columnClass, 'first' );

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
        };

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
        };

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
                    { isSelected &&
                        <Fragment> 
                            <Controls {...{ setAttributes, ...this.props }} />
                            { isEditing && <Inspector {...{ setAttributes, ...this.props }} /> }
                        </Fragment>
                    }
                    { renderCards(true) }
                </Fragment>
            : 
                <Fragment>
                    { renderCards(false) }
                </Fragment>
        );
    }
}