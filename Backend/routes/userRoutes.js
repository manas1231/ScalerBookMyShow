const router=require("express").Router();
const {loginUser,registerUser, currentUser}=require("../controllers/userController");
const { validateJWTToken } = require("../middleware/authorizationMiddleware");


router.post("/login",loginUser)

router.post("/register",registerUser)

router.get("/getCurrentUser",validateJWTToken,currentUser)

module.exports=router;