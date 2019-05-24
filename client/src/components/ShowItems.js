import React from 'react';

const ShowItems = props => {
  const renderList = props.items.map(e => <p key={e.id}>{e.name}</p>);
  console.log('Show Items rerendered');
  return <div>{renderList}</div>;
};

export default ShowItems;
