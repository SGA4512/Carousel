import React from 'react';
import flickr from '../api/flickr';
import Carousel from './Carousel';
import SearchBar from './Common/SearchBar';
import './App.css';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: [],
            isLoading: true
        }
    }

    onSearchSubmit = async (term, numberOfImages) => {        
        /* 
            Used flickr API to get photos. Unfortunately flickr doesn't allow api_key to pass inside header.
            In ideal scenario, I like to implement this functionality on header or backend side with languages like C# or Python.
        */
        const response = await flickr.get("?method=flickr.photos.search", {    
            params: {
                api_key: "05c6cd29b5fc50113774a9745836fdff",
                tags: term,                // search images based on matched tags
                per_page: numberOfImages,  // Number of images to display on slider, default = 20
                page: 1, format: "json", nojsoncallback: 1,
                safe_search: 1, content_type: 1, sort: 'relevance', media: 'photos',
                extras: 'url_l'   // Size of image
            }
        });

        // Set response images form API to initial state 
        
        this.setState({
                images: response.data.photos.photo,
                isLoading: false
        });
    }

    render() {
        const { images, isLoading } = this.state; // state object destructuring
        return( 
            <div className="container">
                 <SearchBar onSubmit={this.onSearchSubmit}  />
                 Showing <b>{images.length}</b> Images.
                 {
                     images.length > 0 ? 
                     <Carousel images={images} /> : 
                     isLoading ? 
                        <div className="message"><h1>Loading...</h1></div> : 
                        <div className="message"><h1>No images found</h1></div>
                }                 
            </div>
          )
    }
}

export default App;