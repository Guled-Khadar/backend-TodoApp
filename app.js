const express = require("express")
const cors = require("cors")
const router = require("./routes/todoRoutes")
const app = express()
require("dotenv").config()

//Db connection
const connectToMongo = require("./db/connection")

//Port
const PORT = process.env.PORT

// sites that i allowed to fetch my data 

const myListSites = "https://musical-conkies-2d4293.netlify.app/"
const corsOption = {
    origin : (origin , callback)=> {
        if(myListSites.origin(origin)!== -1){
            callback(null, true)
        }else {
            callback( error = (" am not allowes to acces these site "))
        }

        optionIsSuccessfull = 200


    }
}

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router)
app.use(cors())


//running port 
app.listen (PORT, ()=> {console.log(`app is running on Port:  ${PORT}`)
connectToMongo();
})

module.exports = app

