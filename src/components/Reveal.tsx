import React from 'react';
import { motion } from 'framer-motion';

type RevealProps = React.PropsWithChildren<{
  className?: string;
  delay?: number;
  distance?: number;
}>;

const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, distance = 28 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: distance }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.16 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;
