const express= require("express");
const bodyParser=require("body-parser");
const app= express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");

})



app.post("/",function(req,res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);

    res.send("Your output is:"+(n1+n2));
})
app.listen(5000,function(){
    console.log("server is running on port 5000");
})