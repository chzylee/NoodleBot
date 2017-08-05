# Echo Bot

Built from example LINE bot just to echo messages (see https://github.com/line/line-bot-sdk-nodejs/tree/master/examples/echo-bot)     
Bot that makes jokes and roasts people.

## How to use

Install deps:

```bash
$ npm install
```

Configuration for Heroku Deployment:

``` bash
$ heroku config:set CHANNEL_SECRET=YOUR_CHANNEL_SECRET
$ heroku config:set CHANNEL_ACCESS_TOKEN=YOUR_CHANNEL_ACCESS_TOKEN
$ heroku config:set PORT=1234
```

Run:

``` bash
$ node .
```