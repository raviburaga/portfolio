import React, { useState } from 'react';

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
    // Send form data to email
    fetch('https://api.example.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <section id="contact" className="bg-gray-900 py-16">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/2 text-white pr-4 p-2">
          <h2 className="text-5xl font-extrabold mb-4">Contact Form</h2>
          <p className="text-lg mb-8">Feel free to reach out and tell us your reason to contact.</p>
          
        </div>
        <div className="w-1/2 p-2">
        <form onSubmit={handleSubmit} className="max-w-screen-md mx-auto">
            <div className="flex flex-col mb-4 lg:flex-row lg:space-x-4">
              <div className="flex-grow">
                <label htmlFor="name" className="block text-sm font-semibold text-white">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 mt-1 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex-grow">
                <label htmlFor="email" className="block text-sm font-semibold text-white">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 mt-1 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="reason" className="block text-sm font-semibold text-white">Reason to Contact:</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Reason to Contact"
                className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 mt-1 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
