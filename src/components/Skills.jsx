import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostman, SiGit, SiGithub } from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';
import { GiProgression } from 'react-icons/gi';

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    // Create an Intersection Observer to trigger animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          animateIcons(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Trigger animation when 10% of the element is visible
      }
    );

    // Observe the skills section for visibility
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      // Clean up the observer on component unmount
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Animate icons on entrance and exit
  const animateIcons = (isEntering) => {
    const icons = skillsRef.current.children;

    if (isEntering) {
      gsap.fromTo(
        icons,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: 'bounce.out',
        }
      );
    } else {
      gsap.to(icons, {
        y: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'power1.inOut',
      });
    }
  };

  // List of skills with corresponding icons
  const skills = [
    { icon: <FaHtml5 size={50} className="text-orange-600" />, label: 'HTML' },
    { icon: <FaCss3Alt size={50} className="text-blue-600" />, label: 'CSS' },
    { icon: <FaJsSquare size={50} className="text-yellow-500" />, label: 'JavaScript' },
    { icon: <FaReact size={50} className="text-blue-400" />, label: 'React' },
    { icon: <FaNodeJs size={50} className="text-green-600" />, label: 'Node.js' },
    { icon: <SiMongodb size={50} className="text-green-700" />, label: 'MongoDB' },
    { icon: <SiExpress size={50} className="text-gray-600" />, label: 'Express' },
    { icon: <SiPostman size={50} className="text-orange-600" />, label: 'Postman' },
    { icon: <SiGit size={50} className="text-red-500" />, label: 'Git' },
    { icon: <SiGithub size={50} className="text-black" />, label: 'GitHub' },
    { icon: <TbBrandThreejs size={50} className="text-white" />, label: 'Three.js' },
    { icon: <GiProgression size={50} className="text-green-400" />, label: 'Learning New Skills' },
  ];

  return (
    <div id="skills" ref={skillsRef} className="w-full bg-black flex flex-col justify-center items-center text-center py-16 px-4">
      <h2 className="text-4xl font-bold text-purple-400 mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-slate-700 border-2 border-purple-400 p-4 rounded-lg"
          >
            {skill.icon}
            <span className="mt-2 text-white">{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
