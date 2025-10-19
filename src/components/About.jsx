import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: 'https://instagram.com',
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'Telegram',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      url: 'https://t.me',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section 
      id="about"
      ref={ref}
      className="relative py-20 px-4 min-h-screen flex items-center"
      style={{
        background: `
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 50%),
          #0a0a0a
        `
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Photo Section */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative group">
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-purple rounded-full opacity-20 blur-xl"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Photo placeholder */}
              <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-dark-700 to-dark-800 rounded-full border-2 border-neon-pink/30 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-neon-pink/20 via-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                  <motion.div
                    className="text-6xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    👤
                  </motion.div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-neon-pink rounded-full"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-blue rounded-full"
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-display font-bold text-gradient"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Привет! Я креативный дизайнер и digital-художник, который создает 
              визуально впечатляющий контент. Моя страсть — это сочетание 
              минимализма с неоновыми акцентами и современными технологиями.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Я специализируюсь на создании уникальных визуальных решений, 
              которые не только красивы, но и функциональны. Каждый проект 
              — это возможность рассказать историю через дизайн.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex gap-6 pt-4"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-neon-pink/50 transition-all duration-300 ${social.color}`}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255, 0, 128, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="text-white group-hover:text-neon-pink transition-colors duration-300">
                    {social.icon}
                  </div>
                  <span className="sr-only">{social.name}</span>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 to-neon-blue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div 
              className="pt-4"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['UI/UX Design', 'Motion Graphics', 'Branding', 'Web Design', '3D Modeling'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-dark-700/50 border border-gray-600 rounded-full text-sm text-gray-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: '#ff0080',
                      color: '#ff0080'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
