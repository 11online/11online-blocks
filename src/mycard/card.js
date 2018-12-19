/**
 * Card Component dependencies
 */
import icons from './icons';
import './editor.scss';

import classnames from 'classnames';

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

    constructor(currCardId) {
        super( ...arguments );
        this.props.card.cardID = currCardId;
        this.state = {
            isEditing: false
        }
    }
    render() {
        const {
            attributes: { 
                card: {
                    cardID,
                    cardImgID,
                    cardImgURL,
                    cardImgAlt,
                    cardTitle,
                    cardMessage,
                    cardBtnURL,
                    cardBtnText,
                    cardTextAlignment,
                },
            },
                setAttributes,
                isSelected,

        } = this.props;

        const setStateToTrue = () => {
            this.setState(() => 
              this.state.isEditing = true
            );
        }

        const setStateToFalse = () => {
            this.setState(() => 
              this.state.isEditing = true
            );
        }

        const changeState = () => {
            this.setState((prevState, props) => 
              this.state.isEditing = ! prevState.isEditing
            );
        }
  
        return (
            <Fragment>
            {  () => setAttributes( { cardID: this.props.card.cardID } ) }
            <div className={ styleClass } style={ { textAlign: card.cardTextAlignment } }>
                <RichText
                        tagName="h3"
                        formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                        placeholder={ __( 'Add card title' ) }
                        value={ cardTitle }
                        // onClick={(event) => { event.preventDefault(); setStateToTrue();} }  
                        // onChange={ () => { title => setAttributes( { title } ); setStateToFalse();} }  
                        onChange={ () => { (value) => setAttributes( { cardTitle: value } )} }  
                        // onChange={ (value, cardInd) => setAttributes( { titles[cardInd]: value } ) }                          
                    />
                <RichText
                    tagName="p"
                    formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                    placeholder={ __( 'Add your custom message' ) }
                    value={ cardMessage }
                    // onClick={(event) => { event.preventDefault(); setStateToTrue();} }  
                    // onChange={ () => { message => setAttributes( { message } ); setStateToFalse();} }  
                    onChange={ () => { (value) => setAttributes( { cardMessage: value } ) } }  
                    // onChange={ message => setAttributes( { message } ) }                 		
                />
            </div>
            {/* { isSelected &&  this.state.isEditing ?
                <p>Selected and Editing</p>
                : 
                <p>Current State: { String(this.state.isEditing.value) }</p>
            } */}
            </Fragment>
        );
    }
}