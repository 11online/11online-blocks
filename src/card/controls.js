/**
 * Control Component dependencies
 */
import icons from './icons';
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
    Dropdown,
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
                card: {
                    cardImgID,
                    cardImgURL,
                    cardImgAlt,
                },
                columnClass,
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
                    onClick={ open }
                >
                    { __( 'Add Card' ) }
                </Button>
            </Tooltip>
        );

        const renderRemoveCardBtn = () => (
            <Tooltip text={ __( 'Remove the Selected Card' ) }>
                <Button
                    className={ "components-button button button-large" }
                    onClick={ open }
                >
                    { __( 'Remove Card' ) }
                </Button>
            </Tooltip>
        );

        return (
            <BlockControls>
                <AlignmentToolbar
                    value={ textAlignment }
                    onChange={ textAlignment => setAttributes( { textAlignment } ) }
                />
                <Toolbar>
                    { myDropdownMenu() }
                    { renderAddCardBtn() }  
                    { cardSelected && renderRemoveCardBtn() }                
                </Toolbar>
            </BlockControls>
        );
    }
}