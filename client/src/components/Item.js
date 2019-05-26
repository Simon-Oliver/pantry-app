import React from 'react';
import './item.css';

const Item = props => {
  const expiredStatus = () => {
    if (props.data.isExpired) {
      return `Item has expired ${props.data.willExpireIn * -1} day${
        props.data.willExpireIn * -1 === 1 ? '' : 's'
      } ago`;
    } else if (!props.data.hasExpiryDate) {
      return `Item has no expiry date`;
    } else if (props.data.willExpireIn === 0) {
      return `Item will expire today!`;
    } else {
      return `Item will expire in ${props.data.willExpireIn} day${
        props.data.willExpireIn === 1 ? '' : 's'
      }.`;
    }
  };

  const classNameColor = () => {
    if (props.data.willExpireIn < 0) {
      return 'expired';
    } else if (props.data.willExpireIn <= 7) {
      return 'soonToExpire';
    } else {
      return 'inDate';
    }
  };

  return (
    <div className={classNameColor()}>
      <p>{props.data.name}</p>
      <p>{expiredStatus()}</p>
    </div>
  );
};

export default Item;
