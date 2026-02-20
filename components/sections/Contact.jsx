'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shreywy',
      icon: 'fab fa-github',
      color: 'hover:text-gray-400',
      bgColor: 'group-hover:from-gray-500/50 group-hover:to-gray-400/50',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shreymistry/',
      icon: 'fab fa-linkedin',
      color: 'hover:text-blue-400',
      bgColor: 'group-hover:from-blue-500/50 group-hover:to-blue-400/50',
    },
    {
      name: 'Email',
      url: 'mailto:shrey.d.mistry@gmail.com',
      icon: 'fas fa-envelope',
      color: 'hover:text-purple-400',
      bgColor: 'group-hover:from-purple-500/50 group-hover:to-purple-400/50',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to Formspree
      const response = await fetch('https://formspree.io/f/mpqjjlaa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Contact Info */}
          <motion.div
            className="glass-panel p-8 sm:p-12 relative overflow-hidden group"
            variants={itemVariants}
          >
            {/* Gradient Background */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">Let's Connect</h3>

            {/* Quick Info */}
            <div className="space-y-6 mb-12">
              <motion.div
                className="flex items-start gap-4 group/item p-4 rounded-lg hover:bg-white/5 transition-colors"
                whileHover={{ x: 8 }}
              >
                <div className="text-3xl">📍</div>
                <div>
                  <p className="font-semibold text-white group-hover/item:text-blue-400 transition-colors">Location</p>
                  <p className="text-gray-400 text-sm">Toronto, Ontario</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 group/item p-4 rounded-lg hover:bg-white/5 transition-colors"
                whileHover={{ x: 8 }}
              >
                <div className="text-3xl">💼</div>
                <div>
                  <p className="font-semibold text-white group-hover/item:text-blue-400 transition-colors">Currently</p>
                  <p className="text-gray-400 text-sm">CS Student at Toronto Metropolitan University</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 group/item p-4 rounded-lg hover:bg-white/5 transition-colors"
                whileHover={{ x: 8 }}
              >
                <div className="text-3xl">⚡</div>
                <div>
                  <p className="font-semibold text-white group-hover/item:text-blue-400 transition-colors">Interested In</p>
                  <p className="text-gray-400 text-sm">Full-stack development, system design, performance optimization</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 group/item p-4 rounded-lg hover:bg-white/5 transition-colors"
                whileHover={{ x: 8 }}
              >
                <div className="text-3xl">✨</div>
                <div>
                  <p className="font-semibold text-white group-hover/item:text-blue-400 transition-colors">Also Into</p>
                  <p className="text-gray-400 text-sm">Cars, technology, PC building, and exploring what's next</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Find Me On</p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full border border-white/20 text-white ${link.color} transition-all relative group`}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    title={link.name}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3 + index * 0.3, repeat: Infinity }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${link.bgColor} blur-lg`}></div>
                    </div>
                    <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      {link.name === 'GitHub' && (
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      )}
                      {link.name === 'LinkedIn' && (
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      )}
                      {link.name === 'Email' && (
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      )}
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass-panel p-8 sm:p-12 relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Gradient Background */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-2xl font-bold text-white mb-2">Send me a Message</h3>
            <p className="text-gray-400 text-sm mb-8">I'll get back to you as soon as possible.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div whileHover={{ scale: 1.01 }} className="group">
                <label className="block text-sm font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-blue-400 focus:bg-white/15 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                />
              </motion.div>

              {/* Email */}
              <motion.div whileHover={{ scale: 1.01 }} className="group">
                <label className="block text-sm font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-blue-400 focus:bg-white/15 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                />
              </motion.div>

              {/* Message */}
              <motion.div whileHover={{ scale: 1.01 }} className="group">
                <label className="block text-sm font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me something..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-blue-400 focus:bg-white/15 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20 resize-none"
                />
              </motion.div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <motion.div
                  className="p-4 bg-emerald-500/20 border border-emerald-500 rounded-lg text-emerald-400 text-sm flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="text-lg">✓</span> Message sent successfully! I'll reach out soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-sm flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="text-lg">✗</span> Something went wrong. Please try again.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white font-bold rounded-lg disabled:opacity-50 transition-all hover:shadow-xl hover:shadow-blue-500/40 relative group overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
