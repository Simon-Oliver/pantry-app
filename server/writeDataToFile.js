var fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

const createInventoryItem = newItem => {
  fs.readFile(path.resolve(__dirname, 'inventoryData.json'), 'utf8', function readFileCallback(
    err,
    data
  ) {
    if (err) {
      var obj = {
        item: []
      };
      var json = JSON.stringify(obj);
      fs.writeFile('inventoryData.json', json, 'utf8', (err, data) =>
        err ? console.log(err) : console.log(data)
      );
      console.log(err);
    } else {
      let obj = JSON.parse(data); //now it an object
      obj.item.push({ ...newItem, id: uniqid() }); //add some data
      let json = JSON.stringify(obj); //convert it back to json
      fs.writeFile('inventoryData.json', json, 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data, 'succsess');
        }
      }); // write it back
    }
  });
};

export default createInventoryItem;
