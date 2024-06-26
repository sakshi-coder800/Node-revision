
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

// const express=require("express");


// const app=express();


// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

// app.get("/about",(req,res)=>{
//     res.send("hello world :about page")
// })

// app.listen(8080,(req,res)=>{
//     console.log("Server  running on port 8080")
// })



//  make first html page 
//  const express = require("express");
// const path = require("path");

// const app = express();

// // Define the directory containing your static files
// const staticDir = path.join(__dirname, "html");

// // Serve static files from the specified directory
// app.use(express.static(staticDir));

// // Start the server on port 8080
// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });






// 404 error page ,Reemove extension from URL

// //  make first html page 
// const express = require("express");
// const path = require("path");

// const app = express();

// // Define the directory containing your static files
// const staticDir = path.join(__dirname, "html");

// // Serve static files from the specified directory
// app.use(express.static(staticDir));

// // Start the server on port 8080
// app.get("/",(req,res)=>{
//     res.sendFile(`${staticDir}/index.html`)
// })
// app.get("/about",(req,res)=>{
//     res.sendFile(`${staticDir}/about.html`)
// })

// app.get("*",(req,res)=>{
//     res.send("Error page ")
// })


// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// // app.listen(8080,(req,res)=>{
// //     console.log("Server  running on port 8080")
// // })











//  // ejs template engine 
// const express = require("express");
// const path = require("path");

// const filepath= path.join(__dirname,"views")
// console.log(filepath)
// const fileName= `${filepath}/demo`

// const app= express();


// app.set('view engine','ejs'); //Sets EJS as the view engine for your application.
//  app.get("/",(req,res)=>{


//     const user={
//         name :"Sakshi", age :20, skills : [1,3,2,4,5,6,4,6,4]
//     }
//     res.render('demo', {user});
//  })
//  const PORT=8080
//  app.listen(PORT,()=>{
//     console.log("running on port")
//  })







// // middleware example
//  const express = require("express");
//  const path = require("path");
 
//  const app= express();
 
// // application level middlewaare
// const reqFilter= ((req,res,next,)=>{
//     console.log("middleware calling");
//     next();
// })

// app.use(reqFilter); // application level middleware 

// app.get("/",(req,res)=>{
// res.send("application level middleware") 
// })

// const PORT=8080
//   app.listen(PORT,()=>{
//      console.log("running on port")
//   })
 
 
 
 
 






// // Router level middleware example
// const express = require("express");
// const path = require("path");
// const  reqFilter  = require("./router_level_middleware");

// const app= express();

// app.get("/ageuser",reqFilter,(req,res)=>{
// res.send("application level middleware") 
// }) // functional level middleware

// const PORT=8080
//  app.listen(PORT,()=>{
//     console.log("running on port")
//  })




















// // mongodb use for create Curd and use database with node js 
// const express = require("express");
// const {MongoClient } = require("mongodb");
// const url="mongodb://localhost:27017/";
// const dbName= "node-curd"
// const mongodb= new MongoClient(url);


//  async function  connectDatabase(){
   
    
//     const connetion= await mongodb.connect();
//     console.log("connected to database");
//  }
//  connectDatabase()

// const app= express();


// const PORT=8080
//  app.listen(PORT,()=>{
//     console.log("running on port")
//  })





// mongodb use for create Curd and use database with node js 
// curd with "mongodb"
const express = require("express");
const {MongoClient} = require("mongodb")

const url='mongodb://localhost:27017/';
const dbName= "curd-node-mongodb";

const client= new MongoClient(url)

// // read data --------------------------------
// async function  getData(){
//    const result = await client.connect();
//    // console.log("connected success");
//    const db= result.db(dbName)
//    let collection= db.collection("Products");
//    const response=  await collection.find({ }).toArray();
//    console.log("response",response)
//    }
//    getData();
   
   // insert data --------------------------------
   // async function insertData(){
      // const result= await client.connect();
      // const db=result.db(dbName);
      // const collection= db.collection("Products");
      // const response = await collection.insertOne({name :"Saksadas"});
      // console.log(response)
      // }
      // insertData()
   

      // update data --------------------------------

// async function updateData(){
//       const result= await client.connect();
//       const db=result.db(dbName);
//       const collection= db.collection("Products");
//       const response = await collection.updateMany({name :"Saksadas"}, {$set : {
//          name :"sasadkf f f f "
//       }}
//    );
//       console.log(response)
//       }
//       updateData()

// delete data  ------------------------
async function deleteData(){
   const result= await client.connect();
   const db=result.db(dbName);
   const collection= db.collection("Products");
   const response = (await collection.deleteOne({name :"sasa"})).deletedCount;
   console.log(response)
   }
   deleteData()
