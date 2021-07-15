var Groupe = require("../models/Groupe");
const GroupeModel = require("../models/GroupeModel");

//----------------create groupe ------------

exports.insert = (req, res) => {
  
  Groupe.createGroupe(req.body,req.userId).then((groupe) => {
    groupe != undefined ? res.status(201).send({ msg: "groupe created successfuly" }) : res.status(400).send({ msg: "invalid groupe" });
  });
};

//---------------getbyid-------

exports.getById = (req, res) => {
  Groupe.findById(req.params.groupeId)
    .then((groupe) => res.send(groupe))
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ msg: "Server Error" });
    });
};
//-------update--------------

exports.update = (req, res) => {
 Groupe.putgroupe(req.body,req.params.groupeId)
 .then(()=>{
    res.status(200).send([
        {
          msg: "groupe updated",
        },
      ]);
    })
    .catch(() =>
      res.status(404).send("groupe not found, retry with a valid groupeId.")
    );
};

//----------remove---------

exports.removeById = (req, res) => {
  Groupe.removeById(req.params.groupeId)

    .then(() => {
      res.status(200).send([
        {
          msg: "groupe deleted",
        },
      ]);
    })
    .catch(() =>
      res.status(404).send("groupe not found, retry with a valid groupeId.")
    );
};
 


//------------------------------
exports.list=(req,res)=>{
  Groupe.list(page)
  then(() => {
    res.status(200).send([
      {
        msg: "get groupes",
      },
    ]);
  })
  .catch(() =>
    res.status(404).send("groupe not found, retry with a valid groupeId.")
  );
}


exports.groupeadmin=(req,res)=>{

    Groupe.findBygroupeAdmin(req.params.adminId)

      .then((result) => {
        res.status(200).send({
          code: 200,
          status: "success",
          message: "groupeadmin fetched",
          data: result,
          //req: req.query,
        });
      })
      .catch((e) =>
        res
          .status(404)
          .send("groupeadmin not found, retry with a valid GroupeId.")
      );
  
}
//--------------------------



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

  if (req.query.name) {
    Groupe.findByName(req.query.name)
      .then((result) => {
        console.log(result);
        res.status(200).send({
          code: 200,
          status: "success",
          message: "groupe fetched",
          data: result,
          //req: req.query,
        });
      })
      .catch((e) =>
        res
          .status(404)
          .send("groupe not found, retry with a valid GroupeId.")
      );
  }

  if (req.query.groupeAdmin) {
    Groupe.findBygroupeAdmin(req.query.groupeAdmin)
      .then((result) => {
        res.status(200).send({
          code: 200,
          status: "success",
          message: "groupe fetched",
          data: result,
          //req: req.query,
        });
      })
      .catch((e) =>
        res
          .status(404)
          .send("groupe not found, retry with a valid GroupeId.")
      );
  }

  if (req.query.UsesrId) {
    Groupe.findByUserId(req.query.UsesrId)
      .then((result) => {
        res.status(200).send({
          code: 200,
          status: "success",
          message: "groupe fetched",
          data: result,
          //req: req.query,
        });
      })
      .catch((e) =>
        res
          .status(404)
          .send("groupe not found, retry with a valid GroupeId.")
      );
  }
  Groupe.list(page).then((result) => {
    res.status(200).send({
      code: 200,
      status: "success",
      message: "groupe fetched",
      data: result,
    });
  });
};


//-----------putsub-------------

exports.putsub = async (req, res) => {
   
  try {
    const groupe = await Groupe.findById(req.params.groupeId);
    if (!groupe) return res.status(404).json("Groupe not found")
    console.log(groupe.subvalid)
   
    const search = groupe.subvalid.find(sub=>sub == req.userId)
    
    if (!search) {
      console.log('true')
      const newgroupe = await GroupeModel.findByIdAndUpdate(req.params.groupeId,{ subvalid:[...groupe.subvalid,req.userId]});
      res.status(200).json(newgroupe.subvalid);
    } 
    else {
      console.log('false')
      const newgroupe = await GroupeModel.findByIdAndUpdate(req.params.groupeId,{ $pull: { subvalid: req.userId}});
      // await groupe.updateOne({ $pull: { subvalid: req.userId } });
      res.status(200).json(newgroupe.subvalid);
    }
   
  } catch (err) {
    res.status(500).json(err); 
  }
};

//----------addtogroupe-------------+



exports.addtogroupe=async(req,res)=>{
  try {
    const groupe = await Groupe.findById(req.params.groupeId);
    if (!groupe) return res.status(404).json("Groupe not found")
      const firstgroupe = await GroupeModel.findByIdAndUpdate(req.params.groupeId,{ $push:{subscribe:req.params.subId}});
       const newgroupe = await GroupeModel.findByIdAndUpdate(req.params.groupeId,{ $pull:{subvalid:req.params.subId}});
      res.status(200).json(newgroupe.subscribe);
      console.log(newgroupe.subscribe)
     
    
   
  } catch (err) {
    res.status(500).json(err); 
  }
}
//------------------reject-------


exports.reject=async(req,res)=>{
  try {
    const groupe = await Groupe.findById(req.params.groupeId);
    if (!groupe) return res.status(404).json("Groupe not found")
  
   
    
    const newgroupe = await GroupeModel.findByIdAndUpdate(req.params.groupeId,{ $pull: { subvalid: req.params.subId}});
     
      res.status(200).json(newgroupe.subvalid);
   
   
  } catch (err) {
    res.status(500).json(err); 
  }
}