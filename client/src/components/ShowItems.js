import React from 'react';

const ShowItems = props => {
  const renderList = props.items.map(e => <p key={e.id}>{e.name}</p>);
  return <div>{renderList}</div>;
};

export default ShowItems;
