import { useState } from 'react';
import { SmartWatch } from './components/SmartWatch';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { RankedScreen } from './components/screens/RankedScreen';
import { MatchHistoryScreen } from './components/screens/MatchHistoryScreen';
import { MatchDetailScreen } from './components/screens/MatchDetailScreen';
import { LiveGameScreen } from './components/screens/LiveGameScreen';
import { NotificationModal } from './components/NotificationModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showMatchDetail, setShowMatchDetail] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const handleMatchClick = () => {
    setShowMatchDetail(true);
  };

  const handleBackToHistory = () => {
    setShowMatchDetail(false);
  };

  const handleNotificationView = () => {
    setShowNotification(false);
    setCurrentScreen(3);
  };

  const handleNotificationDismiss = () => {
    setShowNotification(false);
  };

  const screens = [
    <ProfileScreen key="profile" />,
    <RankedScreen key="ranked" />,
    showMatchDetail ? (
      <MatchDetailScreen key="match-detail" onBack={handleBackToHistory} />
    ) : (
      <MatchHistoryScreen key="match-history" onMatchClick={handleMatchClick} />
    ),
    <LiveGameScreen key="live-game" />,
  ];

  return (
    <div className="size-full">
      <SmartWatch
        currentScreen={currentScreen}
        onScreenChange={setCurrentScreen}
        showNotification={showNotification}
        notificationContent={
          <NotificationModal
            isOpen={showNotification}
            onDismiss={handleNotificationDismiss}
            onView={handleNotificationView}
          />
        }
      >
        {screens}
      </SmartWatch>
    </div>
  );
}