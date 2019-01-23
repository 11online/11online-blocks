/**
 * Container Component dependencies
 */
import './style.scss';
import classnames from 'classnames';
import Inspector from "./inspector";
import ImageControl from "../assets/js/image-control";

/**
 * Used Libraries
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks, BlockControls } = wp.editor;

/**
 * Create a Container Component
 */
export default class Container extends Component {

    constructor(props) {
        super( ...arguments );
        this.props = props;
    }

    render() {
        const {
            attributes: {
                bgrOption, 
                colorBackgroundControl,
                imgID,
                imgURL,
                imgOpacity,
                padTop,
                padBottom,               
            },
            className,
            setAttributes,
            isSelected,
            inEditor,         
        } = this.props;    

        const classes = classnames( className, 'background-eleven-online' );
        const divStyle = {
            backgroundColor: colorBackgroundControl, 
            paddingTop: `${String(padTop)}px`, 
            paddingBottom: `${String(padBottom)}px`,
        };

        const renderContainer = (isInEditor) => {
            return (
                <div className={ classes } style={ divStyle }>
                    { isInEditor ? <InnerBlocks /> : <InnerBlocks.Content /> } 
                    { imgID &&
                        <div 
                            className="img-background-background-eleven-online"
                            style={ { backgroundImage: `url(${ imgURL })`, opacity: imgOpacity*0.1 } }
                        ></div>
                    }
                </div>                        
            );
        }

        return (
            inEditor ? 
                <Fragment>
                    { isSelected &&
                        <Fragment> 
                            { isSelected &&  
                                <BlockControls>
                                    { (bgrOption === 'bgrImage') && 
                                        <ImageControl
                                            attributes={ {imgID, imgURL} }
                                            setAttributes={ (newAttributes) => {
                                                setAttributes({ imgID: newAttributes.imgID, imgURL: newAttributes.imgURL }) } }
                                        />
                                    }         
                                </BlockControls>
                            }
                            { isSelected && <Inspector {...{ setAttributes, ...this.props }} /> }
                        </Fragment>
                    }
                    { renderContainer(true) }
                </Fragment>
            : 
                <Fragment>
                    { renderContainer(false) }
                </Fragment>   
        );
    }
}