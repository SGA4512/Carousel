import React, { Component } from 'react';
import ThumbImage from './ThumbImage';
import Next from './Next';
import Prev from './Prev';

class Thumbnails extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            transValue: 0,
            rollCount: 0
        }     
        this.thumb = React.createRef(); // Used react ref to calculate width of Thumbnails image. This width is used to transform Thumbnails section.
    }

    /* Get width of individual image/thumb in Thumbnails form Thumbnail component */

    calculateWidth = (width) => {
        this.thumbWidth = width; 
    }

    /* On props received trigger slideNext and SlideBack buttons */

    componentWillReceiveProps(nextProps, prevState){
        if((this.props.activeIndex + 1 - this.props.imagePerFrame) >= this.state.rollCount){
            this.slideNext();
        }
        if(this.props.activeIndex <= this.state.rollCount){
            this.slideBack();
        }    
    }

    /*
         Handles next click for Thumbnails. its update translateValue for state with Thumbnail width. 
         Also calculates number of frames needs to move.
    */ 

    slideNext = () => {        
        this.setState(prevState => ({
            transValue: (this.props.images.length - prevState.rollCount > this.props.imagePerFrame 
                            ? prevState.transValue - (this.props.jump * this.thumbWidth) 
                            : - (this.props.images.length - this.props.imagePerFrame) * this.thumbWidth),
            rollCount: this.props.images.length > prevState.rollCount  ? prevState.rollCount + this.props.jump : this.props.images.length
        }));
    }

    // Handles back click for Thumbnails. 

    slideBack = () => {
        this.setState(prevState => ({
            transValue: prevState.rollCount > this.props.imagePerFrame ? prevState.transValue + (this.props.jump * this.thumbWidth) : 0,
            rollCount: prevState.rollCount > this.props.imagePerFrame ? prevState.rollCount - this.props.jump : 0
        }));
    }

    render() {
        const { images, selectImage, activeIndex } = this.props; // props object destructuring
        const html = (
            images.map((img, index) => (
                <ThumbImage key={index} index={index} image={img} isThumb="true" selectImage={selectImage} isActive={index === activeIndex } getWidth={this.calculateWidth} />
            ))
        )
        
        return (
            <div className="thumbnails">            
                <Prev slideBack={this.slideBack} isDisabled={this.state.transValue === 0} />
                    <div ref={this.thumb}
                        style={{
                            transform: `translateX(${this.state.transValue}px)`,
                            transition: 'transform ease-out 0.45s'
                        }}
                        className="thumbnailsContainer" >
                        {html}
                    </div>
                <Next slideNext={this.slideNext} 
                      isDisabled={ Math.abs(this.state.transValue) === (this.thumbWidth * this.props.images.length) - (this.thumbWidth * this.props.imagePerFrame) } 
                    />
            </div>);
    }
}

export default Thumbnails;