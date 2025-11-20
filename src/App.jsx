import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import AlphabetGrid from "./components/AlphabetGrid";
import Controls from "./components/Controls";

function App() {
  const [mode, setMode] = useState("bounce");

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* Soft gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950" />
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-14">
        <Header />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl"
        >
          <AlphabetGrid mode={mode} />
          <Controls onChangeMode={setMode} />
        </motion.div>

        <p className="mt-8 text-center text-sm text-blue-200/70">
          Tip: Tap letters to make them move. Try different modes for unique motion.
        </p>
      </div>
    </div>
  );
}

export default App;
