/**
 * Internal Toolbar Controls Libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    AlignmentToolbar,
    BlockControls,
    MediaUpload,
    MediaUploadCheck,
} = wp.editor;
const {
    Toolbar,
    Button,
    Tooltip,
} = wp.components;

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
             },
            setAttributes
          } = this.props;

        const onSelectImage = img => {
            setAttributes( {
                imgID: img.id,
                imgURL: img.url,
            } );
        };

        const onRemoveImage = () => {
            setAttributes({
                imgID: null,
                imgURL: null,
            } );
        };

        <BlockControls>
            <AlignmentToolbar
                value={ textAlignment }
                onChange={ textAlignment => setAttributes( { textAlignment } ) }
            />
            <Toolbar>

            </Toolbar>
        </BlockControls>
    }
}