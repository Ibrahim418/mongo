var userscontroller = require("../../controllers/users.controllers");
var authmidllwares = require("../../midllwares/auth/authmidllwares");
var permission =require ('../../midllwares/permission/permission-midllwares')
const initializePutRoutes = (app) => {
  app.put("/users/:userId", [authmidllwares, userscontroller.update]);
  app.put("/user/follow/:id",[authmidllwares,userscontroller.follow]);
  app.put("/user/unfollow/:id",[authmidllwares,userscontroller.unfollow])

};

module.exports = initializePutRoutes;
