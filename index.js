const fs = require ('fs');

fs.readFile('data.txt' ,(err , data) =>{
    if(err) throw err;
    else
    console.log(`data in data.txt file : ${data}`)
    console.log("data in data.txt file : " + data)
})