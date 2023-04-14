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

    
    // obj["id"] = num.toString();
        console.log(typeof num);
    res.send(JSON.stringify(data1))
})
app.get('/greeting',(req,res)=>{
    res.status(200).send("Hello World!");
})


app.get('/employee/all',(req,res)=>{
    data1 = fs.readFileSync('./data.json');
    // if(data1.length)
res.send(data1);
})

// app.get('/employee/:id',(req,res)=>{

//     res.status(200).send()
// })

app.post('/employee',(req,res)=>{
    const obj = {}
    const name = req.body.name;
    const city = req.body.city;
    if(!req.body){
        res.status(501).send("Mention the name and city")

    }else{

        const object = fs.readFileSync('./data.json');
        
        data1 = JSON.parse(object);
        let last_id = data1.at(-1);
    let num = Number(last_id["id"]);
    num++;
    obj["id"] = num.toString();
    obj['name'] = name;
    obj['city'] = city;
    data1.push(obj);
    fs.writeFileSync('./data.json',JSON.stringify(data1));
    res.status(201).send({"employeeId":obj["id"]})
}
})

app.listen(port, ()=>{
    console.log("Listening to:"+port);
})