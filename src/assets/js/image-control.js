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

        const wrapperStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center' };
        const btnStyle = { border: 'none', outline: 'none', background: 'none', boxShadow: 'none' };

        return (
            <Toolbar>
                <div style={ wrapperStyle }>
                { imgID &&
                    <Tooltip text={ __( 'Click to Remove Image' ) }>
                    <Button
                        className={ "button" }
                        onClick={ onRemoveImage }
                        style={ btnStyle }
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
                                        className={ "button" }
                                        onClick={ open }
                                        style={ btnStyle }
                                    >
                                        { __( 'Upload Image' ) }
                                    </Button>
                                </Tooltip>
                            ) }
                        >
                        </MediaUpload>
                    </MediaUploadCheck>
                }
                </div>
            </Toolbar>
        );
    }
}