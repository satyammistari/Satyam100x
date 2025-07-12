
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Code, Palette, Smartphone, Globe, Zap, Users } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Frontend Development",
      description: "Expert in React, TypeScript, and modern JavaScript frameworks for building scalable applications.",
      expandedDescription: "Specialized in React ecosystem with hooks, context, and state management. Proficient in TypeScript for type-safe development, Next.js for full-stack applications, and modern build tools like Vite and Webpack. Experience with testing frameworks including Jest and React Testing Library.",
      icon: (
        <Code size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces with a focus on user experience and accessibility.",
      expandedDescription: "Strong eye for design with experience in Figma, Adobe Creative Suite, and design systems. Expertise in CSS3, Sass, Tailwind CSS, and CSS-in-JS solutions. Committed to accessibility standards (WCAG) and responsive design principles across all devices.",
      icon: (
        <Palette size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Mobile-First Development",
      description: "Responsive design and mobile optimization for seamless experiences across all devices.",
      expandedDescription: "Progressive Web App (PWA) development with offline capabilities. React Native experience for cross-platform mobile apps. Performance optimization techniques including lazy loading, code splitting, and efficient bundle management for mobile networks.",
      icon: (
        <Smartphone size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Web Performance",
      description: "Optimizing applications for speed, SEO, and exceptional user experience.",
      expandedDescription: "Core Web Vitals optimization, lighthouse scoring improvements, and advanced caching strategies. Experience with CDNs, image optimization, and modern web standards. SEO best practices and semantic HTML for better search engine visibility.",
      icon: (
        <Zap size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "API Integration",
      description: "Seamless integration with REST APIs, GraphQL, and real-time data synchronization.",
      expandedDescription: "Experience with REST API consumption, GraphQL queries and mutations, and WebSocket implementations. State management with Redux, Zustand, and React Query. Authentication flows including OAuth, JWT, and session management.",
      icon: (
        <Globe size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Team Collaboration",
      description: "Strong communication skills and experience working in agile development environments.",
      expandedDescription: "Git workflow management, code reviews, and pair programming experience. Familiar with project management tools like Jira, Trello, and Linear. Documentation writing and technical communication with stakeholders and cross-functional teams.",
      icon: (
        <Users size={24} className="text-cosmic-accent" />
      )
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Skills & Expertise
          </h2>
          <p className="text-cosmic-muted text-lg">
            Comprehensive frontend development skills to bring your ideas to life with modern web technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${
                      openFeature === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-cosmic-muted">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-cosmic-muted">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-cosmic-accent hover:text-cosmic-accent/80 text-sm font-medium">
                      View projects →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
