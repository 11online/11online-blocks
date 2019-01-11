/**
 * Control Component dependencies
 */
import icons from './icons';
import './editor.scss';
import './style.scss';

/**
 * Used Libraries
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
    DropdownMenu,
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
                cardCount,
                cardID,
                isEditing,
                cardTextAlignment,
                cardBtnPresent,
                cardImgID,
             },
            setAttributes
          } = this.props;

        const onAddCard = () => setAttributes( { cardCount: (cardCount + 1)} );

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

        const myDropdownMenu = () => (
            <DropdownMenu
                icon={ icons.columns }
                label="Select a Column Class"
                controls={ [
                    {
                        title: 'Column Class: one-half',
                        icon: icons.half,
                        onClick: () => {
                            setAttributes( { 
                                columnClass: 'one-half',
                              } );
                        }
                    },
                    {
                        title: 'Column Class: one-third',
                        icon: icons.third,
                        onClick: () => {
                            setAttributes( { 
                                columnClass: 'one-third',
                             } );
                        }
                    },
                    {
                        title: 'Column Class: one-fourth',
                        icon: icons.fourth,
                        onClick: () => {
                            setAttributes( { 
                                columnClass: 'one-fourth',
                             } );
                        }
                    },
                    {
                        title: 'Column Class: one-sixth',
                        icon: icons.sixth,
                        onClick: () => {
                            setAttributes( { 
                                columnClass: 'one-sixth',
                             } );
                        }
                    },
                ] }
            />
        );

        const renderAddCardBtn = () => (
            <Tooltip text={ __( 'Add a New Card' ) }>
                <Button
                    className={ "components-button button button-large" }
                    onClick={ onAddCard }
                >
                    { __( 'Add Card' ) }
                </Button>
            </Tooltip>
        );

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
           isEditing ? 
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
            :
            <BlockControls>
                <Toolbar>
                    { myDropdownMenu() }
                    { renderAddCardBtn() }
                </Toolbar>
            </BlockControls>
        );
    }
}