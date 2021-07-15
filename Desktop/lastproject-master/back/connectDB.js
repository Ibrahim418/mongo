const mongoose =require('mongoose')
require('dotenv').config()
const connectDB=()=>{
    mongoose.connect(process.env.url,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false},(err)=>{
        if (err){
            throw err
        }
        console.log('database connected...')
    })
}


module.exports= connectDB ;