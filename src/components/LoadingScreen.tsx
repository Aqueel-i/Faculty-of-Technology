import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations

// Define the LoadingScreen component
const LoadingScreen: React.FC = () => {
  return (
    // Outer container: full screen overlay
    <div className="fixed inset-0 bg-navy-900 flex items-center justify-center z-50">
      {/* motion.div wraps all content to animate the overall opacity */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0 }} // Start fully transparent
        animate={{ opacity: 1 }} // Fade in to full opacity
        transition={{ duration: 2.5 }} // Animation lasts 1.5 seconds
      >
        {/* Spinner container */}
        <motion.div
          className="w-20 h-20 mb-8" // 80px by 80px with bottom margin
          animate={{
            scale: [0.8, 1.2, 0.5], // Pulsates: grows then shrinks
            rotate: [0, 180, 360], // Rotates full circle
          }}
          transition={{
            duration: 2, // Full rotation and scale animation lasts 2 seconds
            ease: 'easeInOut', // Smooth in/out easing
            times: [0, 0.5, 1], // Defines keyframe timing for scale/rotate
            repeat: Infinity, // Loops forever
          }}
        >
          {/* The spinner ring */}
          <div className="w-full h-full rounded-full border-t-4 border-b-4 border-teal-400">
            {/* 
              - `rounded-full` makes it a circle
              - `border-t-4 border-b-4` adds top and bottom borders only
              - `border-teal-400` sets the teal color
              This creates a classic rotating ring effect.
            */}
          </div>
        </motion.div>

        {/* Title text */}
        <motion.h1
          className="text-2xl font-bold text-white mb-2 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }} // Pulsating opacity effect
          transition={{ duration: 2, repeat: Infinity }} // Loops every 2 seconds
        >
          Advanced Level Technology Department
        </motion.h1>

        {/* Subtitle text */}
        <motion.p
          className="text-teal-400 text-lg text-center"
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Fade in
          transition={{ delay: 0.5 }} // Delay 0.5s to appear after the main container
        >
          Zahira College, Colombo
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
