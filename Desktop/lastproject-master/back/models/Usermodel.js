const mongoose=require('mongoose')

const UserSchema= new mongoose.Schema({
    firstname:String,
    lastname:String,
    phone:Number,
    email:{type:String,
      required:true},
    password:String,
    status: {
        type: Boolean,
        default: false,
      },
      permissionLevel: {
        type: Number,
        default: 1,
      },
      created_at: {
        type: Date,
        default: Date.now,
    },
    blocking: {
      type: Boolean,
      default: false,
    },
    bio:{
      type:String
    },
    avatar: {
      type: String,
      default:'./images/capserrat.jpg'
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
  }
);
module.exports=mongoose.model('User',UserSchema);

//--------------------------------------------------------

