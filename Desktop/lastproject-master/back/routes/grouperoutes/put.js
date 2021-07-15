var groupecontroller = require("../../controllers/groupe.controllers");
const authmidllwares = require("../../midllwares/auth/authmidllwares");

const initializePutRoutes = (app) => {
  app.put("/groupe/:groupeId", [authmidllwares, groupecontroller.update]);
  app.put("/putsub/:groupeId",[authmidllwares,groupecontroller.putsub])
  app.put("/addtogroupe/:groupeId/:subId",[authmidllwares,groupecontroller.addtogroupe])
  app.put("/reject/:groupeId/:subId",[authmidllwares,groupecontroller.reject])
};

module.exports = initializePutRoutes;
