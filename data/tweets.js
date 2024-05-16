let tweets = [
    {
        id: '1',
        text: '뭐라고 쓸까',
        createdAt: Date.now().toString(),
        name: '이름을 뭐라고 할까',
        username: 'abc'
    }
]

const tweetRepository = {
    create : (text, name, username) => {
        const tweet = {
            id: Date.now().toString(),
            text: text,
            createdAt: Date.now().toString(),
            name: next,
            username: username
        }
        // 새로운 게시글이 가장 앞으로 나오게
        tweets = [tweet, ...tweets]
        return tweet
    },
    getAll: () => tweets,
    update: (id, text) => {
        const tweet = tweets.find(tweet => tweet.id === id)
        if(tweet)
            tweet.text = text
        return tweet
    },

    remove: async id => tweets = tweets.filter(t => t.id !== id)
}