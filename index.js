const app = require("./server")
const mongoose = require("mongoose")
const contrall = require("./contrall")

const uri = "mongodb+srv://gihan:tharushagihan1122@cluster0.h9h9ufc.mongodb.net/?retryWrites=true&w=majority"

const connect = async ()=>{
    try {
        await mongoose.connect(uri)
        .then(()=>{
            console.log("Connect")
        })

    } catch (error) {
        console.log(error)
    }
}

connect()

app.get("/getData", (req, res)=>{
    contrall.getData(req, res)
})

//title, data
app.post("/addData", (req, res)=>{
    contrall.addData(req, res)
})

//title
app.get("/findDataByTitle", (req, res)=>{
    contrall.findDataByTitle(req, res)
})

//name
app.get("/findUserByName", (req, res)=>{
    contrall.findUserByName(req, res)
})


//name, password
app.post('/addUser',(req, res)=>{
    contrall.addUser(req, res)
})


//email, id, job
app.post("/updateUser", (req, res)=>{
    contrall.updateUser(req, res)
})

//password
app.get("/findUserByPass", (req, res)=>{
    contrall.findUserByPass(req, res)
})

