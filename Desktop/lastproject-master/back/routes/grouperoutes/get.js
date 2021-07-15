var groupecontroller=require ('../../controllers/groupe.controllers')
var authmidllwares=require ('../../midllwares/auth/authmidllwares')


const initalizegrouperoute=(app)=>{
    app.get("/groupe/:groupeId",[authmidllwares,groupecontroller.getById])
   app.get ("/groupes",[authmidllwares,groupecontroller.list] )
   app.get("/groupe/groupeadmin/:adminId",[authmidllwares,groupecontroller.groupeadmin])
}
module.exports=initalizegrouperoute