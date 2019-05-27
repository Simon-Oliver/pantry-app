var fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

function createInventoryItem(newItem) {
  fs.readFile(path.resolve(__dirname, 'inventoryData.json'), 'utf8', function readFileCallback(
    err,
    data
  ) {
    if (err) {
      var obj = {
        items: []
      };
      var json = JSON.stringify(obj);
      fs.writeFile('inventoryData.json', json, 'utf8', (err, data) =>
        err ? console.log(err) : console.log(data)
      );
      console.log(err);
    } else {
      let obj = JSON.parse(data); //now it's an object
      obj.push({ ...newItem, id: uniqid() }); //add some data
      let json = JSON.stringify(obj); //convert it back to json
      fs.writeFile('inventoryData.json', json, 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data, 'succsess');
        }
      });
    }
  });
}

function deleteInventoryItem(id) {
  fs.readFile(path.resolve(__dirname, 'inventoryData.json'), 'utf8', function readFileCallback(
    err,
    data
  ) {
    console.log('deleteInventoryItem', id);
    let obj = JSON.parse(data); //now it's an object
    console.log(obj);
    const newObj = obj.filter(e => e.id !== id); //add some data
    console.log(newObj);
    let json = JSON.stringify(newObj); //convert it back to json
    fs.writeFile('inventoryData.json', json, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data, 'succsess');
      }
    });
  });
}

module.exports = {
  createInventoryItem,
  deleteInventoryItem
};
