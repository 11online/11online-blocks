/**
 * Container Component dependencies
 */
//import './editor.scss';
import './style.scss';

import classnames from 'classnames';
import Controls from "./controls";
import Inspector from "./inspector";

/**
 * Used Libraries
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {  } = wp.editor;
const {  } = wp.components;

/**
 * Create a Card Component
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
            },
            className,
            setAttributes,
            isSelected,
            inEditor,         
        } = this.props;    

        const classes = classnames( className, 'background-eleven-online' );

        const renderContainer = () => {
            return (
                <div className={ classes } style={ {backgroundColor: colorBackgroundControl} }>
                    <p><br /></p>
                    <p><br /></p>
                    <p><br /></p>
                    <p><br /></p>
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
                    { renderContainer() }
                </Fragment>
            : 
                <Fragment>
                    { renderContainer() }
                </Fragment>   
        );
    }
}