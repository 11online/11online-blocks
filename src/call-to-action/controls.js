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

        return (
            <BlockControls>
                <AlignmentToolbar
                    value={ textAlignment }
                    onChange={ textAlignment => setAttributes( { textAlignment } ) }
                />
                <Toolbar>
                    { (bgrOption === 'bgrImage') && imgID &&
                        <Tooltip text={ __( 'Click to Remove Image' ) }>
                        <Button
                            className={ "components-button button button-large" }
                            onClick={ onRemoveImage }
                        >
                            {/* { icons.remove } */}
                            { __( 'Remove Image' ) }
                        </Button>
                    </Tooltip>
                    }
                    { (bgrOption === 'bgrImage') && !imgID &&
                        <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ onSelectImage }
                            type="image"
                            value={ imgID }
                            render={ ( { open } ) => (
                                <Tooltip text={ __( 'Click to Upload Image' ) }>
                                    <Button
                                        className={ "components-button button button-large" }
                                        onClick={ open }
                                    >
                                        {/* { icons.upload } */}
                                        { __( 'Upload Image' ) }
                                    </Button>
                                </Tooltip>
                            ) }
                        >
                        </MediaUpload>
                    </MediaUploadCheck>
                    }
                </Toolbar>
            </BlockControls>
        );
    }
}