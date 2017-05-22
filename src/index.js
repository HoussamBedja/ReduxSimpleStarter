import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component, which should produce some HTML.
const App = () => {
    return <div>Hello!</div>;
};

// Take the generated HTML and add it to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));