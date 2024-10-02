const line = require('@line/bot-sdk');  
const express = require('express');
const app = express();
const config = require('./line-config');
const handleEvent = require('./handle-event');


app.post('/webhook', line.middleware(config), (req, res) => {
  Promise
    .all([
      req.body.events.map(handleEvent)
    ])
    .then((result) => res.json(result))
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});