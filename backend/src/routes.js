const express = require('express');

const routes = express.Router();

const TweetController = require('./controller/Tweet.controller');

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

module.exports = routes;
