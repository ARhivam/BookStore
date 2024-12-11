import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    title: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/books/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4001/books/${id}`, formData);
      alert("Book updated successfully!");
      navigate("/cms/books");
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-8">Edit Book</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Reuse fields like AddBook */}
      </form>
    </div>
  );
};

export default EditBook;
