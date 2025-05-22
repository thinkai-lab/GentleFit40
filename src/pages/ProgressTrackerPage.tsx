import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Calendar, TrendingUp, Award, BarChart3, ArrowRight } from 'lucide-react';
import { useWorkout } from '../context/WorkoutContext';
import { workoutPlans } from '../data/workoutPlans';

const ProgressTrackerPage: React.FC = () => {
  const { completedWorkouts, streak, totalWorkouts } = useWorkout();
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  
  // Get month names for dropdown
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Get years (current year and previous year)
  const years = [selectedYear, selectedYear - 1];

  // Filter workouts for selected month and year
  const filteredWorkouts = completedWorkouts.filter(workout => {
    const date = new Date(workout.date);
    return date.getMonth() === selectedMonth && date.getFullYear() === selectedYear;
  });

  // Group workouts by day
  const workoutsByDay = filteredWorkouts.reduce((acc, workout) => {
    const date = new Date(workout.date);
    const day = date.getDate();
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(workout);
    return acc;
  }, {} as Record<number, typeof completedWorkouts>);

  // Generate calendar days
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();
  
  // Calculate average rating
  const averageRating = filteredWorkouts.length > 0
    ? (filteredWorkouts.reduce((sum, workout) => sum + workout.rating, 0) / filteredWorkouts.length).toFixed(1)
    : '0.0';
  
  const getWorkoutTypeCount = (day: number) => {
    return completedWorkouts.filter(workout => workout.day === day).length;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Progress</h1>
          <p className="text-lg text-gray-600">
            Track your workout journey and celebrate your consistency. Your body will thank you for every session completed.
          </p>
        </header>

        {/* Stats Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
            <div className="bg-lavender-100 rounded-full p-3 mb-4">
              <Calendar className="h-6 w-6 text-lavender-600" />
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Current Streak</h3>
            <p className="text-3xl font-bold text-lavender-700">{streak} days</p>
            <p className="text-sm text-gray-500 mt-2">Keep the momentum going!</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
            <div className="bg-teal-100 rounded-full p-3 mb-4">
              <Activity className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Total Workouts</h3>
            <p className="text-3xl font-bold text-teal-600">{totalWorkouts}</p>
            <p className="text-sm text-gray-500 mt-2">Great job staying active!</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
            <div className="bg-coral-100 rounded-full p-3 mb-4">
              <Award className="h-6 w-6 text-coral-500" />
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Average Rating</h3>
            <p className="text-3xl font-bold text-coral-500">{averageRating}/5</p>
            <p className="text-sm text-gray-500 mt-2">Based on how you felt</p>
          </div>
        </section>

        {/* Calendar View */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Monthly Activity</h2>
            
            <div className="flex space-x-4">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700"
              >
                {monthNames.map((month, index) => (
                  <option key={month} value={index}>{month}</option>
                ))}
              </select>
              
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700"
              >
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Day labels */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center font-medium text-gray-700 py-2">
                {day}
              </div>
            ))}
            
            {/* Empty cells for days before start of month */}
            {Array.from({ length: firstDay }).map((_, index) => (
              <div key={`empty-${index}`} className="h-14 rounded-lg bg-gray-50"></div>
            ))}
            
            {/* Calendar days */}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const hasWorkout = workoutsByDay[day] && workoutsByDay[day].length > 0;
              const today = new Date();
              const isToday = 
                today.getDate() === day && 
                today.getMonth() === selectedMonth && 
                today.getFullYear() === selectedYear;
              
              return (
                <div 
                  key={day}
                  className={`h-14 rounded-lg flex items-center justify-center relative ${
                    hasWorkout 
                      ? 'bg-lavender-100 text-lavender-800' 
                      : isToday 
                        ? 'bg-gray-100 border border-lavender-300' 
                        : 'bg-gray-50'
                  }`}
                >
                  <span className={`text-sm ${hasWorkout ? 'font-medium' : ''}`}>{day}</span>
                  {hasWorkout && (
                    <div className="absolute bottom-1 w-full flex justify-center">
                      {workoutsByDay[day].map((workout, i) => (
                        <div 
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-lavender-500 mx-0.5"
                          title={`Day ${workout.day}: ${workoutPlans.find(wp => wp.day === workout.day)?.title}`}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Workout Type Breakdown */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Workout Type Breakdown</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workoutPlans.map((plan) => (
              <div key={plan.day} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-2">Day {plan.day}</h3>
                <p className="text-sm text-gray-600 mb-3">{plan.title}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lavender-600 font-semibold">
                    {getWorkoutTypeCount(plan.day)}
                  </span>
                  <span className="text-xs text-gray-500">completed</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Most Recent Workouts */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Workouts</h2>
          
          {completedWorkouts.length > 0 ? (
            <div className="space-y-4">
              {completedWorkouts
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 5)
                .map((workout, index) => {
                  const workoutPlan = workoutPlans.find(wp => wp.day === workout.day);
                  const date = new Date(workout.date);
                  
                  return (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="bg-lavender-100 rounded-full p-2 mr-4">
                        <BarChart3 className="h-5 w-5 text-lavender-600" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-800">
                              Day {workout.day}: {workoutPlan?.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {date.toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </p>
                          </div>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                filled={i < workout.rating} 
                              />
                            ))}
                          </div>
                        </div>
                        {workout.notes && (
                          <p className="text-sm text-gray-600 mt-2 italic">
                            "{workout.notes}"
                          </p>
                        )}
                      </div>
                      <Link 
                        to={`/workout/${workout.day}`}
                        className="ml-4 text-lavender-600 hover:text-lavender-800"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">You haven't completed any workouts yet.</p>
              <Link 
                to="/plan" 
                className="bg-lavender-600 hover:bg-lavender-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300 inline-flex items-center"
              >
                Start Your First Workout <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

// Star component for ratings
const Star: React.FC<{ filled: boolean }> = ({ filled }) => {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill={filled ? "#FBBF24" : "none"} 
      stroke={filled ? "#FBBF24" : "#D1D5DB"} 
      strokeWidth="2"
      className="mx-0.5"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default ProgressTrackerPage;