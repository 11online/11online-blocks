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
                title,
                message,
                textAlignment,
                styleClass,
                columnClass,
                cardCount,
            },
                className,
                setAttributes
        } = this.props;

        const firstClass = classnames( columnClass, 'first' );

        const isRightSpot = (colClass, pos) => {
            return
            (
                (colClass === 'one-half' && (pos+1) % 2 === 0) ||
                (colClass === 'one-third' && (pos+1) % 3 === 0) ||
                (colClass === 'one-fourth' && (pos+1) % 4 === 0) ||
                (colClass === 'one-sixth' && (pos+1) % 6 === 0)
            )  ?  true
                
           : false;
        }

        const renderCards = () => {
            let cards = [];
            cards.push( 
                <div className={ firstClass }>                 
                    <Card {...{ setAttributes, ...this.props }} />
                </div> 
            ); 
            for (let i = 1; i < cardCount; i++) {
                if ( isRightSpot(columnClass, i) )
                    cards.push( <div className="clearfix"></div> );
                cards.push( 
                    <div className={ columnClass }>                 
                        <Card {...{ setAttributes, ...this.props }} />
                    </div> 
                ); 
            }
            if ( !isRightSpot(columnClass, cardCount-1) )
                    cards.push( <div className="clearfix"></div> );
            return cards;
        }

        return (
            <div className={ className } style={ { textAlign: textAlignment } }>
                <Fragment>
                    <Inspector {...{ setAttributes, ...this.props }} />
                    <Controls {...{ setAttributes, ...this.props }} />

                    { ( columnClass !== 'none' ) ?
                        <Fragment>
                            { renderCards() }
                        </Fragment>
                        :
                        <p>Please select a column class first</p>
                    }
                </Fragment>
            </div>
        );
    }
}