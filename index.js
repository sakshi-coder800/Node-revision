
// global modules and core modules in node js 
// console.log("global module because  you don't want to install it again");




// core modules like http,fs,os 
// const files= require("fs");
// files.writeFileSync("Sakshi.txt","hello another example of core modules")



// create server 
// const http =require("http");
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write("Hello Sakshi Maheshwari");
//     res.write(JSON.stringify({name :"sakshi",age :24}));
//     res.end()
// }).listen(8080);






// import data from ""data.js"" file using nodejs 


// create server 
const http= require("http");
const data= require("./data");

http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type' : 'application\json'});
res.write(JSON.stringify(data));
res.end();
}).listen(5000)





