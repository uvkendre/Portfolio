import React from 'react';

function Projects() {
  const projects = [
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
      title: 'Nike',
      description: 'A Nike product landing page with a modern design.',
      link: 'https://uvkendre.github.io/NIKE/',
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
