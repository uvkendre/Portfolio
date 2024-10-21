import React, { useState } from 'react';

function Contact() {
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
        action="https://getform.io/f/aolgxpdb" // Getform endpoint
        method="POST"
        className="w-full max-w-md mt-6"
      >
        <input
          type="text"
          name="name" // Name attribute added
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-2 w-full bg-gray-800 text-white border border-purple-400 rounded"
          required
        />
        <input
          type="email"
          name="email" // Name attribute added
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 w-full bg-gray-800 text-white border border-purple-400 rounded"
          required
        />
        <input
          type="tel"
          name="mobile" // Name attribute added
          placeholder="Your Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="mb-4 p-2 w-full bg-gray-800 text-white border border-purple-400 rounded"
          required
        />
        <textarea
          name="message" // Name attribute added
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
