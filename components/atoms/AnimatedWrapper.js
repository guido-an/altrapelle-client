import { motion } from 'framer-motion';

const AnimatedWrapper = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: 'calc(100vw * 0.05)', y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 'calc(100vw * -0.15)', y: 0 },
  };

  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear', duration: 0.5 }} // Set the transition to linear
    >
      {children}
    </motion.main>
  );
};

export default AnimatedWrapper;
