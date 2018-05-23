const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/time', (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(process.env.PORT || 3000);