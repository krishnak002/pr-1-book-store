import { body } from "express-validator";

export const validateUser = [
    body("name")
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .isEmail()
        .withMessage("Valid email is required"),

    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must contain at least 8 characters"),
];


export const validateBook = [
    body("title")
        .notEmpty()
        .withMessage("Title is required"),

    body("author")
        .notEmpty()
        .withMessage("Author is required"),

    body("price")
        .isFloat({ min: 0 })
        .withMessage("Price must be greater than 0"),

    body("category")
        .notEmpty()
        .withMessage("Category is required"),
];