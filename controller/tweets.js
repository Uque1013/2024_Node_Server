const tweetRepository = require('../data/tweets')

const tweetController = {
    // CREATE
    createTweet: (req, res, next) => {
        const {text, name, username} = req.body
        const tweet = tweetRepository.create(text, name, username)
        // 201: 요청이 성공적이었으며 그 결과로 새로운 리소스 생성
        res.status(201).json(tweet)
    },

    // READ 아직까지는 전체 데이터만 읽어온다
    getTweets: (req, res, next) => {
        const tweets = await tweetRepository.getAll()
        res.status(200).json(tweets)
    },

    // UPDATE
    updateTweet: (req, res, next) => {
        const id = req.params.id
        const text = req.body.text
        const tweet = await tweetRepository.update(id, text)
        if(tweet) {
            tweet.text =text
            req.status(200).json(tweet)
        } else {
            res.status(404).json({message: "게시글을 찾지 못했습니다."})
        }
    },

    // DELETE
    deleteTweet: (req, res, next) => {
        const id = req.params.id
        // 특정 id에 해당하는 게시글을 삭제
        tweetRepository.remove(id)
        res.sendStatus(204)
    }
}

module.exports = tweetController