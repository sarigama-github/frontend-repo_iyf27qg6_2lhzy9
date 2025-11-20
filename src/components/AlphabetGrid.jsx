import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0, rotate: -4, scale: 0.9 },
  show: { y: 0, opacity: 1, rotate: 0, scale: 1 },
};

export default function AlphabetGrid() {
  const [active, setActive] = useState(null);
  const colors = useMemo(
    () => [
      "from-pink-500 to-rose-500",
      "from-orange-500 to-amber-500",
      "from-emerald-500 to-teal-500",
      "from-blue-500 to-indigo-500",
      "from-violet-500 to-fuchsia-500",
      "from-cyan-500 to-sky-500",
    ],
    []
  );

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 sm:gap-4"
    >
      {letters.map((ch, idx) => {
        const color = colors[idx % colors.length];
        const isActive = active === idx;
        return (
          <motion.button
            key={ch}
            variants={item}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onTapStart={() => setActive(idx)}
            onTapCancel={() => setActive(null)}
            onTap={() => setActive((v) => (v === idx ? null : idx))}
            animate={
              isActive
                ? {
                    y: [0, -8, 0, -14, 0],
                    rotate: [0, 4, -4, 0],
                    transition: { duration: 0.9 },
                  }
                : { y: 0, rotate: 0 }
            }
            className={`relative aspect-square rounded-2xl p-0 select-none bg-gradient-to-br ${color} text-white font-black text-3xl sm:text-4xl shadow-lg ring-1 ring-white/20 overflow-hidden`}
          >
            <span className="relative z-10">{ch}</span>
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isActive ? [0, 1.2, 1] : 0,
                opacity: isActive ? [0, 0.8, 0] : 0,
              }}
              transition={{ duration: 0.6 }}
              className="pointer-events-none absolute inset-0 bg-white/20"
            />
          </motion.button>
        );
      })}
    </motion.div>
  );
}
