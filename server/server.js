var express = require('express');
var app = express();
var inventory = require('./writeDataToFile');
var inventoryData = require('./inventoryData.json');

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/create', (req, res) => {
  res.send('working');
  inventory.createInventoryItem(req.body);
  console.log(req);
});

app.get('/inventory', function(req, res) {
  res.send(inventoryData);
});

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
