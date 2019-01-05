/**
 * Card Component dependencies
 */
import './editor.scss';

import classnames from 'classnames';
import Controls from "./controls";
import Inspector from "./inspector";

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
                cardImgAlt,
                cardBtnPresent,
                cardBtnURL,
                cardBtnText, 
                newTab,
                useColor,
                colorFontControl,
                colorBackgroundControl,
                styleClass,
            },
            className,
            setAttributes,
        } = this.props;

        const ButtonControls = (
            <div className='button-box'>
                <TextControl
                    label={ __( 'Button Text' ) }
                    value={ cardBtnText }
                    onChange={ cardBtnText => setAttributes( { cardBtnText } ) }
                />
                <TextControl
                    label={ __( 'Link URL' ) }
                    value={ cardBtnURL }
                    onChange={ cardBtnURL => setAttributes( { cardBtnURL } ) }
                />
                <ToggleControl
                    label={ __("Open Link in New Tab?") }
                    help={ __( newTab ? 'Open Link in a New Tab' : 'Open Link in the Same Window' ) }
                    checked={ newTab }
                    onChange={ () => setAttributes( { newTab: ! newTab } ) }
                />
            </div>
		);

        const renderButton = () => (
            <div style={ { width: '100%' } }>
                <Dropdown
                    //position="bottom left"
                    renderToggle={ ( { isOpen, onToggle } ) => (
                        <div style={ { textAlign: cardTextAlignment } }>
                            <a 
                                className="button" 
                                href="#0"
                                onClick={ onToggle } 
                                aria-expanded={ isOpen }
                            >
                                { cardBtnText }
                            </a>
                        </div>       
                    ) }
                    renderContent={ () => ButtonControls }
                />
            </div>
        );

        const bgrColor = ( useColor ? colorBackgroundControl : 'transparent' );

        const outerClass = (cardImgID ? 'mycard-eleven-online-img' : 'mycard-eleven-online');
        const wrapperClass = (cardImgID ? 'wrapper-eleven-online-img' : 'wrapper-eleven-online');
        const styles1 = (cardImgID ? { backgroundImage: 'url(' + cardImgURL + ')' } 
        : {backgroundColor: bgrColor});
        const styles2 = (cardImgID ? {backgroundColor: bgrColor, textAlign: cardTextAlignment} : { textAlign: cardTextAlignment });

        const classes1 = classnames(
            className,
            outerClass
        );

        const classes2 = classnames(
            styleClass,
            'button'
        );

        return (
            this.props.editable ?
                <div className={ classes1 } style={ styles1 }>
                    <Fragment>
                        <Controls {...{ setAttributes, ...this.props }} />
                        <Inspector {...{ setAttributes, ...this.props }} />
                        <div className={ wrapperClass } style={ styles2 }>
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
                                        { renderButton() }
                                    </Tooltip> 
                                </div>                      
                            }
                        </div>
                        
                    </Fragment>
                </div>
           :
                <Fragment>
                    <div className={ classes1 } style={ styles1 }>
                        <div className={ wrapperClass } style={ styles2 }>
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
                                    <a 
                                        className={ classes2 } 
                                        href={ cardBtnURL }
                                        { ...newTab ? {target: '_blank'} : null }
                                    >
                                        { cardBtnText }
                                    </a>
                                </div>
                            }
                        </div>   
                    </div>
                </Fragment>
        );
    }
}