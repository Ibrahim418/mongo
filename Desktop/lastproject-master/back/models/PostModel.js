const Post =require('./Post')

const User=require("./Usermodel")
//-----------------------------------


exports.createPost = async (req, res) => {
    let myBody = JSON.parse(req.body.data)
    let path = `http://localhost:4000/uploads/${req.file.filename}`;
  
    const newPost = new Post({
      title: myBody.title,
      discription:myBody.discription,
      picture: path,
      likers: [],
      comments: [],
     owner:myBody.owner,
     groupe:myBody.groupe
    });
  
    try {
      const post = await newPost.save();
      return res.status(201).json(post);
    } catch (err) {
      console.error(err)
      return res.status(400).send(err);
    }
    
  };
  
  
    //--------------------------------------------------
  
  
    exports.findById = (id) => {
      return Post.findById(id).then((result) => {
        result = result.toJSON();
        // delete result._id;
        delete result.__v;
        return result;
      });
    };
    
  
  //-----------------------------------
  
  exports.findByTitle = (title) => {
      return new Promise((resolve, reject) => {
        Post.find({ title: title }).exec( (err, post)=> {
          if (err) {
            reject(err);
          } else {
            resolve(post);
          }
        });
      });
    };
  //------updatepost--------------
  
  exports.putPost=(id,postData)=>{
    return new Promise((resolve,reject)=>{
      Post.findById(id,(err,post)=>{
        if (err) reject(err);
        else{
          for (let i in postData){
            post[i]=postData[i];
          }
          post.save((err,updatePost)=>{
            if (err) return reject (err);
            resolve(updatePost)
          })
        }
      })
    })
  }
  
  
  //----------------remove----------------------------
  exports.removeById = (postId) => {
      return new Promise((resolve, reject) => {
        Post.deleteOne({ _id: postId }, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(err);
          }
        });
      });
    };
    
  
  // get all posts
  
  exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
      Post.find().populate('owner')
        .limit(perPage)
        .skip(perPage * page)
        .exec(function (err, posts) {
          if (err) {
            reject(err);
          } else {
            resolve(posts);
          }
        });
    });
  };
  
  //--------------------
  
  
  
  
  
  //-------------------
  
// 
  
  //--------------------
  
  
  // exports.putlike=(req,res,id)=>{
  //   return new Promise((resolve,reject)=>{
  //     Post.findById(id,(err,post)=>{
  //       if (err) reject (err);
  //       else {
  //         if (!post.likers.includes(req.body.userId)){
  //           post.updateOne({$push:{ like: req.body.userId }})
  //          res.status(200).json("like post benn liked");
  
  //         }
  //         else{
  //           post.updateOne({ $pull: { like: req.body.userId } });
  //           res.status(200).json("like post benn disliked");
  //         }
  //         post.save()
  //       } 
  
  
        
  //     })
  //   })
  // }
  
  
  
//   module.exports.likePost = async (req, res) => {
    
  
//     try {
//       await Post.findByIdAndUpdate(
//         req.params.postId,
//         {
//           $addToSet: { likers: req.body.id },
//         },
//         { new: true },
//         (err, docs) => {
//           if (err) return res.status(400).send(err);
//         }
//       );
     
//       await User.findByIdAndUpdate(
//         req.body.userId,
//         {
//           $addToSet: { likes: req.params.id },
//         },
//         { new: true },
//         (err, docs) => {
//           if (!err) res.send(docs);
//           else return res.status(400).send(err);
//         }
//       );
//     } catch (err) {
//       return res.status(400).send(err);
//     }
//   };