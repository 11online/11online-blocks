/**
 * Postcard Component dependencies
 */
//import './editor.scss';
import './style.scss';

// import classnames from 'classnames';
import Inspector from "./inspector";
import BackgroungImag from "../assets/js/background-image";

/**
 * Used Libraries
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
    AlignmentToolbar,
    BlockControls,
    RichText,
} = wp.editor;
const {} = wp.components;
/**
 * Create a Cards Component
 */
export default class Postcard extends Component {

    constructor(props) {
        super( ...arguments );
        this.props = props;
    }

    render() {
        const {
            attributes: { 
                title,
                titleHeadingSize,
                titleAlignment,
                colorFontControl,
                text,
                imgID,
                imgURL,
                useBackgroundColor,
                colorBackgroundControl,
            },
                setAttributes,
                inEditor,
                isSelected,
        } = this.props;

        const setBackgroundImgHelper = (newAttributes) => {
            setAttributes({ imgID: newAttributes.imgID, imgURL: newAttributes.imgURL });
        }
        const bgrColor = ( useBackgroundColor ? colorBackgroundControl : 'transparent' );

        const renderPostcard = ( isInEditor ) => {
            return (
                <div style={ {backgroundColor: bgrColor} }>
                    { isInEditor ? 
                        <RichText
                            tagName={ titleHeadingSize }
                            formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                            placeholder={ __( 'Add your title' ) }
                            value={ title }
                            style={ { textAlign: titleAlignment, color: colorFontControl } }
                            onChange={ title  => setAttributes( { title } ) }         
                        />
                        :
                        <RichText.Content 
                            tagName={ titleHeadingSize }
                            value={ title }
                            style={ { textAlign: titleAlignment, color: colorFontControl } }
                        />
                    }
                    <div className="img-background-wrapper-postcard-eleven-online">
                        { imgID &&
                            <div 
                                className="img-background-postcard-eleven-online"
                                style={ { backgroundImage: `url(${imgURL})` } }
                            ></div>
                        }
                    </div>
                    { isInEditor ? 
                        <RichText
                            tagName="p"
                            placeholder={ __( 'Add your paragraph content' ) }
                            value={ text }
                            style={ { textAlign: 'justify'} }
                            onChange={ text => setAttributes( { text } ) }                 		
                        />
                        :
                        <RichText.Content 
                            tagName="p" 
                            value={ text }
                            style={ { textAlign: 'justify'} }
                        /> 
                    }
                </div>
            );
        }

        return (
            inEditor ? 
                <Fragment>
                    { isSelected &&
                        <Fragment> 
                            <BlockControls>
                                <AlignmentToolbar
                                    value={ titleAlignment }
                                    onChange={ titleAlignment => setAttributes( { titleAlignment } ) }
                                />
                                <BackgroungImag
                                    attributes={ {imgID, imgURL, ...this.attributes} }
                                    setAttributes={ setBackgroundImgHelper }
                                />
                            </BlockControls>
                            <Inspector {...{ setAttributes, ...this.props }} />
                        </Fragment>
                    }
                    { renderPostcard(true) }
                </Fragment>
            : 
                <Fragment>
                     { renderPostcard(false) }
                </Fragment>
        );
    }
}