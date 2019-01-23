/**
 * Used Libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    MediaUpload,
    MediaUploadCheck,
} = wp.editor;
const {
    Toolbar,
    Button,
    Tooltip,
} = wp.components;

/**
 * Create an ImageControl Component
 */
export default class ImageControl extends Component {

    constructor(props) {
        super( ...arguments );
        this.props = props;
    }

    render() {
        const {
            attributes: { 
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
            <Toolbar>
                { imgID &&
                    <Tooltip text={ __( 'Click to Remove Image' ) }>
                    <Button
                        className={ "components-button button button-large" }
                        onClick={ onRemoveImage }
                    >
                        { __( 'Remove Image' ) }
                    </Button>
                </Tooltip>
                }
                { !imgID &&
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
                                        { __( 'Upload Image' ) }
                                    </Button>
                                </Tooltip>
                            ) }
                        >
                        </MediaUpload>
                    </MediaUploadCheck>
                }
            </Toolbar>
        );
    }
}