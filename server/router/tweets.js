const express = require('express')
const { updateTweet } = require('../../controller/tweets')
const tweetController = require('../controller/tweets')

const router = express.Router()  

// READ
router.get('/', tweetController.getTweets)

// CREATE
router.post('/', tweetController.createTweet)

// UPDATE
router.put('/:id', tweetController.updateTweet)

// DELETE
router.delete('./:id', tweetController.deleteTweet)

module.exports = router