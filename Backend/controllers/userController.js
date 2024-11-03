const userModel=require("../models/userSchema")

const registerUser= async(req,res)=>{
    try{
        const userExists=await userModel.findOne({email:req?.body?.email})
        if(userExists){
            return res.send({
                success:false,
                message:"User already Exists"
            });
        }
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
        if(req?.body?.password!==userExists?.password){
            return res.send({
                success:false,
                message:"Please enter valid password"
            })
        }
        res.send({
            success:true,
            message:"Please enter valid password"
        })
    }catch(error){
        console.log(error);
    }
}

module.exports={
    registerUser,
    loginUser
};