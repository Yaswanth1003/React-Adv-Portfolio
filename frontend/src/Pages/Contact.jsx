import React, { useState } from "react";
import axios from "axios";
const Contact = () => {
  const Api_url = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${Api_url}/send`, formData);

      if (response.data.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div
      id="contact"
      className="mt-20 m-5 sm:m-10 border border-gray-800 p-3 sm:p-8 rounded-xl shadow bg-gradient-to-br from-zinc-800 via-gray-700/60 to-black"
    >
      <div className="text-white text-center">
        <p className="font-light text-lg">Contact</p>
        <h2 className="text-4xl mt-2 font-bold ">Let's Connect</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 shadow-xl border border-white/30 rounded-3xl p-3 sm:p-10 max-w-2xl mx-auto w-full space-y-6 "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 font-medium mb-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/20 text-white  "
            ></input>
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/20 text-white "
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 font-medium mb-1">
            Subject
          </label>
          <input
            name="subject"
            type="text"
            placeholder="Write a subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white/20 text-white "
          />
        </div>

        <div>
          <label className="block text-gray-300 font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 rounded-xl bg-white/20 text-white "
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-30 bg-blue-600  text-white font-semibold p-3 rounded-2xl "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
