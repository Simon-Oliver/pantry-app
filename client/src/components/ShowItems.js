import React from 'react';
import Item from './Item';

const ShowItems = props => {
  const renderList = props.items.map(e => (
    <Item
      key={e.id}
      data={e}
      setAppState={props.setAppState}
      editSelectedItem={props.editSelectedItem}
    />
  ));
  return <div>{renderList}</div>;
};

export default ShowItems;
