/**
 * Postcard Component dependencies
 */
import './style.scss';
import Inspector from "./inspector";
import ImageControl from "../assets/js/image-control";

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

    componentDidMount() {
        !this.props.attributes.btnID && 
            this.props.setAttributes({ btnID: Math.random().toString(36).substr(2, 11) });
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
                btnID,
            },
                setAttributes,
                inEditor,
                isSelected,
        } = this.props;

        const bgrColor = ( useBackgroundColor ? colorBackgroundControl : 'transparent' );
        const imgHeight = ( inEditor ? (imgID ? '400px' : '0') : '150px');
        const imgMrg = ( inEditor ? '' : '-10px');

        const renderPostcard = ( isInEditor ) => {
            return (
                <div 
                    className="postcard-eleven-online" 
                    style={ {backgroundColor: bgrColor} }
                >
                    { isInEditor ? 
                        <RichText
                            tagName={ titleHeadingSize }
                            formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                            placeholder={ __( 'Add your title' ) }
                            value={ title }
                            style={ { textAlign: titleAlignment, color: colorFontControl, paddingTop: '15px' } }
                            onChange={ title  => setAttributes( { title } ) }         
                        />
                        :
                        <RichText.Content 
                            tagName={ titleHeadingSize }
                            value={ title }
                            style={ { textAlign: titleAlignment, color: colorFontControl, marginBottom: '-15px', paddingTop: '15px' } }
                        />
                    }
                    { !isInEditor &&
                        <div className="wrapper-toggle-postcard-eleven-online">
                            <button 
                                id={ btnID }
                                className="toggle-postcard-eleven-online" 
                                style={ { color: colorFontControl } }
                            >
                                &#x2295;
                            </button>
                        </div>
                    }
                    <div className="img-background-wrapper-postcard-eleven-online" style={ { height: imgHeight, marginTop: imgMrg } }>
                        { imgID &&
                            <div 
                                className="img-background-postcard-eleven-online"
                                style={ { backgroundImage: `url(${imgURL})` } }
                            ></div>
                        }
                    </div>
                    <div class="content-eleven-online">
                        { isInEditor ? 
                            <RichText
                                tagName="p"
                                formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                                placeholder={ __( 'Add your paragraph content' ) }
                                value={ text }
                                style={ { color: colorFontControl, margin: '0 0 5px' } }
                                onChange={ text => setAttributes( { text } ) }                 		
                            />
                        :
                            <RichText.Content 
                                tagName="p" 
                                value={ text }
                                style={ { color: colorFontControl, margin: '0 0 5px' } }
                            />   
                        }
                    </div> 
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
                                <ImageControl
                                    attributes={ {imgID, imgURL} }
                                    setAttributes={ (newAttributes) => {
                                        setAttributes({ imgID: newAttributes.imgID, imgURL: newAttributes.imgURL }) } }
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