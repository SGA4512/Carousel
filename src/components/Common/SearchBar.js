import React from 'react';

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = { term: "Seattle", numberOfImages: 40 }; // default state to show images onload 
    }

    componentDidMount() {
        this.props.onSubmit(this.state.term, this.state.numberOfImages); // On Component mount make call to flickr API
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term, this.state.numberOfImages);
    }

    render() {
        return (
            <div className="segment">
                <form className="form" onSubmit={this.onFormSubmit} >
                    <div className="field">
                        <label>Image Search:</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                        <label className="noOfImages">Number of Images:</label>
                        <input type="text" className="numberImages" value={this.state.numberOfImages} onChange={(e) => this.setState({ numberOfImages: e.target.value })} />
                        <button type="submit" className="btnDefault">Search</button>
                    </div>
                </form>
            </div>);
    }
}

export default SearchBar;