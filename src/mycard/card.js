/**
 * Card Component dependencies
 */
import './editor.scss';

import classnames from 'classnames';
import Controls from "./controls";
import Inspector from "./inspector";
import InnerBtn from "../assets/js/innerbtn";

/**
 * Internal Libraries
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText } = wp.editor;
const {
    Tooltip,
    TextControl,
    Dropdown,
    ToggleControl,
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
            setAttributes,
            editable,
        } = this.props;

        const bgrColor = ( useColor ? colorBackgroundControl : 'transparent' );

        return (
            this.props.editable ?
                <div className={ className } style={ {backgroundColor: bgrColor} }>
                    <Fragment>
                        <Controls {...{ setAttributes, ...this.props }} />
                        <Inspector {...{ setAttributes, ...this.props }} />
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
                                        <InnerBtn editable={ true } {...{ setAttributes, ...this.props }} />
                                    </Tooltip> 
                                </div>                      
                            }
                        </div>
                        
                    </Fragment>
                </div>
           :
                <Fragment>
                     <div className={ className } style={ {backgroundColor: bgrColor} }>
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
                                    { <InnerBtn editable={ false } {...{ setAttributes, ...props }} /> }
                                </div>
                            }
                        </div>   
                    </div>
                </Fragment>
        );
    }
}