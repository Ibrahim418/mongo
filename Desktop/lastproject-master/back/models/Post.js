const mongoose=require('mongoose');
const { promisify } = require("util");




const Postschema= new mongoose.Schema({
    owner:{
     type:mongoose.Types.ObjectId,
     ref:"User"
    },
    title:String,
    discription:String,
    picture: {
      type: String,
    },
    created_at:{
        type:Date,
        default:Date.now
    },
groupe:{
  type:mongoose.Types.ObjectId,
  ref:"Groupe"
},
    likers:{
      type:[{
        type:mongoose.Types.ObjectId,
        ref:"User"
       }],
      default:[],
      },
  
    comments: {
      owner:{
        type:mongoose.Types.ObjectId,
        ref:"User"
       },
      type: [
        {
          commenterId:String,
          text: String,
          timestamp: Number,
        }
      ],
      required: true,
    },
    
},

);
module.exports=mongoose.model("Post",Postschema);


