import { body } from "express-validator";

export const validateUser = (req,res,next) => {
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            success : false,
            message :"All fields are requied by user",
        });
    }
    
    if(password.length < 8){
        return res.status(400).json({
            success : false,
            message : "password must contain atleast 8 characters"
        });
    }
    next();
}

export const validateBook = (req,res,next) => {
    const {title,author,price,category} = req.body;

    if(!title || !author || !price || !category){
        return res.status(400).json({
            success : false,
            message : "All fields are required "
        });
    }

    if(price < 0){
        return res.status(400).json({
            success : false,
            message : "Price must be greater than 0"
        });
    }
    next();
}