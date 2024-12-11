import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4001/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-8">Manage Books</h1>
      <Link
        to="/cms/add-book"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add New Book
      </Link>
      <table className="table-auto w-full mt-8 border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td className="border px-4 py-2">{book.name}</td>
              <td className="border px-4 py-2">${book.price}</td>
              <td className="border px-4 py-2">{book.category}</td>
              <td className="border px-4 py-2">
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="border px-4 py-2">{book.title}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/cms/edit-book/${book._id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>{" "}
                |{" "}
                <button
                  onClick={() => console.log("Delete functionality here")}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
