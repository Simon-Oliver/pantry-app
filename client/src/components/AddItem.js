import React from 'react';
import { FoodItem } from '../helper/inventory';
import axios from 'axios';

class AddItem extends React.Component {
  state = {
    name: '',
    expiryDate: '',
    isOpened: false,
    useByAfterOpening: ''
  };

  handleOnsubmit(e) {
    e.preventDefault();
    const { name, expiryDate, isOpened, useByAfterOpening } = this.state;
    const obj = new FoodItem(name, expiryDate, isOpened, useByAfterOpening);
    axios
      .post('http://localhost:3000/create', obj)
      .then(() => {
        axios
          .get('http://localhost:3000/inventory')
          .then(res => {
            this.props.setAppState(res.data.items);
            this.setState({ name: '', expiryDate: '', useByAfterOpening: '' });
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
    console.log(e.target);
  }

  handleInputChangeRadio(e) {
    const boolean = e.target.value === 'false' ? false : true;
    this.setState({ [e.target.name]: boolean });
  }

  render() {
    return (
      <form onSubmit={e => this.handleOnsubmit(e)}>
        <label>Add Item</label>
        <input
          name="name"
          value={this.state.name}
          defaultChecked={false}
          onChange={e => this.handleInputChange(e)}
        />
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="date"
          id="expiryDate"
          name="expiryDate"
          value={this.state.expiryDate}
          onChange={e => this.handleInputChange(e)}
        />
        <div>
          <input
            type="radio"
            id="Unopened"
            name="isOpened"
            value={false}
            checked={!this.state.isOpened}
            onChange={e => this.handleInputChangeRadio(e)}
          />
          <label htmlFor="Unopened">Unopened</label>
        </div>

        <div>
          <input
            type="radio"
            id="open"
            name="isOpened"
            value={true}
            checked={this.state.isOpened}
            onChange={e => this.handleInputChangeRadio(e)}
          />
          <label htmlFor="open">Is Open</label>
        </div>
        <label htmlFor="useByAfterOpening">Use by after opening:</label>
        <input
          type="date"
          id="useByAfterOpening"
          name="useByAfterOpening"
          value={this.state.useByAfterOpening}
          onChange={e => this.handleInputChange(e)}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default AddItem;
