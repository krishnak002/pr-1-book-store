import User from "../models/user.models.js";

// register function 

export const registerUser = async (req,res)=> {
    try {
        const {name,email,password} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(404).json({message : "User Already Exists"});
        }
        
        const user = await User.create({
            name,email,password
        });

        res.status(200).json({message: "Register sucessfully",user})
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

// Login Function 

export const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body;


        if(!email || !password){
            return res.status(400).json({
                message : "Email and password are Required"
            });
        }
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message : "user not Found"
            });
        }

        if (user.password !== password){
            return res.status(404).json({
                message : "Invalid Password"
            });
        }

        res.status(200).json({
            message : "Login Successfull", user
        });
    } catch (error) {
        res.status(400).json({message: error.message})
            
    }
}