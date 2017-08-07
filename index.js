'use strict';

const line = require('@line/bot-sdk');
const express = require('express');
const _noodles = require('./src/noodles');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();
const noodles = new _noodles();

// setup view
app.get('/', function(request, response) {
  response.sendfile('./views/main.html');
});

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/webhook', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result));
});

// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  var client = new line.Client({
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
  });

  // create a echoing text message
  var echo = { type: 'text', text: event.message.text };
  noodles.setLower(event.message.text);
  echo.text = noodles.noodleHandler(event.message.text);
  if(echo.text === 'Noooooooooooooo[dles]!!!'){
    client.replyMessage(event.replyToken, echo)
    return client.leaveGroup(event.source.groupId);
  }

  // use reply API
  return client.replyMessage(event.replyToken, echo);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});