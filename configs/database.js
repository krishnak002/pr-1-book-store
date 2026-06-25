import mongoose from "mongoose"

const db = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/bookStore');
        console.log("database connected");
        
    } catch (error) {
        console.log(error.message);        
    }
}

export default db();