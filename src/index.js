import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyBpogIMcQMKM301uQu7Je-Tl2aKdr3k6_g';

// Create a new component, which should produce some HTML.
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos }); // same as this.setState({videos: videos}) and only works if both names are the same
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos="{this.state.videos}"/>
            </div>
        );
    }
}

// Take the generated HTML and add it to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));