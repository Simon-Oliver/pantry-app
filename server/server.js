var express = require('express');
var app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.post('/test', (req, res) => res.json(req.body));

app.get('/hello', function(req, res) {
  res.send('hello world');
});

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
