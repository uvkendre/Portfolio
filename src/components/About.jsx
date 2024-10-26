import React from 'react';

function About() {
  return (
    <div id="about" className="w-full h-screen bg-black flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-3xl font-bold text-teal-400 mb-4">About Me</h2>
      <p className="max-w-xl text-lg px-4">
        Hey there! I’m Yuvraj Kendre, a 2nd-year BSc student passionate about coding. My unconventional journey has taught me that while a fancy campus is nice, the internet is an invaluable resource. <br /> 

        Currently, I’m diving into Express.js and enhancing my skills in the MERN stack. I’m dedicated to building functional and impactful projects. One of my key projects is **Ghumte Haii**, a platform designed for solo travelers and adventure enthusiasts, offering resources like vehicle information and real-time weather updates to make travel easier and more enjoyable. <br />

        <strong>What Drives Me:</strong> I believe coding is about creating experiences. My mission is to develop applications that are user-friendly and visually appealing, constantly learning and adapting to new technologies. <br />

        <strong>Current Projects:</strong> I'm focused on enhancing **Ghumte Haii** to provide valuable resources that ensure safe and enjoyable journeys for travelers. <br />

        <strong>Fun Facts About Me:</strong> I enjoy attending tech meetups and hackathons to collaborate and share ideas with fellow developers.
      </p>
    </div>
  );
}

export default About;
