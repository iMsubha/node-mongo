const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json())
const PORT = process.env.PORT || 8080
//data
const users = ['subha','fairuz','mahmud','hossain','fahad'];

app.get('/user/:id', (req, res)=>{
    console.log(req.params.id)
    const id = req.params.id;
    const name = users[id];
    res.send({id,name}); //json 
});

app.get('/', (req, res)=>{
   // console.log(req.baseUrl)
    res.send("I know how to open NODE");
});
//Post
app.post('/addUser', (req, res)=>{
  //in future, save to database hobe tahole ekta id add hobe
  //sei id shoho jabe client side a
  const user = req.body;
  user.id =55;
  res.send(user)
})




app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})