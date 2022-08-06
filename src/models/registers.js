const mongoose=require("mongoose")

const employeeSchema=new mongoose.Schema({

    firstname:{
        type:String,
        required:true
      
       },
       lastname:{
          type:String,
          required:true
      },
      email:{
          type:String,
          required:true,
          unique:true
      },
      gender:{
          type:String,
          required:true
      },
      phone:{
          type:String,
          required:true,
          unique:true
      },
      age:{
          type:String,
          required:true,
      },
      password:{
          type:String,
          required:true,
         
      },
      cpassword:{
          type:String,
          required:true,
         
      },
      
      })
      
const user= new mongoose.model("user",employeeSchema)
module.exports=user;





