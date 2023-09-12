const Book = require("../models/bookmodel");

// addaBook, listAllBooks, updateAnAuthor, updateGenre, deleteaBook

async function addaBook(req, res) {
    console.log("The req bosy is:",req.body)
    try {
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            ISBN: req.body.ISBN
        })

        const successResponse = {
            message: "Book added",
            newBook: newBook
        };

        res.status(201).json(successResponse);

    } catch (error) {
        console.log(error);
        const errorResponse = {
            message: "Error Occurred",
            error: error
        };
        res.status(501).json(errorResponse);
    }
};

const listAllBooks = async(req,res) => {
    try {
        const listOfBooks = await Book.find({});

        const successResponse = {
            message: "Success",
            books: listOfBooks
        };
        res.status(200).json(successResponse);
    } catch (error) {
        console.log(error);
        const errorResponse = {
            message: "Error Occurred",
            error: error
        };
        res.status(501).json(errorResponse);    }
}

module.exports = {addaBook, listAllBooks}