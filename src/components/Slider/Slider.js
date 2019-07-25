import React from 'react';
import Slide from './Slide';
import ButtonBack from './ButtonBack';
import ButtonNext from './ButtonNext';

const Slider = (props) => {
    const { images, translateValue, activeIndex, goToPrev, goToNext } = props;  // props object destructuring

    const html = (
        images.map((img, index) => (
            <Slide key={index} index={index} image={img} selectImage={props.selectImage}/>
        ))
    )
    return (
        <div className="sliderContainer">
             <ButtonBack isDisabled={activeIndex === 0} goToPrev={goToPrev} />             
                <div className="carousel"
                    style={{
                        transform: `translateX(${translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}> 
                    {html}
                </div>
            <ButtonNext isDisabled={activeIndex === images.length - 1} goToNext={goToNext} />
        </div>
    );
}

export default Slider;