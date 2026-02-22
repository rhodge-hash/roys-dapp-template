import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router';

import History from './pages/History';

import Home from '@/pages/Home/Home';
import Profile from '@/pages/Profile/Profile';
import Header from '@/components/Header/Header';
import { Toaster } from '@/components/ui/sonner';
import VibeCodeSession from './pages/VibeCodeSession/VibeCodeSession';
import ChatPage from './pages/Chat/ChatPage'; // Import ChatPage

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setting" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/vibe-code" element={<VibeCodeSession />} />
        <Route path="/chat" element={<ChatPage />} /> {/* New route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
}

export default AppRouter;
