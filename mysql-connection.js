const mysql = require('mysql2')

const connection = mysql.createConnection({
   // host: process.env.HOST,
   // user: process.env.USER,
   // password: process.env.PASSWORD
   host: 'localhost',
   user: 'nodedbuser',
   password: 'password'
});

connection.connect((err)=> {
    if (err){
        console.log("Connection failed");
    }
    else{
        console.log("Connected Sucessfully");
    }
});

connection.query('drop database Node;' , (err , result) =>{
    if (err) throw err;
    else{
        console.log('Database created successfully');
    }

}
);