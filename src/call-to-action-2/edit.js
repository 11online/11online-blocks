/**
 * Block dependencies
 */
import './style.scss';
import './editor.scss';

import classnames from 'classnames';
import Inspector from "./inspector";
import Controls from "./controls";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText } = wp.editor;
const {
    Tooltip,
    TextControl,
    Dropdown,
    ToggleControl,
} = wp.components;
const { Fragment } = wp.element;

/**
* Create an Edit Component
*/
export default class Edit extends Component {

    constructor() {
        super(...arguments);
    }

    render() {
        // Deconstructing needed properties and methods from props
        const {
            attributes: {
                headline,
                headingSize,
                message,
                buttons,
                buttonStyleClass,
                textAlignment,
                imgID,
                imgURL,
                imgOpacity,
                logoID,
                logoURL,
                logoWidth,
                logoHeight,
                padTop,
                padBottom,
                padLeft,
                colorFontControl,
                colorBackgroundControl,
            },
            className,
            setAttributes,
        } = this.props;

        const classes = classnames(className, 'call-to-action-2');
        const btnClasses = classnames(buttonStyleClass, 'button');

        const divStyle = {
            backgroundColor: colorBackgroundControl,
            paddingTop: `${String(padTop)}px`,
            paddingBottom: `${String(padBottom)}px`,
            paddingLeft: `${String(padLeft)}px`,
        };

        const logoDivStyle = {
            width: `${String(logoWidth)}px`,
            height: `${String(logoHeight)}px`
        };

        const renderButtons = () => {
            const actionButtons = [];
            buttons.forEach((button, i) => { 
                actionButtons.push(
                    <div className={`custom-button-${i + 1}`}>
                        <Fragment>
                            <Tooltip text={__('Click to add or edit Button Text and Link URL')}>
                                <div style={{ width: '100%' }}>
                                    <Dropdown
                                        renderToggle={({ isOpen, onToggle }) => (
                                            <div style={{ textAlign: textAlignment, color: colorFontControl }}>
                                                <a
                                                    className={btnClasses}
                                                    href="#0"
                                                    onClick={onToggle}
                                                    aria-expanded={isOpen}
                                                >
                                                    {button.buttonText}
                                                </a>
                                            </div>
                                        )}
                                        renderContent={() =>
                                            <div className='button-box'>
                                                <TextControl
                                                    label={__('Button Text')}
                                                    value={button.buttonText}
                                                    onChange={(buttonText) => {
                                                        const newButtons = [...buttons];
                                                        newButtons[i].buttonText = buttonText;
                                                        setAttributes({ buttons: newButtons });
                                                    }}
                                                />
                                                <TextControl
                                                    label={__('Link URL')}
                                                    value={button.buttonURL}
                                                    onChange={(buttonURL) => {
                                                        const newButtons = [...buttons];
                                                        newButtons[i].buttonURL = buttonURL;
                                                        setAttributes({ buttons: newButtons });
                                                    }}
                                                />
                                                <ToggleControl
                                                    label={__("Open Link in New Tab?")}
                                                    help={__(buttons[i].newTab ? 'Open Link in a New Tab' : 'Open Link in the Same Window')}
                                                    checked={button.newTab}
                                                    onChange={() => {
                                                        const newButtons = [...buttons];
                                                        newButtons[i].newTab = !newButtons[i].newTab;
                                                        setAttributes({ buttons: newButtons });
                                                    }}
                                                />
                                            </div>
                                        }
                                    />
                                </div>
                            </Tooltip>
                        </Fragment>
                    </div>
                );
            });
            return actionButtons;
        }

        return (
            <div className={classes} style={divStyle}>
                <div className="wrap">
                    <Fragment>
                        <Inspector {...{ setAttributes, ...this.props }} />
                        <Controls {...{ setAttributes, ...this.props }} />
                        {logoID && 
                            <div className="logo-wrapper" style={logoDivStyle}>
                                <img src={logoURL} alt="logo"/>
                            </div>
                        }
                        <RichText
                            tagName={headingSize}
                            formattingControls={['bold', 'italic', 'strikethrough']}
                            placeholder={__('Add title')}
                            value={headline}
                            style={{ textAlign: textAlignment, color: colorFontControl }}
                            onChange={headline => setAttributes({ headline })}
                        />
                        <RichText
                            tagName="p"
                            formattingControls={['bold', 'italic', 'strikethrough']}
                            placeholder={__('Add your custom message')}
                            value={message}
                            style={{ textAlign: textAlignment, color: colorFontControl }}
                            onChange={message => setAttributes({ message })}
                        />
                        <div className="btn-wrapper" style={{ textAlign: textAlignment }} >
                            {buttons.length > 0 && renderButtons()}
                        </div>
                    </Fragment>
                </div>
                {imgID &&
                    <div
                        className="img-background"
                        style={{ backgroundImage: `url(${imgURL})`, opacity: `${Number(imgOpacity) * 0.1}` }}
                    ></div>
                }
            </div>
        );
    }
}