const {Router} = require("express");
const bookRouter = Router();

const Book = require("../models/bookmodel");

const {addaBook, listAllBooks, updateAnAuthor, updateGenre, deleteaBook} = require ("../controllers/controllers");

bookRouter.post("/books/addaBook", addaBook);
bookRouter.get("/books/listAllBooks", listAllBooks);
// bookRouter.put("/books/updateAnAuthor", updateAnAuthor);
// bookRouter.put("/books/updateGenre", updateGenre);
// bookRouter.delete("/books/deleteaBook", deleteaBook);

module.exports = bookRouter;