import { motion } from "framer-motion";
import { useState } from "react";

export default function Controls({ onChangeMode }) {
  const [mode, setMode] = useState("bounce");

  const modes = [
    { id: "bounce", label: "Bounce" },
    { id: "wave", label: "Wave" },
    { id: "spin", label: "Spin" },
    { id: "shuffle", label: "Shuffle" },
  ];

  function handleClick(id) {
    setMode(id);
    onChangeMode?.(id);
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
      {modes.map((m) => (
        <motion.button
          key={m.id}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleClick(m.id)}
          className={`px-3 py-2 rounded-xl text-sm font-medium border backdrop-blur bg-white/5 text-white/90 hover:text-white transition ${
            mode === m.id ? "border-white/40 bg-white/10" : "border-white/10"
          }`}
        >
          {m.label}
        </motion.button>
      ))}
    </div>
  );
}
