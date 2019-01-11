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
                isEditing,
                currentID,
                cardID,
                cardTitle,
                cardText,
                cardTextAlignment,
                cardHeadingSize,
                cardImgID, 
                cardImgURL, 
                cardBtnPresent,
                useColor,
                colorFontControl,
                colorBackgroundControl,   
            },
            className,
            editable,
            isSelected,
            setAttributes,
        } = this.props;

        const bgrColor = ( useColor ? colorBackgroundControl : 'transparent' );
        const classes = classnames( className, 'card-eleven-online' );

        const renderEditCardBtn = () => (
            <Tooltip text={ __( 'Edit Card' )  }>
                <Button 
                    className={ "button" }
                    onClick={ () => setAttributes( { isEditing: true } ) }
                >
                    { icons.edit }
                </Button>
            </Tooltip>
        );

        const renderApplyCardBtn = () => (
            <Tooltip text={ __( 'Apply Changes' )  }>
                <Button
                    className={ "button" }
                    onClick={ () => setAttributes( { isEditing: false } ) }
                >
                    { icons.check }
                </Button>
            </Tooltip>
        );

        const renderDeleteCardBtn = () => (
            <Tooltip text={ __( 'Delete Card' )  }>
                <Button
                    // className="components-icon-button"
                    className={ "button" }
                    onClick={ () => setAttributes( { cardID: 'deleted' } ) }
                >
                    { icons.delete }
                </Button>
            </Tooltip>
        );

        return (
            editable ?
                <div className={ classes } style={ {backgroundColor: bgrColor} }>
                    <Fragment>
                        { isSelected ?
                            <Fragment>
                                <Controls {...{ setAttributes, ...this.props }} />
                                <Inspector {...{ setAttributes, ...this.props }} />
                            </Fragment>
                            : ''
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
                            { cardImgID &&
                                <div 
                                    className="mycard-eleven-online-img"
                                    style={ { backgroundImage: 'url(' + cardImgURL + ')' } }
                                ></div>
                            }
                            <div className="wrapper-eleven-online" style={ {textAlign: cardTextAlignment} }>
                                <RichText
                                    tagName={ cardHeadingSize }
                                    formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                                    placeholder={ __( 'Add your card title' ) }
                                    value={ cardTitle }
                                    style={ { color: colorFontControl } }
                                    onChange={ cardTitle  => setAttributes( { cardTitle  } ) }         
                                />
                                <RichText
                                    tagName="p"
                                    formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                                    placeholder={ __( 'Add your card text' ) }
                                    value={ cardText }
                                    style={ { color: colorFontControl } }
                                    onChange={ cardText  => setAttributes( { cardText  } ) }                   		
                                />
                                { cardBtnPresent && 
                                    <div className="btn-mycard-eleven-online">
                                        <Tooltip text={ __( 'Click to add or edit Button Text and Link URL' ) }>
                                            <InnerButton 
                                                editable={ true } 
                                                attributes={ this.props.attributes } 
                                                setAttributes={ setAttributes } 
                                            />

                                        </Tooltip> 
                                    </div>                      
                                }
                            </div>
                        </div>  
                    </Fragment>
                </div>
           :
                <Fragment>
                     <div className={ classes } style={ {backgroundColor: bgrColor} }>
                        { cardImgID &&
                                <div 
                                    className="mycard-eleven-online-img"
                                    style={ { backgroundImage: 'url(' + cardImgURL + ')' } }
                                ></div>
                        }
                        <div className="wrapper-eleven-online" style={ {textAlign: cardTextAlignment} }>
                            <RichText.Content 
                                tagName={ cardHeadingSize } 
                                value={ cardTitle }
                                style={ { color: colorFontControl } }
                            />
                            <RichText.Content 
                                tagName="p" 
                                value={ cardText }
                                style={ { color: colorFontControl } }
                            /> 
                            { cardBtnPresent &&
                                <div className="btn-mycard-eleven-online">
                                    { <InnerButton 
                                        editable={ false } 
                                        attributes={ this.props.attributes } 
                                    /> }
                                </div>
                            }
                        </div>   
                    </div>
                </Fragment>
        );
    }
}