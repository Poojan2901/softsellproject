import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Jane Doe",
    role: "CTO",
    company: "TechCorp",
    text: "SoftSell made it super easy to sell our unused licenses. Highly recommended!",
  },
  {
    name: "John Smith",
    role: "Founder",
    company: "StartupX",
    text: "Fast, easy, and got paid the next day. Awesome experience!",
  },
];

const Testimonials = () => (
  <motion.section
    className="py-16 px-6 bg-gray-100 dark:bg-gray-800 text-center transition-all duration-500"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl font-bold mb-10">Customer Testimonials</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.3 }}
        >
          <p className="italic text-gray-700 dark:text-gray-300">"{t.text}"</p>
          <p className="mt-4 font-semibold">{t.name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}, {t.company}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Testimonials;
