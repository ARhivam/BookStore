import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16 mb-16">
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
                    Contact Us
                </h1>
                <p className="text-lg md:text-xl text-gray-700 text-center mb-12">
                    Have any questions or feedback? We’d love to hear from you! Reach out
                    to us using the form below or through our contact details.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Contact Form */}
                    <form className="bg-gray-100 p-8 rounded-md shadow-md">
                        <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">
                            Get in Touch
                        </h2>

                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-600 font-medium mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-600 font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-gray-600 font-medium mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Write your message"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Contact Information */}
                    <div className="text-lg text-gray-600 leading-relaxed">
                        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                        <p className="mb-4">
                            <strong>Email:</strong> support@yourwebsite.com
                        </p>
                        <p className="mb-4">
                            <strong>Phone:</strong> +1 (123) 456-7890
                        </p>
                        <p className="mb-4">
                            <strong>Address:</strong> 123 Book Lane, Literature City, World
                        </p>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-pink-500 hover:text-pink-700 duration-300"
                            >
                                Facebook
                            </a>
                            <a
                                href="#"
                                className="text-pink-500 hover:text-pink-700 duration-300"
                            >
                                Twitter
                            </a>
                            <a
                                href="#"
                                className="text-pink-500 hover:text-pink-700 duration-300"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
