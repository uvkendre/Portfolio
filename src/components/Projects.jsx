import React from 'react';

function Projects() {
  // Array of project objects containing title, description, and link
  const projects = [
    {
      title: 'PDF Viewer',
      description: 'A web-based PDF viewer application that allows users to view, scroll, and navigate through PDF documents directly in the browser. Built with modern web technologies for a seamless document viewing experience.',
      link: 'https://uvkendre.github.io/PDF-Viewer/',
    },
    {
      title: 'Ghumte Haii',
      description: 'A travel platform for solo travelers and adventure enthusiasts.',
      link: 'https://uvkendre.github.io/GhumteHaii/',
    },
    {
      title: 'Image Resizer',
      description: 'A tool to resize images easily in the browser.',
      link: 'https://uvkendre.github.io/Image-Resizer/',
    },
    {
      title: 'Digital Clock',
      description: 'A digital clock built using HTML, CSS, and JavaScript.',
      link: 'https://uvkendre.github.io/Digital-Clock/',
    },
    {
      title: 'Password Generator',
      description: 'A simple web app to generate secure passwords.',
      link: 'https://uvkendre.github.io/Password-Generator/',
    },
  ];

  return (
    <div id="projects" className="w-full bg-black flex flex-col justify-center items-center text-center py-16 px-4 mb-16">
      <h2 className="text-4xl font-bold text-purple-400 mb-6">Projects</h2>
      <div className="grid grid-cols-1 gap-8 max-w-lg w-full">
        {/* Map over projects array to display each project */}
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-purple-400 text-black font-semibold rounded-lg hover:bg-purple-500"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
