const mongoose = require('mongoose')

 
const mongoURI = "mongodb+srv://ayushi:lgNmRWcUoITrXcJA@cluster0.yq5ua.mongodb.net/mernproject?authSource=admin&replicaSet=atlas-dueo4n-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true"
mongoose.connect(mongoURI, {useNewUrlParser:true, useUnifiedTopology: true } ).then(connect =>{
    console.log("mongodb connected")
}).catch(err=>{
    console.log("error in mongodb connection", err)
})