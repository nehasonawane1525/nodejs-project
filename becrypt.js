const hash = require('bcrypt');
const saltRounds = 2;
const pass = "password";


hash.genSalt(saltRounds, (err, result)=>{
    if (err) throw error;
    else{
        console.log("your encrypted password is :" + result)
    }
});