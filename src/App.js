import React from 'react';
import unsplash from './api/unsplash'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'


class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
        });

        this.setState({ images: response.data.results });

    }

    render() {
        return (
            <div className="container mx-auto pt-4">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>

        );

    }

}

export default App;
