import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React, TypeScript, and Tailwind CSS.',
    link: '#',
    tag: 'React',
    icon: '⚛️',
  },
  {
    title: 'UI Component Library',
    description: 'Reusable React components for rapid UI development.',
    link: '#',
    tag: 'UI',
    icon: '🧩',
  },
  {
    title: 'E-commerce Dashboard',
    description: 'A modern dashboard for managing e-commerce analytics and orders.',
    link: '#',
    tag: 'Dashboard',
    icon: '📊',
  },
  {
    title: 'Open Source CLI Tool',
    description: 'A command-line tool for automating frontend workflows.',
    link: '#',
    tag: 'Open Source',
    icon: '💻',
  },
];

const Projects = () => (
  <section className="w-full py-20 px-6 md:px-12 bg-background">
    <div className="max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">Projects</h2>
        <p className="text-muted-foreground text-lg">A selection of my frontend engineering work, from web apps to UI libraries.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="p-6 rounded-xl border border-border bg-white/10 shadow-lg backdrop-blur-md flex flex-col gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/60 relative animate-fadein"
            style={{ animationDelay: `${idx * 0.1 + 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl drop-shadow">{project.icon}</span>
              <span className="text-primary font-bold text-lg">{project.title}</span>
              <span className="ml-auto px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">{project.tag}</span>
            </div>
            <p className="text-muted-foreground mb-2">{project.description}</p>
            <a href={project.link} className="text-primary hover:underline font-medium mt-auto">View Project</a>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @keyframes fadein {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fadein {
        animation: fadein 0.7s cubic-bezier(0.4,0,0.2,1) both;
      }
    `}</style>
  </section>
);

export default Projects; 