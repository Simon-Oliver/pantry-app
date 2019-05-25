import React from 'react';
import { FoodItem } from '../helper/inventory';
import axios from 'axios';

class AddItem extends React.Component {
  state = {
    name: '',
    expiryDate: ''
  };

  handleOnsubmit(e) {
    e.preventDefault();
    const { name, expiryDate } = this.state;
    const obj = new FoodItem(name, expiryDate);
    axios
      .post('http://localhost:3000/create', obj)
      .then(() => {
        axios
          .get('http://localhost:3000/inventory')
          .then(res => {
            this.props.setAppState(res.data.items);
            this.setState({ name: '', expiryDate: '' });
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
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={e => this.handleOnsubmit(e)} onChange={e => this.handleInputChange(e)}>
        <label>Add Item</label>
        <input name="name" value={this.state.name} />
        <label for="expiryDate">Start date:</label>
        <input type="date" id="expiryDate" name="expiryDate" value={this.state.expiryDate} />
        <button>Submit</button>
      </form>
    );
  }
}

export default AddItem;
