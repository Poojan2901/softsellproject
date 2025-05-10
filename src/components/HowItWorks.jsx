import { motion } from 'framer-motion';

const steps = [
  { icon: '📤', title: 'Upload License', desc: 'Submit your unused license details' },
  { icon: '💰', title: 'Get Valuation', desc: 'We evaluate your license value' },
  { icon: '🏦', title: 'Get Paid', desc: 'Receive your payment quickly' },
];

const HowItWorks = () => (
  <motion.section
    className="py-16 px-6 bg-gray-50 dark:bg-gray-800 text-center transition-all duration-500"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl font-bold mb-10">How It Works</h2>
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.3 }}
        >
          <div className="text-4xl">{step.icon}</div>
          <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default HowItWorks;
