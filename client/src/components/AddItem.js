import React from 'react';
import { Item, FoodItem } from '../helper/inventory';
import inventoryData from '../helper/inventoryData.json';
import axios from 'axios';

class AddItem extends React.Component {
  state = {
    itemName: ''
  };

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    console.log(body);
  };

  handleOnsubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3000/create', this.state)
      .then(() => console.log('Post request has fired'))
      .catch(err => {
        console.error(err);
      });

    console.log('Mounted');
    console.log('------->', inventoryData);
    console.log(new FoodItem(this.state.itemName, true, '2019-05-12'));
    this.setState({ itemName: '' });
  }

  handleInputChange(e) {
    this.setState({ itemName: e.target.value });
  }

  render() {
    return (
      <form onSubmit={e => this.handleOnsubmit(e)}>
        <label>Add Item</label>
        <input onChange={e => this.handleInputChange(e)} value={this.state.itemName} />
        <button>Submit</button>
      </form>
    );
  }
}

export default AddItem;
