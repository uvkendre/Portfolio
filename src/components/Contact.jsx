import React, { useState } from 'react';

function Contact() {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div
      id="contact"
      className="w-full h-screen bg-black flex flex-col justify-center items-center text-center py-16 px-4"
    >
      <h2 className="text-4xl font-bold text-purple-400 mb-6">Let's Connect!</h2>
      <p className="text-lg px-4">
        Reach out to discuss exciting opportunities or just say hello.
      </p>
      <form
        action="https://getform.io/f/aolgxpdb" // Getform endpoint for handling form submission
        method="POST"
        className="w-full max-w-md mt-6"
      >
        <input
          type="text"
          name="name" // Name input field
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state on change
          className="mb-4 p-2 w-full bg-gray-800 text-white border border-purple-400 rounded"
          required
        />
        <input
          type="email"
          name="email" // Email input field
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
          className="mb-4 p-2 w-full bg-gray-800 text-white border border-purple-400 rounded"
          required
        />
        <input
          type="tel"
          name="mobile" // Mobile number input field
          placeholder="Your Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)} // Update mobile state on change
          className="mb-4 p-2 w-full bg-gray-800 text-white border border-purple-400 rounded"
          required
        />
        <textarea
          name="message" // Message input field
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update message state on change
          className="mb-4 p-2 w-full bg-gray-800 text-white border border-purple-400 rounded"
          rows="4"
          required
        />
        <button
          type="submit"
          className="p-2 bg-purple-400 text-white rounded hover:bg-purple-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
