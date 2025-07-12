
import React, { useEffect, useRef, useState } from 'react'; 

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Satyam100x delivered our e-commerce platform ahead of schedule with exceptional attention to detail. The performance improvements were remarkable - 40% faster load times!",
      author: "Sarah Johnson",
      position: "Product Manager at TechFlow",
      avatar: "bg-cosmic-light/30"
    },
    {
      quote: "Working with Satyam100x was fantastic. Their React expertise and clean coding practices transformed our legacy system into a modern, maintainable application.",
      author: "Michael Chen",
      position: "CTO at StartupLab",
      avatar: "bg-cosmic-light/20"
    },
    {
      quote: "Satyam100x's frontend skills are top-notch. They created a beautiful, responsive dashboard that our users love. Great communication and problem-solving throughout the project.",
      author: "Elena Rodriguez",
      position: "Design Lead at CreativeStudio",
      avatar: "bg-cosmic-light/40"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 3000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, testimonials.length, paused]);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg">
            What clients say about working with me on their projects
          </p>
        </div>
        <div
          className="relative h-72 flex items-center justify-center overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out w-full h-full"
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${testimonials.length * 100}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full h-72 flex flex-col items-center justify-center flex-shrink-0"
                style={{ width: '100%' }}
              >
                <div className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300 w-full max-w-md mx-auto">
                  <div className="mb-6 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary inline-block mr-1">★</span>
                    ))}
                  </div>
                  <p className="text-lg mb-8 text-foreground/90 italic text-center">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 justify-center">
                    <div className={`h-12 w-12 rounded-full ${testimonial.avatar} bg-muted`}></div>
                    <div>
                      <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
