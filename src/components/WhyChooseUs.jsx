import { motion } from 'framer-motion';

const reasons = [
  { icon: '⚡', title: 'Fast Payments', desc: 'Get paid within 24 hours' },
  { icon: '🔒', title: 'Secure', desc: 'Data encrypted and protected' },
  { icon: '🛠️', title: 'Expert Support', desc: 'We’re here to help you 24/7' },
  { icon: '📈', title: 'Best Value', desc: 'We offer competitive valuations' },
];

const WhyChooseUs = () => (
  <motion.section
    className="py-16 px-6 text-center transition-all duration-500"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
    <div className="grid gap-8 md:grid-cols-4">
      {reasons.map((r, i) => (
        <motion.div
          key={i}
          className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.3 }}
        >
          <div className="text-3xl">{r.icon}</div>
          <h3 className="font-semibold mt-4">{r.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{r.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default WhyChooseUs;
