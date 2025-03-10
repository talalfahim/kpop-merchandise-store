'use client';

import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };
  
  return (
    <section className="py-16 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Stay Updated with New Releases
          </h2>
          
          <p className="text-white/80 mb-8">
            Subscribe to our newsletter and be the first to know about new merchandise drops, 
            exclusive promotions, and K-pop news.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Thank You for Subscribing!</h3>
              <p>
                You've been added to our mailing list and will be among the first to know when we release new merchandise.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-white/20 backdrop-blur-sm text-white placeholder-white/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`bg-white text-[color:var(--primary)] font-medium px-6 py-3 rounded-lg hover:bg-white/90 transition-colors ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              <p className="text-white/60 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup; 