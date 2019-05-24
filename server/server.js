var express = require('express');
var app = express();
var inventory = require('./writeDataToFile');
var fs = require('fs');
const path = require('path');
var inventoryData = require('./inventoryData.json');

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/create', (req, res) => {
  inventory.createInventoryItem(req.body);
  console.log(req);
  res.send('working');
});

app.get('/inventory', function(req, res) {
  fs.readFile(path.resolve(__dirname, 'inventoryData.json'), 'utf8', function(err, data) {
    if (err) {
      return 'error';
    } else if (!err) {
      res.send(data);
    }
  });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
