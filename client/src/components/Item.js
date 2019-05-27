import React from 'react';
import './item.css';
import axios from 'axios';

class Item extends React.Component {
  expiredStatus = () => {
    if (this.props.data.isExpired) {
      return `Item has expired ${this.props.data.willExpireIn * -1} day${
        this.props.data.willExpireIn * -1 === 1 ? '' : 's'
      } ago`;
    } else if (!this.props.data.hasExpiryDate) {
      return `Item has no expiry date`;
    } else if (this.props.data.willExpireIn === 0) {
      return `Item will expire today!`;
    } else {
      return `Item will expire in ${this.props.data.willExpireIn} day${
        this.props.data.willExpireIn === 1 ? '' : 's'
      }.`;
    }
  };

  classNameColor = () => {
    if (!this.props.data.hasExpiryDate || this.props.data.willExpireIn > 7) {
      return 'inDate';
    } else if (!this.props.data.isExpired && this.props.data.willExpireIn <= 7) {
      return 'soonToExpire';
    } else if (this.props.data.isExpired) {
      return 'expired';
    }
  };

  onButtonClick = () => {
    axios
      .post('http://localhost:3000/delete', { id: this.props.data.id })
      .then(() => {
        axios
          .get('http://localhost:3000/inventory')
          .then(res => {
            this.props.setAppState(res.data);
          })
          .catch(err => {
            console.error(err);
          });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className={this.classNameColor()}>
        <p>{this.props.data.name}</p>
        <p>{this.expiredStatus()}</p>
        <button onClick={this.onButtonClick}>Delete</button>
      </div>
    );
  }
}

export default Item;
