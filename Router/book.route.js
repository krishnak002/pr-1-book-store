import express from "express";
import Book from "../models/book.models.js";
import { addBook, allBooks, deleteBook, editBook, searhBook } from "../Controllers/bookController.js";
import { validateBook } from "../middlewares/validation.js";

const router = express.Router();

router.post("/books",validateBook, addBook)

router.get("/books", allBooks )

router.get("/search", searhBook)

router.delete("/book/:title",deleteBook)

router.put("/books/:id", editBook)

export default router;