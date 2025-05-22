import React, { createContext, useContext, useState, useEffect } from 'react';

interface CompletedWorkout {
  day: number;
  date: string;
  rating: number; // 1-5 rating
  notes: string;
}

interface WorkoutContextType {
  completedWorkouts: CompletedWorkout[];
  addCompletedWorkout: (workout: CompletedWorkout) => void;
  getCompletedWorkoutByDay: (day: number) => CompletedWorkout | undefined;
  streak: number;
  totalWorkouts: number;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'gentlefit-workout-data';

export const WorkoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedWorkouts, setCompletedWorkouts] = useState<CompletedWorkout[]>([]);
  const [streak, setStreak] = useState<number>(0);
  const [totalWorkouts, setTotalWorkouts] = useState<number>(0);

  // Load data from localStorage on initial mount
  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setCompletedWorkouts(parsedData.completedWorkouts || []);
      setStreak(parsedData.streak || 0);
      setTotalWorkouts(parsedData.totalWorkouts || 0);
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        completedWorkouts,
        streak,
        totalWorkouts
      })
    );
  }, [completedWorkouts, streak, totalWorkouts]);

  // Calculate streak when completedWorkouts changes
  useEffect(() => {
    calculateStreak();
  }, [completedWorkouts]);

  const calculateStreak = () => {
    if (completedWorkouts.length === 0) {
      setStreak(0);
      return;
    }

    // Sort completedWorkouts by date (newest first)
    const sortedWorkouts = [...completedWorkouts].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Check if the most recent workout is from today or yesterday
    const mostRecentDate = new Date(sortedWorkouts[0].date);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const isTodayOrYesterday = 
      mostRecentDate.toDateString() === today.toDateString() || 
      mostRecentDate.toDateString() === yesterday.toDateString();

    if (!isTodayOrYesterday) {
      setStreak(0);
      return;
    }

    // Count consecutive days
    let currentStreak = 1;
    let currentDate = mostRecentDate;

    for (let i = 1; i < sortedWorkouts.length; i++) {
      const workoutDate = new Date(sortedWorkouts[i].date);
      
      // Check if this workout was the day before the current date
      const expectedPrevDate = new Date(currentDate);
      expectedPrevDate.setDate(expectedPrevDate.getDate() - 1);
      
      if (workoutDate.toDateString() === expectedPrevDate.toDateString()) {
        currentStreak++;
        currentDate = workoutDate;
      } else {
        break;
      }
    }

    setStreak(currentStreak);
  };

  const addCompletedWorkout = (workout: CompletedWorkout) => {
    // Check if workout for this day already exists
    const existingIndex = completedWorkouts.findIndex(w => 
      w.day === workout.day && w.date === workout.date
    );

    if (existingIndex >= 0) {
      // Update existing workout
      const updatedWorkouts = [...completedWorkouts];
      updatedWorkouts[existingIndex] = workout;
      setCompletedWorkouts(updatedWorkouts);
    } else {
      // Add new workout
      setCompletedWorkouts([...completedWorkouts, workout]);
      setTotalWorkouts(prev => prev + 1);
    }
  };

  const getCompletedWorkoutByDay = (day: number): CompletedWorkout | undefined => {
    // Get the most recent completed workout for a specific day
    const dayWorkouts = completedWorkouts.filter(w => w.day === day);
    if (dayWorkouts.length === 0) return undefined;
    
    // Sort by date, newest first
    return dayWorkouts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )[0];
  };

  return (
    <WorkoutContext.Provider value={{
      completedWorkouts,
      addCompletedWorkout,
      getCompletedWorkoutByDay,
      streak,
      totalWorkouts
    }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = (): WorkoutContextType => {
  const context = useContext(WorkoutContext);
  if (context === undefined) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }
  return context;
};