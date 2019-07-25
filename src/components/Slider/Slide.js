import React, { Component } from 'react';

class Slide extends Component {
    constructor(props){
        super(props);
        this.state = {}        
    }

    // handleClick pass selected image index to Carousel which them pass to Thumbnails to highlight seleted one
    handleClick = () => {
        this.props.selectImage(this.props.index);
    }

    render() { 
        const {image, isActive} = this.props;
        return (
                <div className={`image ${isActive ? 'active' : ''}`}>
                    <img 
                        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`} 
                        alt={image.title} 
                        onClick={this.handleClick} />
                    <h2 className="imageTitle">{ image.title || 'No Title Available' }</h2>
                </div>
        )
    }
}
 
export default Slide;
