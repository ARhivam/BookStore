import Book from "../model/book.model.js";

// Get all books
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

// Search books
export const searchBooks = async (req, res) => {
    try {
        const { query } = req.query; // Extract search query from URL parameters
        if (!query) {
            return res.status(400).json({ message: "Search query is required" });
        }

        const books = await Book.find({
            $or: [
                { name: { $regex: query, $options: "i" } }, // Case-insensitive match
                { category: { $regex: query, $options: "i" } },
                { title: { $regex: query, $options: "i" } },
            ],
        });

        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};
