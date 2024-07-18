const firstname = function (firstname){
   console.log(firstname)
};

const lastname = function (lastname){
    console.log(lastname);
};

firstname("node");
lastname("js");


//------------------------------------------
//1. Named function passed as a callback

function message(){
    console.log("This is normal node js function");
}
//setTimeout is a built-in Node.JS that accepts two argument callback function and time delay in execution in miliseconf
setTimeout(message, 2000);
setTimeout(message, 3000);


//Anonymous callback Function

const newmessage = () => {
    console.log("This is anonymous callback function ");
}

setTimeout(newmessage , 5000)

//--------------------inbuilt setTimeout function-------------------------
setTimeout(()=>{
    console.log("This is inbuilt setTimeout function")
}, 6000)


//---------------------setTimeout Function------------------
setTimeout(()=>{
    console.log("This Function will print after 7 second")
}, 7000)

console.log("This Function will print before setTimeout function print ")