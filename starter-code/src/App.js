import React, { Component } from 'react';
import './App.css';
// import contacts from './contacts.json'
import ContactList from './components/ContactsList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>hello friend</h1>

        <ContactList />
      </div>
    );
  }
}

export default App;
