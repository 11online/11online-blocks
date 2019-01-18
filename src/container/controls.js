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
 * Create a Toolbar Controls wrapper Component
 */
export default class Controls extends Component {
    constructor(props) {
        super( ...arguments );
        this.props = props;
    }

    render() {
        const {
            attributes: { 
                bgrOption, 
                imgID,
                innerAlignment,
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
                    value={ innerAlignment }
                    onChange={ innerAlignment => setAttributes( { innerAlignment } ) }
                />
                <Toolbar>
                    { (bgrOption === 'bgrImage') && imgID &&
                        <Tooltip text={ __( 'Click to Remove Image' ) }>
                        <Button
                            className={ "components-button button button-large" }
                            onClick={ onRemoveImage }
                        >
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