import React, { Component } from 'react';

class ThumbImage extends Component {
    constructor(props){
        super(props);
        this.state = {}        
        this.thumb = React.createRef();
    }

    componentDidMount(){
        this.props.getWidth(this.thumb.current.offsetWidth);
    }

    handleClick = () => {
        this.props.selectImage(this.props.index); // Passing seleted image index to Thumbnails component, whcih is then used to update active index of Slider 
    }

    render() { 
        const {image, isActive} = this.props;
        /* Constructing image url with farm, server id, image id and secret */
        let imgUrl = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`;
        return (
            <div className={`image ${isActive ? 'active' : ''}`} ref={this.thumb}>
                <img src={ imgUrl } alt={image.title} onClick={this.handleClick} />
            </div>
        )
    }
}
 
export default ThumbImage;
