import mongoose from "mongoose";

const bookschema = new mongoose.Schema({
    title : {type : String , required : true},
    author : {type : String , required : true},
    price : {type : Number , required : true},
    category : {type : String , required : true}
})

const Book = mongoose.model('book',bookschema);

export default Book;