import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-8">CMS Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link
          to="/cms/books"
          className="bg-blue-500 text-white p-6 rounded-md hover:bg-blue-700"
        >
          Manage Books
        </Link>
        <Link
          to="/cms/users"
          className="bg-green-500 text-white p-6 rounded-md hover:bg-green-700"
        >
          Manage Users
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
