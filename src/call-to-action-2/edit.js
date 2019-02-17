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
                colorFontControl,
                colorBackgroundControl,
            },
            className,
            setAttributes,
        } = this.props;

        const classes = classnames(className, 'call-to-action');
        const btnClasses = classnames(buttonStyleClass, 'button');

        const renderButtonControl = (ind) => {
            // console.log(`button ${ind+1} was clicked`);
            <div className='button-box'>
                <TextControl
                    label={__('Button Text')}
                    value={buttons[ind].buttonText}
                    onChange={(buttonText) => {
                        const newButtons = [...buttons];
                        newButtons[ind].buttonText = buttonText;
                        setAttributes({ buttons: newButtons });
                    }}
                />
                <TextControl
                    label={__('Link URL')}
                    value={buttons[ind].buttonURL}
                    onChange={(buttonURL) => {
                        const newButtons = [...buttons];
                        newButtons[ind].buttonURL = buttonURL;
                        setAttributes({ buttons: newButtons });
                    }}
                />
                <ToggleControl
                    label={__("Open Link in New Tab?")}
                    help={__(buttons[ind].newTab ? 'Open Link in a New Tab' : 'Open Link in the Same Window')}
                    checked={buttons[ind].newTab}
                    onChange={() => {
                        const newButtons = [...buttons];
                        newButtons[ind].newTab = !newButtons[ind].newTab;
                        setAttributes({ buttons: newButtons });
                    }}
                />
            </div>
        };

        const renderButtons = () => {
            const editorButtons = [];
            for (let i = 0; i < buttons.length; i++) {
                editorButtons.push(
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
                                                    {buttons[i].buttonText}
                                                </a>
                                            </div>
                                        )}
                                        renderContent={(i) => renderButtonControl(i)}
                                        // renderContent={renderButtonControl(i)}
                                    />
                                </div>
                            </Tooltip>
                        </Fragment>
                    </div>
                );
            }
            return editorButtons;
        }

        return (
            <div className={classes} style={{ backgroundColor: colorBackgroundControl }}>
                <div className="wrap">
                    <Fragment>
                        <Inspector {...{ setAttributes, ...this.props }} />
                        <Controls {...{ setAttributes, ...this.props }} />
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
                        <div className="btn-wrapper">
                            {renderButtons()}
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