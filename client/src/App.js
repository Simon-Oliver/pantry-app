import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import ShowItems from './components/ShowItems';

import axios from 'axios';

class App extends React.Component {
  state = {
    items: []
  };

  setAppState = newState => {
    console.log('setNewState has fired');
    this.setState({ items: newState });
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/inventory')
      .then(res => {
        console.log('Get request has fired', res.data);
        this.setState({ items: res.data.items });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    console.log('App rendered');
    return (
      <div className="App">
        <Header />
        <AddItem setAppState={this.setAppState} />
        <ShowItems items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
