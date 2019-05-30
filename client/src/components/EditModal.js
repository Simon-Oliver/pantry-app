import React from 'react';
import Modal from 'react-modal';

class EditModal extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen}>
        <form>
          <label>Edit Item</label>
          <input
            name="name"
            value={this.props.data.name}
            defaultChecked={false}
            onChange={e => this.props.onModalInputChange(e)}
          />
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            value={this.props.data.expiryDate}
            onChange={e => this.props.onModalInputChange(e)}
          />
          <div>
            <input
              type="radio"
              id="Unopened"
              name="isOpened"
              value={false}
              checked={!this.props.data.isOpened}
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
              checked={this.props.data.isOpened}
              onChange={e => this.handleInputChangeRadio(e)}
            />
            <label htmlFor="open">Is Open</label>
          </div>
          <label htmlFor="useByAfterOpening">Use by after opening:</label>
          <input
            type="date"
            id="useByAfterOpening"
            name="useByAfterOpening"
            value={this.props.data.useByAfterOpening}
            onChange={e => this.props.onModalInputChange(e)}
          />
        </form>
        <button onClick={() => this.onModalBtnClick()}>Save</button>
      </Modal>
    );
  }
}

export default EditModal;
