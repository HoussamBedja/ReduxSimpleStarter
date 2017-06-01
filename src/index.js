import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = "AIzaSyDnRltxckA3hoaOSNMV4gAyH77cZpq_R8s";

// Create a new React component, which should produce some HTML.
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards')

    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); // same as this.setState({videos: videos}) and only works if both names are the same
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}

                    videos={this.state.videos}/>
            </div>
        );
    }
}

// Take the generated HTML created and add it to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));