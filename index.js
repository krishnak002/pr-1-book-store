import express from "express"
import db from "./configs/database.js"
import cookieParser from "cookie-parser";
import envConfig from "./configs/envConfig.js";
import dotenv from "dotenv"
import bookRoutes from "./Router/book.route.js"
import userRoutes from "./Router/user.route.js"


dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
const PORT = envConfig.PORT || 3000;
app.get('/', async (req,res) => {
    try {
        return res.json({message: "database connected" })
    } catch (error) {
        console.log(error.message);
        return res.json(error.message)
    }
})
app.use("/api",bookRoutes);
app.use("/api/user",userRoutes);

db;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    
}) 

