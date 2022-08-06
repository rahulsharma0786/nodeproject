const express=require("express")
const mongoose=require("mongoose")
const app=express()
const path=require("path")
const hbs=require("hbs")
const user=require("./models/registers")

const DB="mongodb+srv://java:kumars@cluster0.vduacgr.mongodb.net/myapp?retryWrites=true&w=majority"
mongoose.connect(DB,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(()=>{
console.log("conn sucess")
}).catch((err)=>console.log("no conn"))
//require("../src/db/conn")

const port=process.env.PORT || 3000;
const static_path=path.join(__dirname, "../public")
const staticpath=path.join(__dirname,"../templates/views")
const regPath=path.join(__dirname,"../templates/partials")

//console.log(__dirname,"../templates/views")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path))
app.set("view engine","hbs")
app.set("views",staticpath)
hbs.registerPartials(regPath)

app.get("/",(req,res)=>{
res.render("login")
})

app.get("/register",(req,res)=>{
 res.render("register") 
})
app.get("/login",(req,res)=>{
  res.render("login") 
 })

app.post("/register",async(req,res)=>{
try{
const password=req.body.password;
const cpassword=req.body.cpassword;

if(password===cpassword){
const registeremp=new user({
  firstname:req.body.firstname,
  lastname:req.body.lastname,
  email:req.body.email,
  gender:req.body.gender,
  phone:req.body.phone,
  age:req.body.age,
  password:password,
  cpassword:cpassword

})
const registerd= await registeremp.save()
res.status(201).render("login")
}else{
  res.send("pass are note matching")
}

}catch(error){
res.status(400).send(error)
}

 })

 app.post("/login",async(req,res)=>{
try{
const email=req.body.email
const password=req.body.password

const useremail=await user.findOne({email:email})
console.log(useremail)
if(useremail.password===password){
res.status(201).render("index")
}else{
res.send("pass are not match")

}
}catch(error){
res.status(400).render("invalid email")
  
}
 })

app.listen(port,()=>{
  console.log("conn is stabsied")
})