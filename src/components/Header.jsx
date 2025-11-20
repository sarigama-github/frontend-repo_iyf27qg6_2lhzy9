import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="text-center mb-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
      >
        Alphabet Playground
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-blue-200/80 max-w-xl mx-auto"
      >
        Watch letters dance, bounce, and swirl. Tap any letter to make it move!
      </motion.p>
    </div>
  );
}
