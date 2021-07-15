const Groupe=require('./GroupeModel')
const User=require('./Usermodel')
//----------------------------------------------

exports.createGroupe = (groupeData,userId) => {
  const groupe = new Groupe({...groupeData,groupeAdmin:userId});
  return groupe.save().catch((e) => console.log(e.message));
};

//--------------------------------------------

exports.findById = (id) => {
  return Groupe.findById(id).then((result) => {
    result = result.toJSON();
    
    delete result.__v;
    return result;
  });
};

//--------------------------------------

exports.findByName = (name) => {
  return new Promise((resolve, reject) => {
    Groupe.find({ name: name }).exec((err, groupe) => {
      if (err) {
        reject(err);
      } else {
        resolve(groupe);
      }
    });
  });
};
//--------findbyadmin


exports.findBygroupeAdmin = (groupeAdmin) => {
  return new Promise((resolve, reject) => {
    Groupe.find({ groupeAdmin: groupeAdmin }).populate("subvalid")
    .exec(function (err, groupe) {
      if (err) {
        reject(err);
      } else {
        resolve(groupe);
      }
    });
  });
};

//----------findbyuserid-------------------

exports.findByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    Groupe.find({ userId: userId }).exec((err, groupe) => {
      if (err) {
        reject(err);
      } else {
        resolve(groupe);
      }
    });
  });
};

//-----------------remove--------------------------
exports.removeById = (groupeId) => {
  return new Promise((resolve, reject) => {
    Groupe.deleteOne({ _id: groupeId }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(err);
      }
    });
  });
};

//------------------update----

exports.putgroupe = (groupetData, id) => {
  return new Promise((resolve, reject) => {
    Groupe.findByIdAndUpdate((err, groupetData) => {
      if (err) {
        reject(err);
      } else {
        console.log(groupetData);
        resolve(groupetData);
      }
    });
  });
};


//-----------fetching---------------------

exports.list = (perPage, page) => {
  return new Promise((resolve, reject) => {
    Groupe.find()
      .limit(perPage)
      .skip(perPage * page)
      .exec(function (err, groupe) {
        if (err) {
          reject(err);
        } else {
          resolve(groupe);
        }
      });
  });
};