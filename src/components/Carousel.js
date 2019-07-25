import React, { Component } from 'react';
import Thumbnails from './Thumbnails/Thumbnails';
import Slider from './Slider/Slider';

class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
            translateValue: 0
        }
        this.slider = React.createRef();  /* Used react ref to get width of carouselContainer. This width is used for CSS transform */
    }

    // Handles next click for Carousel. its update translateValue for state with carouselContainer width. 

    goToNext = () => {
        if (this.state.activeIndex < this.props.images.length - 1) {
            this.setState(prevState => ({
                activeIndex: prevState.activeIndex + 1,
                translateValue: prevState.translateValue - this.slider.current.offsetWidth
            }));
        }
    }

    // Handles next click for Carousel. 

    goToPrev = () => {
        if (this.state.activeIndex !== 0) {
            this.setState(prevState => ({
                activeIndex: prevState.activeIndex - 1,
                translateValue: prevState.translateValue + this.slider.current.offsetWidth
            }));
        }
    }

    /* 
        Pass seleted image index from Thumbnails to Carousel component
        and then update state with active index, which re-render Carousel component
    */

    selectImage = (index) => {
        this.setState({    
            activeIndex: index,         
            translateValue: -this.slider.current.offsetWidth * index
        });
    }
    /*
        Render has two components Slider and Thumbnails, which is a part of Carousel component
    */
    render() { 
        const {activeIndex, translateValue} = this.state;
        const { images } = this.props;
        return (             
                <div className="carouselContainer" ref={this.slider}>
                    <Slider 
                        images={images}
                        translateValue={translateValue} 
                        selectImage={this.selectImage} 
                        activeIndex={activeIndex}
                        goToPrev={this.goToPrev}
                        goToNext={this.goToNext}  /> 

                    <Thumbnails images={images} selectImage={this.selectImage} activeIndex={activeIndex} jump={5} imagePerFrame={10} />
                </div>
            );
    }
}
 
export default Carousel;