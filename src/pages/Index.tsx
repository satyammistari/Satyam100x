import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

// --- Fix: Add TypingText and codeSnippets for splash/intro ---
const codeSnippets = [
  { lang: 'Python', code: 'print("Hi")' },
  { lang: 'JavaScript', code: 'console.log("Hi");' },
  { lang: 'C++', code: 'std::cout << "Hi" << std::endl;' },
  { lang: 'Java', code: 'System.out.println("Hi");' },
  { lang: 'C', code: 'printf("Hi\\n");' },
  { lang: 'Ruby', code: 'puts "Hi"' },
  { lang: 'Go', code: 'fmt.Println("Hi")' },
  { lang: 'PHP', code: 'echo "Hi";' },
  { lang: 'Swift', code: 'print("Hi")' },
  { lang: 'Kotlin', code: 'println("Hi")' },
  { lang: 'Rust', code: 'println!("Hi");' },
  { lang: 'TypeScript', code: 'console.log("Hi");' },
  { lang: 'Scala', code: 'println("Hi")' },
  { lang: 'Perl', code: 'print "Hi\\n";' },
  { lang: 'Shell', code: 'echo "Hi"' },
];

function TypingText({ text, speed = 60, className = "", onDone }) {
  const [displayed, setDisplayed] = React.useState("");
  React.useEffect(() => {
    let i = 0;
    setDisplayed(""); // Reset when text changes
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onDone) onDone();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onDone]);
  return <span className={className}>{displayed}</span>;
}

// --- Projects Section ---
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React, TypeScript, and Tailwind CSS.',
    link: '#',
    tag: 'React',
    icon: '⚛️',
  },
  {
    title: 'eHealthWave Website',
    description: 'A modern healthcare platform for managing patient records, appointments, and telemedicine, built with Next.js and Tailwind CSS.',
    link: 'https://ehealthwave.com',
    tag: 'Next.js',
    icon: '💊',
  },
];




// --- Connect & Collaborate Section ---
const connectLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/satyammistari',
    handle: '@satyammistari',
    desc: 'Open Source Projects',
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" fill="#181717"/></svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://x.com/SatyamMistari14',
    handle: '@SatyamMistari14',
    desc: 'Tech Tweets',
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22.162 5.656c-.793.352-1.646.59-2.54.697a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.07 9.03c0 .352.04.695.116 1.022-3.728-.187-7.034-1.972-9.244-4.684a4.48 4.48 0 0 0-.606 2.254c0 1.555.792 2.927 2.002 3.732a4.47 4.47 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.594 4.393c-.193.053-.397.082-.607.082-.148 0-.292-.014-.432-.04.293.915 1.143 1.58 2.15 1.598A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.86 2.01c8.233 0 12.747-6.823 12.747-12.747 0-.194-.004-.388-.013-.58a9.13 9.13 0 0 0 2.24-2.34z" fill="#1DA1F2"/></svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/satyam-mistari-a10309322',
    handle: 'Satyam Mistari',
    desc: 'Professional Network',
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 10.28h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z" fill="#0077B5"/></svg>
    ),
  },
];

// --- Terminal Panel for Skills Section ---
const asciiSignature = [
  '  _____       _                 _   _      _  ',
  ' / ____|     | |               | | | |    | | ',
  '| (___   __ _| |_   _ ______ __| | | | ___| |_ ',
  '| \\___ \\ / _` | | | | |_  / \'__| | | |/ _ \\ __|',
  ' ____) | (_| | | |_| |/ /| |  | | | |  __/ |_ ',
  '|_____/ \\__,_|_|\\__,_/___|_|  |_| |_|\\___|\\__|',
].join('\n');

const terminalLines = [
  { type: 'cmd', text: 'echo "Hello, visitor! Welcome to my portfolio"' },
  { type: 'output', text: 'Hello, visitor! Welcome to my portfolio' },
  { type: 'cmd', text: './run_awesome_script.sh' },
  { type: 'progress', text: 'Initializing portfolio components', color: 'text-orange-400' },
  { type: 'check', text: 'Loading frontend skills... Done!', color: 'text-green-400' },
  { type: 'check', text: 'Loading backend expertise... Done!', color: 'text-green-400' },
  { type: 'check', text: 'Connecting creative modules... Done!', color: 'text-green-400' },
  { type: 'info', text: 'Portfolio is ready to explore!', color: 'text-yellow-300' },
  { type: 'cmd', text: 'cat signature.ascii' },
  { type: 'ascii', text: asciiSignature, color: 'text-orange-400' },
];

function TerminalPanel() {
  const [step, setStep] = React.useState(0);
  const scrollRef = useRef(null);

  React.useEffect(() => {
    if (step < terminalLines.length) {
      const timeout = setTimeout(() => setStep(step + 1), terminalLines[step].type === 'ascii' ? 1200 : 600);
      return () => clearTimeout(timeout);
    }
  }, [step]);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [step]);

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <div className="rounded-t-lg bg-[#23272e] px-4 py-2 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
        <span className="ml-4 text-xs text-gray-400">terminal ~ satyam100x@root</span>
      </div>
      <div ref={scrollRef} className="rounded-b-lg bg-[#181a20] px-6 py-4 font-mono text-sm text-gray-100 min-h-[320px] max-h-[420px] overflow-y-auto shadow-lg border border-border">
        <div className="space-y-1">
          {terminalLines.slice(0, step + 1).map((line, idx) => {
            if (line.type === 'cmd') {
              return <div key={idx}><span className="text-green-400">satyam100x@root</span>:<span className="text-blue-400">~$</span> <span>{line.text}</span></div>;
            }
            if (line.type === 'output') {
              return <div key={idx} className="pl-8">{line.text}</div>;
            }
            if (line.type === 'progress') {
              return <div key={idx} className="pl-8 flex items-center"><span className="animate-pulse mr-2 text-orange-400">▉▉</span><span className={line.color}>{line.text}</span></div>;
            }
            if (line.type === 'check') {
              return <div key={idx} className="pl-8 flex items-center"><span className="mr-2 text-green-400">✔</span><span className={line.color}>{line.text}</span></div>;
            }
            if (line.type === 'info') {
              return <div key={idx} className={line.color + ' pl-8 font-semibold'}>{line.text}</div>;
            }
            if (line.type === 'ascii') {
              return <pre key={idx} className={line.color + ' pl-8 text-xs md:text-sm leading-4'}>{line.text}</pre>;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

// --- Tech Skill Badges ---
const techBadges = [
  { name: 'Solidity', color: 'text-gray-100', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><path d="M7.5 2L16 16 7.5 30H2L10.5 16 2 2h5.5zm22.5 0L21.5 16 30 30h-5.5L16 16l8.5-14H30z" fill="#fff"/></svg> },
  { name: 'HTML', color: 'text-orange-400', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M8 4l4 36 12 4 12-4 4-36H8z" fill="#E44D26"/><path d="M24 40l9.6-2.7L36 8H24v32z" fill="#F16529"/><path d="M24 22h-5l.3 3h4.7v3h-4.3l.3 3h4v3l-3.6-1-1-11h4.6v3zm0 0h5l-.3 3h-4.7v3h4.3l-.3 3h-4v3l3.6-1 1-11h-4.6v3z" fill="#fff"/></svg> },
  { name: 'JavaScript', color: 'text-yellow-400', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="#F7DF1E"/><text x="10" y="34" fontSize="24" fontWeight="bold" fill="#222">JS</text></svg> },
  { name: 'TypeScript', color: 'text-blue-400', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="#3178C6"/><path d="M19.5 20.5V18.5H28.5V20.5H24.5V30.5H23.5V20.5H19.5Z" fill="white"/></svg> },
  { name: 'Next.js', color: 'text-gray-100', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#000"/><path d="M23.5 22.5L12 9.5" stroke="#fff" strokeWidth="2"/><circle cx="16" cy="16" r="15" stroke="#fff" strokeWidth="2"/></svg> },
  { name: 'React.js', color: 'text-blue-300', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="8" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="2" fill="none"><ellipse rx="18" ry="7" cx="24" cy="24"/><ellipse rx="18" ry="7" cx="24" cy="24" transform="rotate(60 24 24)"/><ellipse rx="18" ry="7" cx="24" cy="24" transform="rotate(120 24 24)"/></g></svg> },
  { name: 'TailwindCSS', color: 'text-cyan-400', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M12 24c2-4 6-6 12-6s10 2 12 6c-2 4-6 6-12 6s-10-2-12-6zm0 0c2 4 6 6 12 6s10-2 12-6" fill="#38BDF8"/><path d="M12 32c2-4 6-6 12-6s10 2 12 6c-2 4-6 6-12 6s-10-2-12-6zm0 0c2 4 6 6 12 6s10-2 12-6" fill="#38BDF8" fillOpacity=".5"/></svg> },
  { name: 'Bootstrap', color: 'text-purple-400', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#563D7C"/><text x="7" y="23" fontSize="16" fontWeight="bold" fill="#fff">B</text></svg> },
  { name: 'SQL', color: 'text-gray-100', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="10" rx="12" ry="6" fill="#fff"/><rect x="4" y="10" width="24" height="12" rx="6" fill="#bbb"/><ellipse cx="16" cy="22" rx="12" ry="6" fill="#fff"/></svg> },
  { name: 'Prisma', color: 'text-green-400', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><path d="M27.5 27L14 30.5 5 5.5 13.5 3l10.5 24z" fill="#00DC82"/></svg> },
  { name: 'Node.js', color: 'text-green-500', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#3C873A"/><text x="12" y="32" fontSize="18" fontWeight="bold" fill="#fff">js</text></svg> },
  { name: 'Firebase', color: 'text-yellow-400', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><path d="M6 26L16 6l10 20-10 6-10-6z" fill="#FFA000"/><path d="M16 6v26l10-6-10-20z" fill="#FFC400"/></svg> },
  { name: 'Artificial Intelligence', color: 'text-pink-400', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M10 22c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#EC4899" strokeWidth="2"/><circle cx="16" cy="16" r="2" fill="#EC4899"/></svg> },
  { name: 'Nginx', color: 'text-green-400', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><polygon points="16,4 28,10 28,22 16,28 4,22 4,10" fill="#009639"/><text x="8" y="22" fontSize="12" fontWeight="bold" fill="#fff">N</text></svg> },
  { name: 'Express', color: 'text-gray-100', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><text x="2" y="18" fontSize="16" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">ex</text></svg> },
  { name: 'TensorFlow', color: 'text-orange-400', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><path d="M16 2l14 8v12l-14 8-14-8V10l14-8z" fill="#FF6F00"/><path d="M16 2v28" stroke="#fff" strokeWidth="2"/></svg> },
  { name: 'Keras', color: 'text-red-500', bg: 'bg-[#222]', icon: <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#fff"/><text x="7" y="23" fontSize="16" fontWeight="bold" fill="#E53935">K</text></svg> },
];

const Loader = () => (
  <div className="flex items-center justify-center w-full py-12">
    <div className="relative w-[200px] h-[60px]">
      {/* Circles */}
      <div className="absolute left-[15%] animate-bounce-circle bg-white w-5 h-5 rounded-full" />
      <div className="absolute left-[45%] animate-bounce-circle2 bg-white w-5 h-5 rounded-full" />
      <div className="absolute right-[15%] animate-bounce-circle3 bg-white w-5 h-5 rounded-full" />
      {/* Shadows */}
      <div className="absolute left-[15%] top-[62px] animate-bounce-shadow bg-black/90 w-5 h-1 rounded-full blur-sm z-[-1]" />
      <div className="absolute left-[45%] top-[62px] animate-bounce-shadow2 bg-black/90 w-5 h-1 rounded-full blur-sm z-[-1]" />
      <div className="absolute right-[15%] top-[62px] animate-bounce-shadow3 bg-black/90 w-5 h-1 rounded-full blur-sm z-[-1]" />
    </div>
    <style>{`
      @keyframes bounce-circle {
        0% { top: 60px; height: 5px; border-radius: 50px 50px 25px 25px; transform: scaleX(1.7);}
        40% { height: 20px; border-radius: 50%; transform: scaleX(1);}
        100% { top: 0%; }
      }
      @keyframes bounce-shadow {
        0% { transform: scaleX(1.5);}
        40% { transform: scaleX(1); opacity: .7;}
        100% { transform: scaleX(.2); opacity: .4;}
      }
      .animate-bounce-circle { animation: bounce-circle .5s alternate infinite ease; }
      .animate-bounce-circle2 { animation: bounce-circle .5s .2s alternate infinite ease; }
      .animate-bounce-circle3 { animation: bounce-circle .5s .3s alternate infinite ease; }
      .animate-bounce-shadow { animation: bounce-shadow .5s alternate infinite ease; }
      .animate-bounce-shadow2 { animation: bounce-shadow .5s .2s alternate infinite ease; }
      .animate-bounce-shadow3 { animation: bounce-shadow .5s .3s alternate infinite ease; }
    `}</style>
  </div>
);

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [typingDone, setTypingDone] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  if (showSplash) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background text-foreground">
        {/* Cosmic grid background */}
        <div className="absolute inset-0 cosmic-grid opacity-30 pointer-events-none"></div>
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700/60 to-blue-400/30 opacity-70 pointer-events-none"></div>
        {/* Gradient glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
          <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            {!typingDone ? (
              <TypingText text="Welcome to 100xDevs" speed={60} onDone={() => setTypingDone(true)} />
            ) : (
              <>
                Welcome to <span className="text-blue-500">100xDevs</span>
              </>
            )}
          </h1>
          {/* Marquee for language boxes */}
          <div className="w-full overflow-x-hidden py-2">
            <div className="flex gap-6 animate-marquee whitespace-nowrap" style={{animation: 'marquee 8s linear infinite'}}>
              {codeSnippets.map(snippet => (
                <div key={snippet.lang} className="min-w-[180px] max-w-xs bg-white/10 border border-blue-400/40 shadow-lg rounded-xl px-5 py-3 flex flex-col items-start backdrop-blur-md hover:scale-105 transition-transform duration-200">
                  <span className="font-bold text-blue-400 mb-1 text-sm uppercase tracking-wide drop-shadow">{snippet.lang}</span>
                  <pre className="bg-blue-950/60 text-blue-100 rounded p-2 text-xs w-full overflow-x-auto font-mono shadow-inner"><code>{snippet.code}</code></pre>
                </div>
              ))}
              {/* Repeat for seamless marquee */}
              {codeSnippets.map(snippet => (
                <div key={snippet.lang + '-repeat'} className="min-w-[180px] max-w-xs bg-white/10 border border-blue-400/40 shadow-lg rounded-xl px-5 py-3 flex flex-col items-start backdrop-blur-md hover:scale-105 transition-transform duration-200">
                  <span className="font-bold text-blue-400 mb-1 text-sm uppercase tracking-wide drop-shadow">{snippet.lang}</span>
                  <pre className="bg-blue-950/60 text-blue-100 rounded p-2 text-xs w-full overflow-x-auto font-mono shadow-inner"><code>{snippet.code}</code></pre>
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
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <Loader />
      <main>
        <HeroSection />
        {/* Projects Section */}
        <section id="projects" className="w-full py-20 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">Projects</h2>
              <p className="text-muted-foreground text-lg">A selection of my frontend engineering work, from web apps to UI libraries.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-xl border border-border bg-white/10 shadow-lg backdrop-blur-md flex flex-col gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/60 relative animate-fadein"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl drop-shadow">{project.icon}</span>
                    <span className="text-primary font-bold text-lg">{project.title}</span>
                    <span className="ml-auto px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">{project.tag}</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{project.description}</p>
                  <a href={project.link} className="text-primary hover:underline font-medium mt-auto">View Project</a>
                </motion.div>
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
        {/* About Section */}
       
        {/* Skills Section */}
        <section id="connect" className="w-full py-12 px-6 md:px-12 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-foreground mb-8 text-center">Connect & Collaborate</h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
              {connectLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-2 bg-white/10 border border-border rounded-xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <span className="flex-shrink-0">{link.svg}</span>
                  <span className="flex flex-col items-start md:items-center">
                    <span className="font-semibold text-foreground text-lg md:text-base">{link.name}</span>
                    <span className="text-muted-foreground text-sm">{link.handle}</span>
                    <span className="text-xs text-muted-foreground md:text-center">{link.desc}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* Remove FollowingPointer */}
    </div>
  );
};

export default Index;
