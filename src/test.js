import React, { Component } from 'react';
import PreviousArrow from './Slider/PreviousArrow';
import NextArrow from './Slider/NextArrow';
import Thumbnails from './Thumbnails/Thumbnails';

class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
            translateValue: 0,
            disabledNext: false,
            disabledPrev: true
        }
        this.slider = React.createRef(); /* Used react ref to get width of carouselContainer. This width is used for CSS transform */
    }

    /*  
        Handles next click for Carousel. its update translateValue for state with carouselContainer width. 
    */ 

    goToNext = () => {
        if (this.state.activeIndex < this.state.images.length - 1) {
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

    render() { 
        const {activeIndex, translateValue} = this.state;
        const { images } = this.props;
        return (
            <div className="container" style={{ marginTop: '10px' }}>
                    Showing <b>{images.length}</b> Images.
                    {
                        images.length > 0 ?
                        (
                            <React.Fragment>
                                <div className="carouselContainer" ref={this.slider}>
                                    <PreviousArrow isDisabled={activeIndex === 0} goToPrev={this.goToPrev} />
                                    <Carousel images={images} translateValue={translateValue} selectImage={this.selectImage} />                        
                                    <NextArrow isDisabled={activeIndex === images.length - 1} goToNext={this.goToNext} />
                                </div>
                                <Thumbnails images={images} selectImage={this.selectImage} activeIndex={activeIndex} />
                            </React.Fragment>
                        ) : (
                            <div className="noRecords">
                                <h2>No records found.</h2>
                            </div>
                        )
                    }
                    
            </div>);
    }
}
 
export default Carousel;