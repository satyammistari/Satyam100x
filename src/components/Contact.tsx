import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16 animate-fadein">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">Contact</h2>
          <p className="text-muted-foreground text-lg">Interested in working together or have a question? Reach out below!</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 bg-white/10 backdrop-blur-md border border-border rounded-2xl p-8 shadow-lg relative">
          <input type="text" placeholder="Your Name" required className="w-full px-4 py-2 border border-border rounded-md bg-muted/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200" />
          <input type="email" placeholder="Your Email" required className="w-full px-4 py-2 border border-border rounded-md bg-muted/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200" />
          <textarea placeholder="Your Message" required className="w-full px-4 py-2 border border-border rounded-md bg-muted/60 text-foreground min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200" />
          <button type="submit" className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold shadow-md hover:bg-primary/90 transition-all duration-200">Send Message</button>
          {submitted && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-2xl animate-fadein z-10">
              <div className="bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg text-lg font-bold animate-pop">Thank you! Message sent 🚀</div>
            </div>
          )}
        </form>
      </div>
      <style>{`
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes pop {
          0% { transform: scale(0.7); opacity: 0; }
          80% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-pop {
          animation: pop 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </section>
  );
};

export default Contact; 