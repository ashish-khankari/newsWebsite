const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
mongoose.connect("mongodb+srv://ashish123:ashish123@newsapp.fssgi3i.mongodb.net/newsapp?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json())
app.use(cors())

app.use("/", require("./routes/users"))
app.listen(4400, function(){
    console.log("connected to server 4400")
})

