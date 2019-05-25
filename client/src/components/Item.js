import React from 'react';

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
  return (
    <div>
      <p>{props.data.name}</p>
      <p>{expiredStatus()}</p>
    </div>
  );
};

export default Item;
