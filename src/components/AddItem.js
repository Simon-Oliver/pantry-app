import React from 'react';

class AddItem extends React.Component {
  state = {
    itemName: ''
  };
  handleOnsubmit(e) {
    e.preventDefault();
    console.log(this.state);
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
