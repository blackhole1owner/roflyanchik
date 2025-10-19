import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer 
      ref={ref}
      className="relative py-16 px-4 overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%),
          radial-gradient(circle at 50% 0%, rgba(255, 0, 128, 0.1) 0%, transparent 70%),
          radial-gradient(circle at 0% 100%, rgba(0, 255, 255, 0.1) 0%, transparent 70%),
          radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)
        `
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Main content */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px #ff0080, 0 0 40px #ff0080"
            }}
          >
            Let's Create Something Amazing
          </motion.h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Готов воплотить твои идеи в жизнь. Создадим что-то уникальное вместе.
          </p>
        </motion.div>

        {/* Contact info */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400">
            <motion.a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 hover:text-neon-pink transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@example.com
            </motion.a>
            
            <motion.a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-neon-blue transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (234) 567-890
            </motion.a>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div 
          className="flex justify-center gap-6 mb-8"
          variants={itemVariants}
        >
          {[
            { name: 'Instagram', href: 'https://instagram.com', icon: '📷' },
            { name: 'Telegram', href: 'https://t.me', icon: '✈️' },
            { name: 'Behance', href: 'https://behance.net', icon: '🎨' },
            { name: 'Dribbble', href: 'https://dribbble.com', icon: '🏀' }
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center hover:border-neon-pink/50 transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                y: -3,
                boxShadow: "0 10px 30px rgba(255, 0, 128, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </span>
              <span className="sr-only">{social.name}</span>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="pt-8 border-t border-gray-800"
          variants={itemVariants}
        >
          <p className="text-gray-500 text-sm">
            © 2024 Твоё Имя. Made with ❤️ and lots of ☕
          </p>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-neon-pink/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
