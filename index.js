
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const categories = require('./data/categoriex.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('express is running')
})

app.get ('/categories', (req, res) =>{
    res.send(categories);
})

app.listen(port, () =>{
  console.log('welcome to my express network')  
})