import express from "express";
import { getBooks, searchBooks } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBooks); // Route to fetch all books
router.get("/search", searchBooks); // Route to search books

export default router;
