import React, { Component } from 'react';
import './App.css';


import Banner from './components/banner';
import Form from './components/form';
import Notification from './components/notification'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Form />
        <Notification />
      </div>
    );
  }
}

export default App;
