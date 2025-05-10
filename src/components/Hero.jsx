import { motion } from 'framer-motion';

const Hero = () => (
  <motion.section
    className="bg-gradient-to-r from-primary to-indigo-700 text-white py-24 px-4 text-center transition-all duration-500 dark:from-indigo-800 dark:to-indigo-900"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-5xl md:text-6xl font-bold leading-tight">Turn Unused Licenses Into Cash</h1>
    <p className="mt-4 text-xl text-gray-200 dark:text-gray-300">Sell software licenses you no longer use and get paid instantly.</p>
    <button className="mt-8 bg-white text-primary font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition duration-300">
      Get a Quote
    </button>
  </motion.section>
);

export default Hero;
