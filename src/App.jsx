import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalMenu from './global/GlobalMenu.jsx';

//<Route exact path="/" component={PostList} />
//<Route path="/post/:id" component={Post} />

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <GlobalMenu />
                <h1>Welcome to API</h1>
                <Switch />
            </div>
        );
    }
}

export default App;
