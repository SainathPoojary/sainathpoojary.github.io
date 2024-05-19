"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  return (
    <motion.section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Ask me Anything [Experimental]</h2>

      <input
        type="text"
        placeholder="Type your question here"
        className="flex justify-between items-center py-3.5 px-4 border-text border-1 rounded-md bg-transparent  outline-none placeholder:text-text"
      />
    </motion.section>
  );
};

export default Chatbot;
