const User = require("../models/Usermodel");

const { promisify } = require("util");


module.exports.uploadProfil = async (req,res) => {

  let path = `http://localhost:4000/uploads/${req.file.filename}`;
  
  
  
  try {
  const newUser = await User.findByIdAndUpdate(req.params.id,{avatar:path})
  console.log(newUser)
  return res.status(201).json(newUser);
} catch (err) {
  console.error(err)
  return res.status(400).send(err);
}

};
