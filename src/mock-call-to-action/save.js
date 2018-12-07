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
        const classes = classnames(
            className,
            styleClass,
            'call-to-action'
        );
        const divStyle = (
            bgrOption === 'bgrColor' ?
            { textAlign: textAlignment, backgroundColor: colorBackgroundControl }
            :
            { textAlign: textAlignment }
        );
        return (  
            <div className={ classes } style={ divStyle }>
                <div className="wrap">
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
                            className="button" 
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