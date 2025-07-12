import React from 'react';

const techStack = [
  { name: 'React', color: 'bg-blue-500', icon: '⚛️' },
  { name: 'TypeScript', color: 'bg-blue-700', icon: '🟦' },
  { name: 'JavaScript', color: 'bg-yellow-400', icon: '🟨' },
  { name: 'HTML5', color: 'bg-orange-500', icon: '🟧' },
  { name: 'CSS3', color: 'bg-blue-400', icon: '🟦' },
  { name: 'Tailwind CSS', color: 'bg-cyan-400', icon: '🌬️' },
  { name: 'Redux', color: 'bg-purple-500', icon: '🟪' },
  { name: 'Next.js', color: 'bg-gray-800', icon: '⬛' },
  { name: 'Node.js', color: 'bg-green-600', icon: '🟩' },
  { name: 'Git', color: 'bg-orange-700', icon: '🔶' },
  { name: 'Jest', color: 'bg-pink-500', icon: '🧪' },
  { name: 'Cypress', color: 'bg-green-400', icon: '🌲' },
  { name: 'Figma', color: 'bg-pink-400', icon: '🎨' },
  { name: 'REST APIs', color: 'bg-indigo-500', icon: '🔗' },
  { name: 'GraphQL', color: 'bg-pink-600', icon: '🔺' },
];

const Skills = () => (
  <section className="w-full py-20 px-6 md:px-12 bg-background">
    <div className="max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">Skills</h2>
        <p className="text-muted-foreground text-lg">Technologies and tools I use to build modern web applications.</p>
      </div>
      {/* Marquee effect for tech stack */}
      <div className="overflow-x-hidden py-4 relative">
        <div className="flex gap-6 animate-marquee whitespace-nowrap" style={{animation: 'marquee 12s linear infinite'}}>
          {techStack.map((tech, idx) => (
            <div key={tech.name + idx} className={`min-w-[140px] max-w-xs px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 backdrop-blur-md bg-white/10 border border-border hover:scale-105 transition-transform duration-200 ${tech.color}`}>
              <span className="text-2xl drop-shadow">{tech.icon}</span>
              <span className="font-bold text-white text-lg tracking-wide drop-shadow">{tech.name}</span>
            </div>
          ))}
          {/* Repeat for seamless loop */}
          {techStack.map((tech, idx) => (
            <div key={tech.name + '-repeat-' + idx} className={`min-w-[140px] max-w-xs px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 backdrop-blur-md bg-white/10 border border-border hover:scale-105 transition-transform duration-200 ${tech.color}`}>
              <span className="text-2xl drop-shadow">{tech.icon}</span>
              <span className="font-bold text-white text-lg tracking-wide drop-shadow">{tech.name}</span>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
      {/* End marquee */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {techStack.map(tech => (
          <span key={tech.name} className={`px-4 py-2 rounded-full font-medium shadow-sm text-white ${tech.color} bg-opacity-80 hover:scale-110 transition-transform duration-200`}>{tech.icon} {tech.name}</span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills; 