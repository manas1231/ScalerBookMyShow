const userModel=require("../models/userSchema")
const bcrypt=require("bcrypt");//Used for password hashing 
const jwt=require("jsonwebtoken");
const registerUser= async(req,res)=>{
    try{
        const userExists=await userModel.findOne({email:req?.body?.email})
        if(userExists){
            return res.send({
                success:false,
                message:"User already Exists"
            });
        }
        //creating salt
        const salt=await bcrypt.genSalt(10);
        //Can generally create salt upto 2^10 characters.More the characters more time it takes
        const hashedPasword=await bcrypt.hash(req?.body?.password,salt);
        req.body.password=hashedPasword
        const newUser=new userModel(req?.body);
        await newUser.save();
        res.send({
            success:true,
            message:"Registration Successful.Please Login"
        })
    }catch(error)
    {
        console.log(error)
    }
}



const loginUser=async(req,res)=>{
    try{
        const userExists=await userModel.findOne({email:req?.body?.email})
        if(!userExists){
            return res.send({
                success:false,
                message:"User does not exist.Please Register"
            });
        }
        const validatePassword=await bcrypt.compare(req?.body?.password,userExists.password)
        if(!validatePassword){
            return res.send({
                success:false,
                message:"Please enter valid password"
            })
        }
        const token=jwt.sign({userId: userExists._id},process.env.SECRET_KEY,{
            expiresIn:"1d",
        });
        res.send({
            success:true,
            message:"You have successfully logged in",
            data:token
        })
    }catch(error){
        console.log(error);
    }
}

const currentUser=async (req,res)=>{
    try {
        const user = await userModel.findById(req.body.userId).select("-password");
        res.send({
          success: true,
          message: "User Details Fetched Successfully",
          data: user,
        });
      } catch (error) {
        res.send({
          success: false,
          message: error.message,
        });
      }
}
module.exports={
    registerUser,
    loginUser,
    currentUser
};