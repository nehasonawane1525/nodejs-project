const express = require('express')
const app = express();

const port = 3000

app.get('/' , (req, res)=>{
    res.send("Hello")
});

app.post('/hello' , (req, res)=>{
    res.send("Hello world")
});

app.put('/hello', (re, res) =>{
    res.send("Hello1")
})
app.get('/hello', (req, res)=>{
    res.send("Hi")
})
app.get('/status', (request, response) => {
    const status = { 'Status': 'Running' };
    response.send(status);
 });

 app.put('/status', (req , res) =>{
    const status = {"Status" : "stopped"};
    res.send(status);
 })

 app.listen(port , ()=> {
    console.log(`App is listening on port ${port}`)
});