const express = require('express')
const cors = require('cors')
const tweetsRouter = require('./router/tweets')

const app =  express()

// json으로 요청한 body 리퀘스트 파싱
app.use(express.json())
app.use(cors())

app.use('/tweets', tweetsRouter)

app.listen(3000) 