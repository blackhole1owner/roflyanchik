import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Hero = ({ onContactClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const glowVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(255, 0, 128, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          #0a0a0a
        `
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="relative inline-block"
          variants={glowVariants}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-gradient mb-6 neon-text"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px #ff0080, 0 0 40px #ff0080, 0 0 60px #ff0080"
            }}
            transition={{ duration: 0.3 }}
          >
            Твоё Имя
          </motion.h1>
          
          {/* Glow effect behind text */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-purple opacity-20 blur-xl"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-gray-300"
          variants={itemVariants}
        >
          Digital Creator / Just Vibin'
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={onContactClick}
            className="group relative px-8 py-4 bg-transparent border-2 border-neon-pink text-neon-pink font-medium rounded-full overflow-hidden transition-all duration-300 hover:bg-neon-pink hover:text-dark-900"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 0, 128, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.a
            href="#about"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            <span>Explore More</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon-pink rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-neon-pink rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
