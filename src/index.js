import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBpogIMcQMKM301uQu7Je-Tl2aKdr3k6_g';
// Create a new component, which should produce some HTML.
const App = () => {
    return <div>
        <SearchBar />
    </div>;
};

// Take the generated HTML and add it to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));