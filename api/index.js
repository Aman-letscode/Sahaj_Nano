const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
let data1 = [];
const port = 8080;
app.use(express.json());
app.use(cors("http://localhost:8080"));
app.set("Content-type", "application/json");


app.get("/", (req, res) => {
  const object = fs.readFileSync("./data.json");
  data1 = JSON.parse(object);

  // obj["id"] = num.toString();
  console.log(typeof num);
  res.send(JSON.stringify(data1));
});
app.get("/greeting", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/employee/all", (req, res) => {
  data1 = fs.readFileSync("./data.json");
  // if(data1.length)
  res.send(data1);
});

app.get("/employee/:id", (req, res) => {
  const employeeId = req.params.id;
  let obj = {};
  const object = fs.readFileSync("./data.json");
  // object.forEach()
  data1 = JSON.parse(object);
  data1.forEach((element) => {
    if (element["id"] == employeeId) {
      obj = element;
      res.status(200).send(JSON.stringify(obj));
    }
  });
  res
    .status(404)
    .send({ message: "Employee with " + employeeId + " was not found" });
});

app.put("/employee/:id", (req, res) => {
  const employeeId = req.params.id;
//   console.
  const name1 = req.body.name;
  const city1 = req.body.city;
  
  const object = fs.readFileSync("./data.json");
  // object.forEach()
  data1 = JSON.parse(object);
  let array = [...data1];
  console.log(array);
  const index = array.findIndex((obj)=> (obj.id==employeeId))
  console.log(index);
  if(index==-1){
    
    res.status(404).send({ message: "Employee with " + employeeId + " was not found" });
}
else{
    array.splice(index,1);
    let obj = {
        "id":employeeId,
        "name":name1,
        "city":city1
    }
    array.splice(index,0,obj);
    console.log(array[index]);
    
      fs.writeFileSync("./data.json", JSON.stringify(array));
      res.status(201).send(JSON.stringify(array));
}

});


app.delete("/employee/:id", (req, res) => {
  const employeeId = req.params.id;
//   console.
  
  const object = fs.readFileSync("./data.json");
  // object.forEach()
  data1 = JSON.parse(object);
  let array = [...data1];
  console.log(array);
  const index = array.findIndex((obj)=> (obj.id==employeeId))
  console.log(index);
  if(index==-1){
    
    res.status(404).send({ message: "Employee with " + employeeId + " was not found" });
}
else{
    array.splice(index,1);
    
    console.log(array[index]);
    
      fs.writeFileSync("./data.json", JSON.stringify(array));
      res.status(201).send(JSON.stringify(array));
}

});

app.post("/employee", (req, res) => {
  const obj = {};
  const name = req.body.name;
  const city = req.body.city;
  if (!req.body) {
    res.status(501).send("Mention the name and city");
  } else {
    const object = fs.readFileSync("./data.json");

    data1 = JSON.parse(object);
    let last_id = data1.at(-1);
    let num = Number(last_id["id"]);
    num++;
    obj["id"] = num.toString();
    obj["name"] = name;
    obj["city"] = city;
    data1.push(obj);
    fs.writeFileSync("./data.json", JSON.stringify(data1));
    res.status(201).send({ employeeId: data1.at(-1)["id"] });
  }
});

app.listen(port, () => {
  console.log("Listening to:" + port);
});
