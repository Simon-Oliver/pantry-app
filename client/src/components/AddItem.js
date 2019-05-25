import React from 'react';
import { FoodItem } from '../helper/inventory';
import axios from 'axios';

class AddItem extends React.Component {
  state = {
    name: ''
  };

  handleOnsubmit(e) {
    e.preventDefault();
    const obj = new FoodItem(this.state.name);
    axios
      .post('http://localhost:3000/create', obj)
      .then(() => {
        axios
          .get('http://localhost:3000/inventory')
          .then(res => {
            this.props.setAppState(res.data.items);
            this.setState({ name: '' });
          })
          .catch(err => {
            console.error(err);
          });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleInputChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <form onSubmit={e => this.handleOnsubmit(e)}>
        <label>Add Item</label>
        <input onChange={e => this.handleInputChange(e)} value={this.state.name} />
        <button>Submit</button>
      </form>
    );
  }
}

export default AddItem;
