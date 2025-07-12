import React from 'react';

const experiences = [
  {
    company: 'TechFlow',
    role: 'Frontend Engineer',
    period: '2022 - Present',
    description: 'Building scalable web applications and leading UI development.'
  },
  {
    company: 'StartupLab',
    role: 'React Developer',
    period: '2020 - 2022',
    description: 'Developed modern interfaces and improved performance for client projects.'
  }
];

const Experience = () => (
  <section className="w-full py-20 px-6 md:px-12 bg-background">
    <div className="max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">Experience</h2>
        <p className="text-muted-foreground text-lg">My professional journey as a frontend engineer.</p>
      </div>
      <div className="space-y-8 max-w-2xl mx-auto">
        {experiences.map((exp, idx) => (
          <div key={idx} className="p-6 rounded-xl border border-border bg-card shadow-md">
            <h3 className="text-xl font-semibold mb-1">{exp.role} @ {exp.company}</h3>
            <div className="text-sm text-muted-foreground mb-2">{exp.period}</div>
            <p className="text-foreground">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience; 