const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
let data1 = []
const port = 8080
app.use(express.json())
app.use(cors('http://localhost:8080'))
app.get('/',(req,res)=>{
    const object = fs.readFileSync('./data.json')
    data1 = JSON.parse(object);
    res.send(JSON.stringify(data1))
})
app.get('/greeting',(req,res)=>{


    res.status(200).send("Hello World");
})

app.post('/employee',(req,res)=>{
    const obj = {}
    const name = req.body.name;
    const city = req.body.city;
    // if(name===''){
    //     res.status(501).send("Mention the name")

    // }
    // obj['name'] = 
    // fs.readFile('./data.json',"utf-8",(err,data)=>{
    //     if(err) throw err;
    //     if(data!=)
    //     data1 = data;

    // })

    const object = fs.readFileSync('./data.json')
    data1 = json.parse(object);
    res.json(json.stringify(data1))

})

app.listen(port, ()=>{
    console.log("Listening to:"+port);
})