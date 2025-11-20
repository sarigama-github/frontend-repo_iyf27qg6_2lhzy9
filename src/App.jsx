import { motion } from "framer-motion";
import Header from "./components/Header";
import AlphabetGallery from "./components/AlphabetGallery";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* Steampunk glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f14] via-[#0f1319] to-[#0a0d12]" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-rose-500/10 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-14">
        <Header />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl"
        >
          <AlphabetGallery />
        </motion.div>

        <p className="mt-8 text-center text-sm text-amber-200/80">
          Tap a letter to meet her and watch a tiny steampunk scene come to life.
        </p>
      </div>
    </div>
  );
}

export default App;
