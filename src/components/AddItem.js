import React from 'react';
import { Item, FoodItem } from '../helper/inventory';
import inventoryData from '../helper/inventoryData.json';

class AddItem extends React.Component {
  state = {
    itemName: ''
  };
  handleOnsubmit(e) {
    e.preventDefault();

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
