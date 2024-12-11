import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16 mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-700 text-center mb-12">
          Welcome to our platform! Here, you can explore a wide collection of
          books across various genres. Enjoy reading selected books for free or
          dive deeper into premium content by purchasing our paid books.
          Whether you're a casual reader or a book enthusiast, we've got
          something special for everyone!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-lg text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              We aim to make books accessible to everyone by offering a
              collection that caters to both free readers and those looking for
              exclusive paid content. Reading is a gateway to endless knowledge
              and imagination, and we are here to open those doors for you.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose Us?</h2>
            <p>
              Our platform is user-friendly, with carefully curated content to
              ensure an exceptional reading experience. Join our growing
              community and discover your next favorite book today!
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Books illustration"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
