import { motion } from 'framer-motion';

const ContactForm = () => (
  <motion.section
    className="py-16 px-6 transition-all duration-500"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
    <form className="max-w-2xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md grid gap-4" onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Name" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
      <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
      <input type="text" placeholder="Company" className="p-3 border border-gray-300 rounded-lg" />
      <select className="p-3 border border-gray-300 rounded-lg" required>
        <option value="">Select License Type</option>
        <option>Windows</option>
        <option>Office 365</option>
        <option>Adobe Suite</option>
        <option>Other</option>
      </select>
      <textarea placeholder="Message" className="p-3 border border-gray-300 rounded-lg" required></textarea>
      <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-indigo-800 transition">
        Submit
      </button>
    </form>
  </motion.section>
);

export default ContactForm;
