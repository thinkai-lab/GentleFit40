import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorkoutPlanPage from './pages/WorkoutPlanPage';
import WorkoutDetailPage from './pages/WorkoutDetailPage';
import ProgressTrackerPage from './pages/ProgressTrackerPage';
import AboutPage from './pages/AboutPage';
import { WorkoutProvider } from './context/WorkoutContext';

function App() {
  return (
    <Router>
      <WorkoutProvider>
        <div className="min-h-screen flex flex-col bg-lavender-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/plan" element={<WorkoutPlanPage />} />
              <Route path="/workout/:day" element={<WorkoutDetailPage />} />
              <Route path="/progress" element={<ProgressTrackerPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </WorkoutProvider>
    </Router>
  );
}

export default App;