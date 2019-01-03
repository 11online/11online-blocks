/**
 * Card Component dependencies
 */
import './editor.scss';

import classnames from 'classnames';
import Controls from "./controls";

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
                cardImgID, 
                cardImgURL, 
                cardImgAlt,
                cardBtnPresent,
                cardBtnURL,
                cardBtnText, 
                newTab,  
            },
            className,
            setAttributes,
        } = this.props;

        const classes = classnames(
            className,
            'mycard-eleven-online'
        );

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

        return (
            this.props.editable ?
                <div className={ classnames }>
                    <Fragment>
                        <Controls {...{ setAttributes, ...this.props }} />
                        { cardImgID && 
                            <div className="img-mycard-eleven-online">
                                <img
                                    src={ cardImgURL }
                                    alt={ cardImgAlt }
                                />
                            </div>
                        }
                        <div style={ { textAlign: cardTextAlignment, padding: '10px' } }>
                            <RichText
                                tagName="h2"
                                placeholder={ __( 'Add your card title' ) }
                                value={ cardTitle }
                                // style={ { textAlign: textAlignment, color: colorFontControl } }
                                onChange={ cardTitle  => setAttributes( { cardTitle  } ) }         
                            />
                            <RichText
                                tagName="p"
                                placeholder={ __( 'Add your card text' ) }
                                value={ cardText }
                                // style={ { textAlign: textAlignment, color: colorFontControl } }
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
                    <div className={ classes }>
                        { cardImgID && 
                            <div className="img-mycard-eleven-online">
                                <img
                                    src={ cardImgURL }
                                    alt={ cardImgAlt }
                                />
                            </div>
                        }
                        <div style={ { textAlign: cardTextAlignment, padding: '10px' } }>
                            <h2>{ cardTitle }</h2>
                            <p>{ cardText }</p>
                            { cardBtnPresent && 
                                <div className="btn-mycard-eleven-online">
                                    { renderButton() }
                                </div>                      
                            }
                        </div>   
                    </div>
                </Fragment>
        );
    }
}