/**
 * Controls component dependencies
 */
import ImageControl from "../assets/js/image-control";

/**
 * Internal Toolbar Controls Libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    AlignmentToolbar,
    BlockControls,
} = wp.editor;

/**
 * Create a Block Controls wrapper Component
 */
export default class Controls extends Component {

    constructor() {
        super( ...arguments );
    }
    render() {
        const {
            attributes: { 
                textAlignment,
                bgrOption, 
                imgID,
                imgURL,
             },
            setAttributes
          } = this.props;

        return (
            <BlockControls>
                <AlignmentToolbar
                    value={ textAlignment }
                    onChange={ textAlignment => setAttributes( { textAlignment } ) }
                />
                { (bgrOption === 'bgrImage') && 
                    <ImageControl
                        attributes={ {imgID, imgURL} }
                        setAttributes={ (newAttributes) => {
                            setAttributes({ imgID: newAttributes.imgID, imgURL: newAttributes.imgURL }) } }
                    />
                }                   
            </BlockControls>
        );
    }
}