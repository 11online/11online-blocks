/**
 * Postcard Component dependencies
 */
import './style.scss';
import Inspector from "./inspector";

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
export default class Accordion extends Component {

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
                useBackgroundColor,
                colorBackgroundControl,
                btnID,
            },
                setAttributes,
                inEditor,
                isSelected,
        } = this.props;

        const bgrColor = ( useBackgroundColor ? colorBackgroundControl : 'transparent' );

        const renderAccordion = ( isInEditor ) => {
            return (
                <div 
                    className="accordion-eleven-online" 
                    style={ {backgroundColor: bgrColor} }
                >
                    {isInEditor ? 
                        <div className="accordion-title">
                            <RichText
                                tagName={titleHeadingSize}
                                formattingControls={['bold', 'italic', 'strikethrough']}
                                placeholder={__('Add your title')}
                                value={title}
                                style={{ textAlign: titleAlignment, color: colorFontControl }}
                                onChange={title => setAttributes({ title })}
                            />
                        </div>
                        :
                        <div
                            className="accordion-title"
                            style={{ borderBottom: `1px solid ${colorFontControl}` }}
                        >
                            <RichText.Content
                                tagName={titleHeadingSize}
                                value={title}
                                style={{ textAlign: titleAlignment, color: colorFontControl }}
                            />
                            <div className="wrapper-toggle-accordion-eleven-online">
                                <button
                                    id={btnID}
                                    className="toggle-accordion-eleven-online"
                                    style={{ color: colorFontControl }}
                                >
                                    &#x2295;
                            </button>
                            </div>
                        </div>
                    }
                    <div class="accordion-content-eleven-online">
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
                            </BlockControls>
                            <Inspector {...{ setAttributes, ...this.props }} />
                        </Fragment>
                    }
                    {renderAccordion(true) }
                </Fragment>
            :
            <Fragment>  
                    {renderAccordion(false) }
            </Fragment>
        );
    }
}