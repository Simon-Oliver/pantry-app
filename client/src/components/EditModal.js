import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';

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
            value={moment(this.props.data.expiryDate).format('YYYY-MM-DD')}
            onChange={e => this.props.onModalInputChange(e)}
          />
          <div>
            <input
              type="radio"
              id="Unopened"
              name="isOpened"
              value={false}
              checked={!this.props.data.isOpened}
              onChange={e => this.props.handleModelInputChangeRadio(e)}
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
              onChange={e => this.props.handleModelInputChangeRadio(e)}
            />
            <label htmlFor="open">Is Open</label>
          </div>
          <label htmlFor="useByAfterOpening">Use by after opening:</label>
          <input
            type="date"
            id="useByAfterOpening"
            name="useByAfterOpening"
            value={moment(this.props.data.useByAfterOpening).format('YYYY-MM-DD')}
            onChange={e => this.props.onModalInputChange(e)}
          />
          <button onClick={e => this.props.onModalBtnClick(e)}>Save</button>
        </form>
      </Modal>
    );
  }
}

export default EditModal;
