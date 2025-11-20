import { motion } from 'framer-motion'

export default function LetterCard({ letter, title, name, lines, onBack }) {
  return (
    <div className="relative">
      <motion.button
        onClick={onBack}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="absolute -top-2 -left-2 z-20 px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/20 bg-white/10 text-white/80 hover:text-white"
      >
        Back
      </motion.button>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Character circle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="aspect-square rounded-3xl bg-gradient-to-br from-amber-600 via-rose-600 to-emerald-600 p-[2px] shadow-2xl"
        >
          <div className="h-full w-full rounded-[1.35rem] bg-slate-900/70 backdrop-blur flex items-center justify-center relative overflow-hidden ring-1 ring-white/10">
            {/* Steampunk doodle silhouette using CSS shapes */}
            <motion.div
              className="relative"
              initial={{ rotate: -6, y: 8 }}
              animate={{ rotate: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            >
              <div className="w-36 h-36 rounded-full bg-gradient-to-b from-amber-300/80 to-amber-500/70 shadow-inner" />
              <div className="w-10 h-10 rounded-full bg-amber-700/80 absolute -top-3 -left-2" />
              <div className="w-8 h-8 rounded-full bg-amber-700/80 absolute -top-2 left-8" />
              {/* Goggles */}
              <motion.div className="absolute top-7 left-6 flex gap-2" animate={{ y: [0, -1, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <div className="w-6 h-6 rounded-full bg-teal-300/80 ring-2 ring-teal-700/60" />
                <div className="w-6 h-6 rounded-full bg-teal-300/80 ring-2 ring-teal-700/60" />
              </motion.div>
              {/* Jetpack puffs */}
              <motion.div className="absolute -bottom-2 left-6 flex gap-1" animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -4, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="w-2 h-2 rounded-full bg-white/50" />
                <div className="w-3 h-3 rounded-full bg-white/40" />
                <div className="w-2 h-2 rounded-full bg-white/50" />
              </motion.div>
              {/* Letter badge */}
              <motion.div
                className="absolute -top-3 -right-3 bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white font-black rounded-xl px-3 py-1 shadow-lg"
                initial={{ scale: 0, rotate: -15, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.1 }}
              >
                {letter}
              </motion.div>
            </motion.div>

            {/* floating cogs */}
            <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}>
              <div className="absolute right-6 top-6 w-8 h-8 rounded-full border-2 border-amber-400/50" />
              <div className="absolute right-10 bottom-8 w-6 h-6 rounded-full border-2 border-emerald-300/40" />
              <div className="absolute left-8 bottom-10 w-10 h-10 rounded-full border-2 border-rose-300/40" />
            </motion.div>
          </div>
        </motion.div>

        {/* Story */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{title}</h2>
          <p className="mt-1 text-amber-200/80 text-sm">Featuring {name}</p>

          <div className="mt-5 space-y-3 text-blue-100/90">
            {lines.map((l, i) => (
              <motion.p key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} className="leading-relaxed">
                {l}
              </motion.p>
            ))}
          </div>

          {/* Micro scene animation */}
          <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
            <motion.div className="h-24 relative" initial={false}>
              <motion.div className="absolute left-2 bottom-2 w-10 h-10 rounded-full bg-amber-400/70" animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.div className="absolute left-14 bottom-4 w-16 h-2 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" animate={{ x: [0, 6, 0] }} transition={{ duration: 2.2, repeat: Infinity }} />
              <motion.div className="absolute right-4 top-2 w-3 h-16 bg-gradient-to-b from-white/40 to-white/0" animate={{ opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 1.8, repeat: Infinity }} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
