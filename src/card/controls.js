/**
 * Control Component dependencies
 */
import './editor.scss';
import './style.scss';
import ImageControl from "../assets/js/image-control";
import classnames from 'classnames';

/**
 * Used Libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    AlignmentToolbar,
    BlockControls,
} = wp.editor;
const {
    Button,
    Tooltip,
    Toolbar,
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
                imgID,
                imgURL,
                cardBtnPresent,
             },
            setAttributes
          } = this.props;

          const classesBtn = classnames( 'button', 'btn-custom-eleven-online' );

          const renderAddActionBtn = () => (
            <Tooltip text={ __( 'Add Action Button' ) }>
                <Button
                    className={ classesBtn }
                    onClick={ () => setAttributes( { cardBtnPresent: true } ) }
                >
                    { __( 'Add Button' ) }
                </Button>
            </Tooltip>
        );

        const renderRemoveActionBtn = () => (
            <Tooltip text={ __( 'Remove Action Button' ) }>
                <Button
                    className={ classesBtn }
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
                <ImageControl
                    attributes={ {imgID, imgURL} }
                    setAttributes={(newAttributes) => {
                        setAttributes({ imgID: newAttributes.imgID, imgURL: newAttributes.imgURL }) } }
                />
                <Toolbar>
                    <div className="wrapper-btn-custom-eleven-online">
                        { cardBtnPresent ? renderRemoveActionBtn() : renderAddActionBtn() }
                    </div>
                </Toolbar>        
            </BlockControls>
        );
    }
}