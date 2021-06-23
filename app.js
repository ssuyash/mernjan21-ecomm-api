const express = require('express')
const bodyParser = require('body-parser')


require('./database')


//importing routers
const authRouter = require('./api/v1/router/Auth')

const app = express()
app.use(bodyParser.json())

app.post('/', (req, res) =>{
    res.send("we are here and working")
})

app.use('/auth', authRouter)



const PORT = 8080
app.listen(8080, function(){
    console.log(`listen on port ${PORT}`)
})