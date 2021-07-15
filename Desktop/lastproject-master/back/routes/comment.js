const express = require ('express')
const router = express.Router();
const {Comment} = require ('../models/Comment')



router.post("/saveComment",(req,res)=>{
    const {postId,writer,content} = req.body
    const newComment = new Comment ({
        postId,
        writer, 
        content
    })
    newComment.save()
    .then(comment=>res.status(200).json(comment))
    .catch((err)=> res.status(500).json({error:err}))
    })


router.get("/getComments/:postId",(req,res)=>{
    console.log(req.params.postId)
    Comment.find({postId:req.params.postId})
  .populate('writer')
.populate('postId') 
    .then(comments=>res.status(200).json(comments))
    .catch ((err)=>res.status(500).json({error:err}))
    
})
router.delete("/removecomment/:id",(req,res)=>{
    Comment.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.status(200).json({msg:"comment remove"})
    })
    .catch(()=>{
        res.status(404).json("comment not found")
    })
})

router.put("/updatecomment/:id",(req,res)=>{
    Comment.findByIdAndUpdate(req.params.id,req.body)
    .then(()=>{
        res.status(200).json({msg:"comment updated"})
    })
    .catch(()=>{
        res.status(404).json("comment not found")
    })
})
module.exports=router