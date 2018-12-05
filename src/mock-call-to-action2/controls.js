/**
 * Toolbar Controls Dependencies
 */
import classnames from 'classnames';
//import attributes from "./attributes";
import icons from './icons';

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
                highContrast,
                imgID, 
                imgURL, 
                imgAlt,
             },
            className,
            setAttributes
          } = this.props;
        const classes = classnames(
            className,
            { 'high-contrast': highContrast },
        );
        const onSelectImage = img => {
            setAttributes( {
                imgID: img.id,
                imgURL: img.url,
                imgAlt: img.alt,
            } );
        };
        const onRemoveImage = () => {
            setAttributes({
                imgID: null,
                imgURL: null,
                imgAlt: null,
            } );
        };

        return (
            <BlockControls>
                <AlignmentToolbar
                    value={ textAlignment }
                    onChange={ textAlignment => setAttributes( { textAlignment } ) }
                />
                <Toolbar>
                    <Tooltip text={ __( 'High Contrast' ) }>
                        <Button
                            className={ classnames(
                                'components-icon-button',
                                'components-toolbar__control',
                                { 'is-active': highContrast },
                            ) }
                            onClick={ () => setAttributes( { highContrast: ! highContrast } ) }
                        >
                            { icons.contrast }
                        </Button>
                    </Tooltip>
                    {! imgID ? (
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ onSelectImage }
                                //onSelect={ ( media ) => console.log( 'selected ' + media.length ) }
                                type="image"
                                value={ imgID }
                                render={ ( { open } ) => (
                                    <Tooltip text={ __( 'Upload Image' ) }>
                                        <Button
                                            className={ "components-button button button-large" }
                                            onClick={ open }
                                        >
                                            { icons.upload }
                                            {/* { __( ' Upload Image' ) } */}
                                        </Button>
                                    </Tooltip>
                                ) }
                            >
                            </MediaUpload>
                        </MediaUploadCheck>
                    ) : (
                        <Tooltip text={ __( 'Remove Image' ) }>
                            <Button
                                className={ classnames(
                                    'components-icon-button',
                                    'components-toolbar__control',
                                    'remove-image',
                                ) }
                                onClick={ onRemoveImage }
                            >
                                { icons.remove }
                            </Button>
                        </Tooltip>
                    ) }  
                </Toolbar>
            </BlockControls>
        );
    }
}