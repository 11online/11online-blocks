/**
 * Control Component dependencies
 */
import './editor.scss';

import classnames from 'classnames';

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

    constructor(props) {
        super( ...arguments );
        this.props = props;
    }
    render() {
        const {
            attributes: { 
                cardTextAlignment,
                cardBtnPresent,
                cardImgID,
             },
            className,
            setAttributes
          } = this.props;

        const onSelectImage = img => {
            setAttributes( {
                cardImgID: img.id,
                cardImgURL: img.url,
                cardImgAlt: img.alt,
            } );
        };

        const onRemoveImage = () => {
            setAttributes({
                cardImgID: null,
                cardImgURL: null,
                cardImgAlt: null,
            });
        }

        const renderAddActionBtn = () => (
            <Tooltip text={ __( 'Add Action Button' ) }>
                <Button
                    className={ "components-button button button-large" }
                    onClick={ () => setAttributes( { cardBtnPresent: true } ) }
                >
                    { __( 'Add Button' ) }
                </Button>
            </Tooltip>
        );

        const renderRemoveActionBtn = () => (
            <Tooltip text={ __( 'Remove Action Button' ) }>
                <Button
                    className={ "components-button button button-large" }
                    onClick={ () => setAttributes( { cardBtnPresent: false} ) }
                >
                    { __( 'Remove Button' ) }
                </Button>
            </Tooltip>
        );

        return (
            <BlockControls>
                <AlignmentToolbar
                    value={ cardTextAlignment }
                    onChange={ cardTextAlignment => setAttributes( { cardTextAlignment } ) }
                />
                <Toolbar>
                    { !cardImgID &&
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ onSelectImage }
                                type="image"
                                value={ cardImgID }
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
                    { cardImgID &&
                        <Tooltip text={ __( 'Click to Remove Image' ) }>
                            <Button
                                className={ "components-button button button-large" }
                                onClick={ onRemoveImage }
                            >
                                { __( 'Remove Image' ) }
                            </Button>
                        </Tooltip>
                    } 
                    { cardBtnPresent ? renderRemoveActionBtn() : renderAddActionBtn() }
                </Toolbar>
            </BlockControls>
        );
    }
}