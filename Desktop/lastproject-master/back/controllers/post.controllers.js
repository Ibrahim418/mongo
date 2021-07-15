const PostModel= require("../models/PostModel");

const UserModel = require("../models/Usermodel");
const { validationResult } = require("express-validator");
const Post=require ("../models/Post")
const User=require("../models/Usermodel")




//----------------------------------------------------------
exports.insert = async (req, res) => {
  PostModel.createPost(req,res).then((result) => {

  //  return result != undefined
  //     ? res.status(201).json({
  //         code: 201,
  //         status: "success",
  //         message: "post created successfuly",

  //         data: result,
  //       })
  //     : res.status(400).json({
  //         code: 400,
  //         status: "error",
  //         message: "Invalid post object",
  //       });
    
  });
};


//------------------getpost-------------



exports.getpost = (req, res) => {
  PostModel.findById(req.params.postId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.status(404).send("post not found, retry with a valid postId.")
    );
};

//------------------mypost-----------

exports.getmypost = (req, res) => {
  UserModel.findById({ owner: req.userId })
    .then((posts) => res.send(posts))
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ msg: "Server Error" });
    });
};

//-------------delete---------+

exports.removeById = (req, res) => {
  PostModel.removeById(req.params.postId)

    .then(() => {
      res.status(200).send([
        {
          msg: "post deleted",
        },
      ]);
    })
    .catch(() =>
      res.status(404).send("post not found, retry with a valid postId.")
    );
};

//---------update-----------------


exports.putpost = (req, res) => {
  let myBody=JSON.parse(req.body.data)
  let path = `http://localhost:4000/uploads/${req.file.filename}`;
  PostModel.putPost(req.params.postId,{...myBody,picture:path})
    .then((result) => {
      res.status(200).send({
        code: 200,
        status: "success",
        message: "post updated",
        data: result,
      });
    })
    .catch(() =>
      res.status(404).send("post not found, retry with a valid postId.")
    );
};

//--------like/dislike---------------

exports.putlikepost = async (req, res) => {
   
    try {
      const post = await PostModel.findById(req.params.postId);
      if (!post) return res.status(404).json("Post not found")
      console.log(post.likers)
      console.log(req.userId)
      const search = post.likers.find(like=>like == req.userId)
      
      if (!search) {
        console.log('true')
        const newPost = await Post.findByIdAndUpdate(req.params.postId,{ likers:[...post.likers,req.userId]});
        res.status(200).json(newPost.likers);
      } 
      else {
        console.log('false')
        const newPost = await Post.findByIdAndUpdate(req.params.postId,{ $pull: { likers: req.userId}});
        // await post.updateOne({ $pull: { likers: req.userId } });
        res.status(200).json(newPost.likers);
      }
     
    } catch (err) {
      res.status(500).json(err); 
    }
  };



//------mostlikedpost----------------------------

exports.mostliked = async (req, res) => {
  try {
    let posts = await Post.find().sort({ likes: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server Error...");
  }
};

//----------------------getlist----------------
exports.list = (req, res) => {
  // let limit =
  //   req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
  let page = 0;
  if (req.query) {
    if (req.query.page) {
      req.query.page = parseInt(req.query.page);
      page = Number.isInteger(req.query.page) ? req.query.page : 0;
    }
  }
  PostModel.list(page).then((result) => {
    res.status(200).json(result);
  });
};

//-----------------getpostbydate-------------
exports.getpostbydate = async (req, res) => {
  try {
    let posts = await Post.find().sort({ created_at: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server Error...");
  }
};



//--------addcomment----------------

// exports.aadComment = async (req, res) => {
//   try {
//     let post = await PostModel.findById(req.params.post_id);
//     let user = await UserModel.findById(req.user.id).select("-password");

//     const { textOfTheComment } = req.body;
//     const errors = validationResult(req);
//     if (!errors.isEmpty())
//       return res.status(400).json({ errors: errors.array() });

//     if (!user) return res.status(404).json("User not found");

//     if (!post) return res.status(404).json("Post not found");

//     let newComment = {
//       textOfTheComment,
//       name: user.firstname,
//       avatar: user.avatar,
//     };
//     post.comments.unshift(newComment);

//     await post.save();

//     res.json("Comment is added");
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json("Server Error...");
//   }
// };

//------getmostpostcommented-----------------------------

// exports.mostcommented = async (req, res) => {
//   try {
//     let posts = await PostModel.find().sort({ comments: -1 });
//     res.json(posts);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json("Server Error...");
//   }
// };

//-----------removecomment--------------------------------

// exports.removecomment = async (req, res) => {
//   try {
//     let post = await PostModel.findById(req.params.post_id);

//     if (!post) return res.status(404).json("Post not found");

//     const removeCommentFromComments = post.comments.filter(
//       (comment) => comment._id.toString() !== req.params.comment_id
//     );

//     post.comments = removeCommentFromComments;

//     await post.save();

//     res.json(post);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json("Server Error...");
//   }
// };

//-------------------------------------------------------------------
