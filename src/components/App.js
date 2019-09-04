import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import instance from '../api/unsplash';

class App extends React.Component {

    state = {images: []}

    onSearchSubmit = async (input) => {
        const response = await instance.get('/search/photos', {
            params: {
                query: input
            }
        })
        const arr = response.data.results;
        this.setState({images: arr})
        console.log(this.state.images);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                {this.state.images.length} images found.
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;
