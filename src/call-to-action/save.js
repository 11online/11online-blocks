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
                message, 
                text, 
                url, 
                textAlignment,
                bgrOption,
                imgID,
                imgURL, 
                imgOpacity,
                colorFontControl,
                colorBackgroundControl,
                styleClass,
                newTab,
            }, 
            className,
        } = this.props;
        const classes1 = classnames(
            className,
            styleClass,
            'call-to-action'
        );
        const classes2 = classnames(
            styleClass,
            'button'
        );
        const divStyle = (
            bgrOption === 'bgrColor' ?
            { backgroundColor: colorBackgroundControl }
            :
            ''
        );
        return (  
            <div className={ classes1 } style={ divStyle }>
                <div className="wrap" style={ { textAlign: textAlignment, color: colorFontControl } }>
                    <RichText.Content 
                        tagName="h3" 
                        value={ headline }
                        style={ { color: colorFontControl } }
                    />
                    <RichText.Content 
                        tagName="p" 
                        value={ message }
                        style={ { color: colorFontControl } }
                    /> 
                    <p>
                        <a 
                            className={ classes2 } 
                            href={ url }
                            { ...newTab ? {target: '_blank'} : null }
                        >
                            { text }
                        </a>
                    </p> 
                </div>            
                { imgID &&
                    <div 
                        className="img-background"
                        style={ { backgroundImage: 'url(' + imgURL + ')', opacity: imgOpacity*0.1 } }
                    ></div>
                }

            </div>                     
        );
    }
}