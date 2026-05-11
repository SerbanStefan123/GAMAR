import { useState } from 'react';
import { motion, PanInfo } from 'motion/react';

interface SmartWatchProps {
  children: React.ReactNode[];
  currentScreen: number;
  onScreenChange: (screen: number) => void;
  showNotification?: boolean;
  notificationContent?: React.ReactNode;
}

export function SmartWatch({
  children,
  currentScreen,
  onScreenChange,
  showNotification,
  notificationContent
}: SmartWatchProps) {
  const [[page, direction], setPage] = useState([currentScreen, 0]);

  const paginate = (newDirection: number) => {
    const newPage = currentScreen + newDirection;
    if (newPage >= 0 && newPage < children.length) {
      setPage([newPage, newDirection]);
      onScreenChange(newPage);
    }
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 50;
    const swipeVelocity = info.velocity.x;

    if (Math.abs(swipeVelocity) > 500 || Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        paginate(-1);
      } else if (info.offset.x < 0) {
        paginate(1);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8">
      <div className="relative">
        {/* Smartwatch Frame */}
        <div className="relative w-[260px] h-[320px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[48px] shadow-2xl p-3 border-4 border-gray-700">
          {/* Screen */}
          <div className="w-full h-full bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 rounded-[36px] overflow-hidden relative">
            <motion.div
              key={currentScreen}
              initial={{ x: direction > 0 ? 300 : -300 }}
              animate={{ x: 0 }}
              exit={{ x: direction > 0 ? -300 : 300 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 w-full h-full"
            >
              {children[currentScreen]}
            </motion.div>

            {/* Notification Overlay - Inside Watch Screen */}
            {showNotification && notificationContent}
          </div>
        </div>

        {/* Page Indicators */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setPage([index, index > currentScreen ? 1 : -1]);
                onScreenChange(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentScreen
                  ? 'bg-cyan-400 w-6'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
