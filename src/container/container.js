/**
 * Container Component dependencies
 */
import './style.scss';

import classnames from 'classnames';

import Controls from "./controls";
import Inspector from "./inspector";

/**
 * Used Libraries
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.editor;
const {  } = wp.components;

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
            paddingBottom: `${String(padBottom)}px`
        };

        const renderContainer = (isInEditor) => {
            return (
                <div className={ classes } style={ divStyle }>
                    { isInEditor ? <InnerBlocks /> : <InnerBlocks.Content /> }  
                    { imgID &&
                        <div 
                            className="img-background-background-eleven-online"
                            style={ { backgroundImage: 'url(' + imgURL + ')', opacity: imgOpacity*0.1 } }
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
                            <Controls {...{ setAttributes, ...this.props }} />
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