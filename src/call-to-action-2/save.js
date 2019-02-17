/**
 * Block dependencies
 */
import './style.scss';

import classnames from 'classnames';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element; 
const { RichText } = wp.editor;

 /**
 * Create a Save Component
 */
export default class Save extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { 
            attributes: {
                headline,
                headingSize,
                message, 
                textAlignment,
                buttons,
                buttonStyleClass,
                imgID,
                imgURL, 
                imgOpacity,
                colorFontControl,
                colorBackgroundControl,
            }, 
            className,
        } = this.props;

        const classes1 = classnames(
            className,
            'call-to-action'
        );
        
        const classes2 = classnames(
            buttonStyleClass,
            'button'
        );

        const renderFinalButtons = () => {
            const finalButtons = [];
            for (let i = 0; i < buttons.length; i++) {
                finalButtons.push(
                    <div className={`custom-button-${i+1}`}>
                        <a
                            className={classes2}
                            href={buttons[i].buttonURL}
                            {...buttons[i].newTab ? { target: '_blank' } : null}
                        >
                            {buttons[i].buttonText}
                        </a>
                    </div>
                );  
            }

            return finalButtons;
        };
        
        return (  
            <div className={ classes1 } style={ {backgroundColor: colorBackgroundControl} }>
                <div className="wrap" style={ { textAlign: textAlignment, color: colorFontControl } }>
                    <RichText.Content 
                        tagName={headingSize}
                        value={ headline }
                        style={ { color: colorFontControl } }
                    />
                    <RichText.Content 
                        tagName="p" 
                        value={ message }
                        style={ { color: colorFontControl, marginBottom: '15px' } }
                    /> 
                    <div className="btn-wrapper">
                        {renderFinalButtons()}
                    </div>
                </div>            
                { imgID &&
                    <div 
                        className="img-background"
                        style={ { backgroundImage: `url(${ imgURL })`, opacity: imgOpacity*0.1 } }
                    ></div>
                }
            </div>                     
        );
    }
}