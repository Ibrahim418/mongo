const mongoose = require("mongoose");

const GroupeSchema = new mongoose.Schema({
  groupeAdmin: {
    type:mongoose.Types.ObjectId,
    ref:"User",
    required: true,
  },
  subvalid :{
    type:[{
      type:mongoose.Types.ObjectId,
      ref:"User"
     }],
    default:[],
    },
    subscribe:[String],
  users:[String],
  Name:{
    type:String,
    required:true
  } ,
   avatar: String,
  theme: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports=mongoose.model("Groupe", GroupeSchema);