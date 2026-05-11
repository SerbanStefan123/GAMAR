import { motion, AnimatePresence } from 'motion/react';

interface NotificationModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  onView: () => void;
}

export function NotificationModal({ isOpen, onDismiss, onView }: NotificationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Inside Watch Screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm z-40 rounded-[36px]"
            onClick={onDismiss}
          />

          {/* Modal - Fitted for Smartwatch */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] bg-gradient-to-b from-gray-900 to-gray-800 border-2 border-cyan-500/50 rounded-xl p-3 z-50 shadow-2xl shadow-cyan-500/30"
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <img src="/item2.png" alt="Luden's Tempest" className="w-8 h-8 rounded-lg object-cover" />
              <div className="flex-1">
                <h3 className="text-xs font-bold text-cyan-400">Item Alert</h3>
                <p className="text-[10px] text-gray-400">14:02</p>
              </div>
            </div>

            {/* Message */}
            <p className="text-[11px] text-white mb-3 leading-tight">
              Enemy Mid bought Luden's Tempest
            </p>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                onClick={onDismiss}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-[10px] py-1.5 rounded-lg transition-colors"
              >
                Dismiss
              </button>
              <button
                onClick={onView}
                className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black text-[10px] font-bold py-1.5 rounded-lg transition-colors"
              >
                View
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
