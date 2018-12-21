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
        this.state = {
            isEditing: false
        }
    }
    render() {
        const {
            attributes: { 
                styleClass,
                cardTextAlignment,
                cardID,
                cardTitle, 
                cardMessage, 
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

        const classes = classnames(
            className,
            styleClass,
            'mycard-eleven-online'
        );
  
        return (
            <Fragment>    
                <div className={ classes }>
                    { cardImgID && 
                        <div className="wrapper-eleven-online">
                            <div className="img-mycard-eleven-online">
                                <img
                                    src={ cardImgURL }
                                    alt={ cardImgAlt }
                                />
                            </div>
                        </div>
                    }
                    <div style={ { textAlign: cardTextAlignment, padding: '10px' } }>
                        <RichText
                                tagName="h3"
                                formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                                placeholder={ __( 'Add Card Title' ) }
                                value={ cardTitle }
                                onChange={ cardTitle => setAttributes( { cardTitle } ) } 
                            />
                        <RichText
                            tagName="p"
                            formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                            placeholder={ __( 'Add card text message' ) }
                            value={ cardMessage }
                            onChange={ cardMessage => setAttributes( { cardMessage } ) } 
                        />
                        { cardBtnPresent && 
                        // <Fragment>
                            <Tooltip text={ __( 'Click to add or edit Button Text and Link URL' ) }>
                                {renderButton()}
                            </Tooltip>
                        // </Fragment>
                        }
                    </div>              
                </div>
            </Fragment>
        );
    }
}