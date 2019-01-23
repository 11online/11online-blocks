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
                currentCard,
                isEditing,
                cards,     
             },
            setAttributes
          } = this.props;

          const createDefaultCard = () => (
            {
                cardTitle: '',
                cardText: '',
                cardTextAlignment: 'center',
                cardHeadingSize: 'h2',
                imgID: null,
                imgURL: null,
                cardBtnPresent: false,
                buttonURL: 'http://',
                buttonText: 'Click here',
                buttonStyleClass: 'primary',
                newTab: true,
                useColor: false,
                colorFontControl: '#000000',
                colorBackgroundControl: 'transparent',
            }
        );

        const onAddCard = () => {
            const newCards = [ ...cards];
            newCards.push(createDefaultCard());
            setAttributes( { cards: newCards } );
        };

        const onSelectImage = img => {
            const newCards = [ ...cards];
            newCards[currentCard].imgID = img.id;
            newCards[currentCard].imgURL = img.url;
            setAttributes( { cards: newCards } );
        };

        const onRemoveImage = () => {
            const newCards = [ ...cards];
            newCards[currentCard].imgID = null;
            newCards[currentCard].imgURL = null;
            setAttributes( { cards: newCards } );
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
                    onClick={ () => {
                        const newCards = [ ...cards];
                        newCards[currentCard].cardBtnPresent = true;
                        setAttributes( { cards: newCards } );
                    } }
                >
                    { __( 'Add Button' ) }
                </Button>
            </Tooltip>
        );

        const renderRemoveActionBtn = () => (
            <Tooltip text={ __( 'Remove Action Button' ) }>
                <Button
                    className={ "components-button button button-large" }
                    onClick={ () => {
                        const newCards = [ ...cards];
                        newCards[currentCard].cardBtnPresent = false;
                        setAttributes( { cards: newCards } );
                    } }
                >
                    { __( 'Remove Button' ) }
                </Button>
            </Tooltip>
        );

        return (
           isEditing ? 
            <BlockControls>
                <AlignmentToolbar
                    value={ cards[currentCard].cardTextAlignment }
                    onChange={ cardTextAlignment => {
                        const newCards = [ ...cards];
                        newCards[currentCard].cardTextAlignment = cardTextAlignment;
                        setAttributes( { cards: newCards } );
                    } }
                />
                <Toolbar>
                    { !cards[currentCard].imgID &&
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ onSelectImage }
                                type="image"
                                value={ cards[currentCard].imgID }
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
                    { cards[currentCard].imgID &&
                        <Tooltip text={ __( 'Click to Remove Image' ) }>
                            <Button
                                className={ "components-button button button-large" }
                                onClick={ onRemoveImage }
                            >
                                { __( 'Remove Image' ) }
                            </Button>
                        </Tooltip>
                    } 
                    { cards[currentCard].cardBtnPresent ? renderRemoveActionBtn() : renderAddActionBtn() }
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