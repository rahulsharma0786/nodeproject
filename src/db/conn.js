const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/mearn",{

useNewUrlParser:true,
useUnifiedTopology:true

}).then(()=>{
console.log("connected")    
}).catch((e)=>{
console.log("not connected") 
})




















