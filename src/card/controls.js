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

    constructor() {
        super( ...arguments );
    }
    render() {
        const {
            attributes: { 
                textAlignment,
                columnClass,
             },
            className,
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

        const MyDropdownMenu = () => (
            <DropdownMenu
                icon={ icons.columns }
                label="Select a Column Class"
                controls={ [
                    {
                        title: 'Column Class: one-half',
                        icon: icons.half,
                        onClick: () => {
                            setAttributes( { columnClass: 'one-half' } );
                        }
                    },
                    {
                        title: 'Column Class: one-third',
                        icon: icons.third,
                        onClick: () => {
                            setAttributes( { columnClass: 'one-third' } );
                        }
                    },
                    {
                        title: 'Column Class: one-fourth',
                        icon: icons.fourth,
                        onClick: () => {
                            setAttributes( { columnClass: 'one-fourth' } );
                        }
                    },
                    {
                        title: 'Column Class: one-sixth',
                        icon: icons.sixth,
                        onClick: () => {
                            setAttributes( { columnClass: 'one-sixth' } );
                        }
                    },
                ] }
            />
        );

        return (
            <BlockControls>
                <AlignmentToolbar
                    value={ textAlignment }
                    onChange={ textAlignment => setAttributes( { textAlignment } ) }
                />
                <Toolbar>
                    { MyDropdownMenu() }
                    {/* { columnClass === 'one-third' && 
                        oneHalfMenu()
                    }, */}
                </Toolbar>
            </BlockControls>
        );
    }
}