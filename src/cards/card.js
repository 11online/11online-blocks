/**
 * Card Component dependencies
 */
import './editor.scss';
import './style.scss';

import classnames from 'classnames';
import Controls from "./controls";
import Inspector from "./inspector";
import InnerButton from "../assets/js/inner-button";
import icons from './icons';

/**
 * Used Libraries
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText } = wp.editor;
const {
    Tooltip,
    Button,
} = wp.components;

/**
 * Create a Card Component
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
                currentCard,
                isEditing,
                cards,                    
            },
            className,
            index,
            editable,
            isSelected,
            setAttributes,          
        } = this.props;    

        const bgrColor = ( cards[index].useColor ? cards[index].colorBackgroundControl : '#FFFFFF' );
        const classes = classnames( className, 'card-eleven-online' );

        const renderEditCardBtn = () => (
            <Tooltip text={ __( 'Edit Card' )  }>
                <Button 
                    className={ "button" }
                    disabled={ isEditing && currentCard !== index }
                    onClick={ () => setAttributes( { isEditing: true, currentCard: index} ) }
                >
                    { icons.edit }
                </Button>
            </Tooltip>
        );

        const renderApplyCardBtn = () => (
            <Tooltip text={ __( 'Apply Changes' )  }>
                <Button
                    className={ "button" }
                    onClick={ () => setAttributes( { isEditing: false, currentCard: -1 } ) }
                >
                    { icons.check }
                </Button>
            </Tooltip>
        );

        const renderDeleteCardBtn = () => (
            <Tooltip text={ __( 'Delete Card' )  }>
                <Button
                    className={ "button" }
                    onClick={ () => { 
						const newCards = [ ...cards ];
						newCards.splice(index, 1);
						setAttributes( { cards: newCards } );
					} }
                >
                    { icons.delete }
                </Button>
            </Tooltip>
        );

        const setBtnAttributeHelper = (newAttributes) => {
            const newCards = [...cards];
            for(let key in newAttributes) {
                newCards[index][key] = newAttributes[key];
            }
            setAttributes({cards: newCards});
        }

        const renderForEditing = () => (
            <Fragment>
                <RichText
                    tagName={ cards[index].cardHeadingSize }
                    formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                    placeholder={ __( 'Add your card title' ) }
                    value={ cards[index].cardTitle }
                    style={ { color: cards[index].colorFontControl } }
                    onChange={ (cardTitle)  => {
                        const newCards = [ ...cards ];
						cards[index].cardTitle = cardTitle;
						setAttributes( { cards: newCards } );
                    } }         
                />
                <RichText
                    tagName="p"
                    formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                    placeholder={ __( 'Add your card text' ) }
                    value={ cards[index].cardText }
                    style={ { color: cards[index].colorFontControl } }
                    onChange={ (cardText)  => {
                        const newCards = [ ...cards ];
						cards[index].cardText = cardText;
						setAttributes( { cards: newCards } );
                    } }                            		
                />
                { cards[index].cardBtnPresent && 
                    <div className="btn-mycard-eleven-online">
                        <Tooltip text={ __( 'Click to add or edit Button Text and Link URL' ) }>
                            <InnerButton
                                editable={ true } 
                                attributes={ {...cards[index], ...this.attributes} }
                                setAttributes={ setBtnAttributeHelper }
                            />
                        </Tooltip> 
                    </div>                      
                }
            </Fragment>
        );

        const renderForDone = () => (
            <Fragment>
                <RichText.Content 
                    tagName={ cards[index].cardHeadingSize }
                    value={ cards[index].cardTitle }
                    style={ { color: cards[index].colorFontControl } }
                />
                <RichText.Content 
                    tagName="p" 
                    value={ cards[index].cardText }
                    style={ { color: cards[index].colorFontControl } }
                /> 
                { cards[index].cardBtnPresent &&
                    <div className="btn-mycard-eleven-online">
                        {  <InnerButton
                                editable={ false }  
                                attributes={ {...cards[index], ...this.attributes} }
                                setAttributes={ setBtnAttributeHelper }   
                            /> 
                        }
                    </div>
                }
            </Fragment>
        );

        return (
            editable ?
                <div className={ classes } style={ {backgroundColor: bgrColor} }>
                    <Fragment>
                        { isSelected &&
                            <Fragment> 
                                <Controls {...{ setAttributes, ...this.props }} />
                                { isEditing && <Inspector {...{ setAttributes, ...this.props }} /> }
                            </Fragment>
                        }
                        <div className="card-wrapper-eleven-online">
                            <div className="buttons-wrapper-eleven-online">
                                { isEditing ?
                                    renderApplyCardBtn() 
                                    : 
                                    renderEditCardBtn()  
                                }
                                { renderDeleteCardBtn() }    
                            </div>
                            { cards[index].cardImgID &&
                                <div 
                                    className="mycard-eleven-online-img"
                                    style={ { backgroundImage: 'url(' + cards[index].cardImgURL + ')' } }
                                ></div>
                            }
                            <div className="wrapper-eleven-online" style={ {textAlign: cards[index].cardTextAlignment} }>
                                { isEditing ? renderForEditing() : renderForDone() }  
                            </div>
                        </div>  
                    </Fragment>
                </div>
           :
                <Fragment>
                     <div className={ classes } style={ {backgroundColor: bgrColor} }>
                        { cards[index].cardImgID &&
                                <div 
                                    className="mycard-eleven-online-img"
                                    style={ { backgroundImage: 'url(' + cards[index].cardImgURL + ')' } }
                                ></div>
                        }
                        <div className="wrapper-eleven-online" style={ {textAlign: cards[index].cardTextAlignment} }>
                            { renderForDone() }
                        </div>   
                    </div>
                </Fragment>
        );
    }
}