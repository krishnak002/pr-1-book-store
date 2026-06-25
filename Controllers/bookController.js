import Book from "../models/book.models.js";

export const addBook = async (req,res) => {
    try {
        const book = await Book.create(req.body);
        res.status(200).json({message : "Book added sucessfully" , data : book});
        
    } catch (error) {
        
        res.status(500).json({message : error.message});
    }
}

export const allBooks = async (req,res)=> {
    try {
        const books = await Book.find();
        res.status(200).json({message: "All Books",data : books})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const searhBook =  async (req,res)=> {
    try {
        const books = await Book.find({
            title:{ 
                $regex: req.query.title,
                $options: "i"
            }
        })
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

export const deleteBook = async (req,res)=> {
    try {
        const book = await Book.findOneAndDelete({
            title: req.params.title
        });

        if(!book){
            return res.status(404).json({message : "Book Not Found"});
        }
        res.status(200).json({message: "Book Deleted", data : book})
        
    } catch (error) {
        res.status(400).json({message : error.message})
        
    }
}


export const editBook = async (req,res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true}
        )

        if (!book) {
            return res.status(404).json({message : "Book Not Found"})
        }

        res.status(200).json({message : "book updated successfully",data : book})
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}