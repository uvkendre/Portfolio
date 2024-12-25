import React from 'react';
import { FaCode } from "react-icons/fa";
import { ReactTyped } from 'react-typed'; 

function Home() {
  return (
    <div id="home" className="max-w-screen h-screen mx-auto px-4 py-28 bg-black text-white flex flex-col justify-center">
      <section className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
          <ReactTyped
            strings={[
              "नमस्ते", 
              "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ", 
              "নমস্কার", 
              "आदाब", 
              "प्रणाम", 
              "নমস্কার", 
              "வணக்கம்", 
              "నమస్కరం", 
              "ನಮಸ್ತೆ", 
              "राधे राधे", 
              "કેમ છો", 
              "ٱلسَّلَامُ عَلَيْكُمْ"
            ]}
            typeSpeed={40}
            loop
          />
          , I'm Yuvraj Kendre <FaCode className="inline-block ml-2" />
        </h2>
        <p className="text-lg md:text-xl text-white mt-20 px-4">
          A passionate Web Developer who loves creating user-friendly web experiences. <br />
          Currently, I'm diving deep into the MERN stack and working on exciting projects.
        </p>
      </section>

      <section className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Welcome to My Portfolio</h3>
        <p className="text-lg md:text-xl text-white px-4">
          Explore my projects and feel free to reach out for collaboration!
        </p>
      </section>
    </div>
  );
}

export default Home;