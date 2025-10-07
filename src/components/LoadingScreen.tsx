import React from 'react';
import { motion } from 'framer-motion';
const LoadingScreen: React.FC = () => {
  return <div className="fixed inset-0 bg-navy-900 flex items-center justify-center z-50">
      <motion.div className="flex flex-col items-center" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }}>
        <motion.div className="w-20 h-20 mb-8" animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360]
      }} transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.5, 1],
        repeat: Infinity
      }}>
          <div className="w-full h-full rounded-full border-t-4 border-b-4 border-teal-400"></div>
        </motion.div>
        <motion.h1 className="text-2xl font-bold text-white mb-2" animate={{
        opacity: [0.5, 1, 0.5]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }}>
          Advanced Level Technology Department
        </motion.h1>
        <motion.p className="text-teal-400 text-lg" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.5
      }}>
          Zahira College, Colombo
        </motion.p>
      </motion.div>
    </div>;
};
export default LoadingScreen;