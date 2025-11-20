import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { STORIES } from './stories'
import LetterCard from './LetterCard'

export default function AlphabetGallery() {
  const [selected, setSelected] = useState(null)
  const letters = useMemo(() => STORIES.map(s => s.letter), [])
  const colors = useMemo(() => [
    'from-amber-600 to-orange-500',
    'from-rose-600 to-pink-500',
    'from-emerald-600 to-teal-500',
    'from-indigo-600 to-blue-500',
    'from-violet-600 to-fuchsia-500',
    'from-cyan-600 to-sky-500',
  ], [])

  return (
    <div>
      <AnimatePresence mode="wait">
        {selected == null ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-3 sm:gap-4"
          >
            {letters.map((ch, idx) => {
              const color = colors[idx % colors.length]
              return (
                <motion.button
                  key={ch}
                  whileHover={{ scale: 1.06, rotate: 1 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelected(idx)}
                  className={`relative aspect-square rounded-2xl p-0 select-none bg-gradient-to-br ${color} text-white font-black text-3xl sm:text-4xl shadow-lg ring-1 ring-white/20 overflow-hidden`}
                >
                  <span className="relative z-10">{ch}</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.15 }}
                    className="pointer-events-none absolute inset-0 bg-white"
                  />
                </motion.button>
              )
            })}
          </motion.div>
        ) : (
          <motion.div
            key="story"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className=""
          >
            <LetterCard
              letter={STORIES[selected].letter}
              title={STORIES[selected].title}
              name={STORIES[selected].name}
              lines={STORIES[selected].lines}
              onBack={() => setSelected(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
