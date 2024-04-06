
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
// const http= require("http");
// const data= require("./data");

// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-Type' : 'application\json'});
// res.write(JSON.stringify(data));
// res.end();
// }).listen(5000)





// // input from command line  
// const fs= require("fs");
// const { argv } = require("process");
// // fs.writeFileSync("sakshi.txt ", "hello sakshi")
// // console.log(process.argv)

// // create file using output  
// fs.writeFileSync(argv[2],argv[3]) // 2nd argv value take as a file name and 3rd take as a file content






// // show file listing
// const fs= require("fs");
// const path= require("path");
// const dirpath= path.join(__dirname, "curd file");

// console.log(path.join(__dirname)) // they return the directory name

// const fileName= `${dirpath}/text.html`;
// fs.writeFileSync( fileName, "sakshdifasf xsd f g g g g g g") // create file inside the curd folder



// create 5 files inside ""curd file folder ""


// const fs= require("fs");
// const path= require("path");
// const dirpath= path.join(__dirname, "curd file");
// for( var i=1;i<11 ;i++){
//     fs.writeFileSync(`${dirpath}/index ${i}.txt`, `File number ${i}`)
// }



















// CURD With file system 

// const fs= require("fs");
// const path= require("path"); 
// create a file
// fs.writeFileSync("filename,txt","file content")


// const filePath= "filename.txt"
// // read a file
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })


// append file  (update file)
// fs.appendFile("filename.txt","new data for add inside the file",(err,item)=>{
// if(!err)  {console.log("file is updated")}
// })


// delete file 
// fs.unlinkSync("filename.txt")























































// create server  using express

const express=require("express");


const app=express();


app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/about",(req,res)=>{
    res.send("hello world :about page")
})

app.listen(8080,(req,res)=>{
    console.log("Server  running on port 8080")
})