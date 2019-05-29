import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import ShowItems from './components/ShowItems';
import EditModal from './components/EditModal';

import './App.css';

import axios from 'axios';

class App extends React.Component {
  state = {
    items: [],
    isReady: false,
    editModalIsOpen: false
  };

  setAppState = newState => {
    this.setState({ items: newState });
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/inventory')
      .then(res => {
        this.setState({ items: res.data });
      })
      .then(() => {
        this.setState({ isReady: true });
      })
      .catch(err => {
        console.error('Whooops App did mount', err);
      });
  }

  editSelectedItem = obj => {
    this.setState({ editModalIsOpen: true });
    console.log(obj);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div class="siteContent">
          <EditModal isOpen={this.state.editModalIsOpen} />
          <AddItem setAppState={this.setAppState} />
          {this.state.isReady && (
            <ShowItems
              items={this.state.items}
              setAppState={this.setAppState}
              editSelectedItem={this.editSelectedItem}
            />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
