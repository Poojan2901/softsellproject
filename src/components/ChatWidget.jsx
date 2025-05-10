import { useState } from 'react';
import { getChatResponse } from '../api/chat';

// Predefined sample questions and answers
const predefinedAnswers = {
  "How do I sell my license?": "To sell your license, visit our platform, sign up, and follow the instructions on the dashboard to list your product. You'll need to provide details about the product and set a price.",
  "What types of licenses can I sell?": "You can sell software licenses, digital products, eBooks, music licenses, and more, depending on your product offerings.",
  "How fast will I get paid?": "Payments are processed within 3-5 business days after the transaction is completed, but can vary based on payment method and country."
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;  // Don't send if input is empty

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => {
      // Keep only the last 5 messages
      const updatedMessages = [...prev, userMessage];
      if (updatedMessages.length > 5) updatedMessages.shift();
      return updatedMessages;
    });

    setInput('');
    setLoading(true);

    // Check if it's a predefined question
    if (predefinedAnswers[input]) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: predefinedAnswers[input] }
      ]);
      setLoading(false);
      return;
    }

    // Send the last 5 messages as context to Gemini API
    try {
      const context = messages.slice(-5).map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`).join('\n');
      const reply = await getChatResponse(input, context);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: reply }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong. Try again later.' }
      ]);
    } finally {
      setLoading(false);
    }``
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden border dark:border-gray-600">
          <div className="bg-primary text-white px-4 py-2 flex justify-between items-center">
            <span className="font-semibold">Ask SoftSell AI</span>
            <button onClick={() => setOpen(false)} className="text-sm">✖</button>
          </div>
          <div className="p-4 h-80 overflow-y-auto space-y-2 text-sm text-gray-800 dark:text-gray-100">
            {messages.map((msg, i) => (
              <div key={i} className={`p-2 rounded ${msg.role === 'user' ? 'bg-gray-200 dark:bg-gray-700 text-right' : 'bg-indigo-100 dark:bg-gray-600'}`}>
                {msg.content}
              </div>
            ))}
            {loading && <div className="italic text-gray-400">Typing...</div>}
          </div>
          <div className="px-4 pb-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="mt-2 w-full bg-primary text-white px-3 py-2 rounded hover:bg-indigo-700 transition"
            >
              Send
            </button>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Examples:
              <ul className="list-disc pl-4">
                {Object.keys(predefinedAnswers).map((q, i) => (
                  <li key={i} className="cursor-pointer hover:underline" onClick={() => setInput(q)}>{q}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-full shadow hover:bg-indigo-700 transition"
        >
          Chat with us 💬
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
