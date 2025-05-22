import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Flame, Activity } from 'lucide-react';
import DayCard from '../components/DayCard';
import { workoutPlans } from '../data/workoutPlans';

const WorkoutPlanPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your 5-Day Workout Plan</h1>
          <p className="text-lg text-gray-600">
            A balanced weekly routine designed specifically for women over 40. 
            Each day focuses on different aspects of fitness with low-impact, 
            effective exercises you can do at home.
          </p>
        </header>

        <section className="mb-12 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-lavender-600" />
            Weekly Overview
          </h2>
          
          <div className="space-y-4">
            {workoutPlans.map((plan, index) => (
              <DayCard 
                key={index}
                day={index + 1}
                title={plan.title}
                focus={plan.focus}
                duration={plan.duration}
                intensity={plan.intensity}
                description={plan.description}
              />
            ))}
          </div>
        </section>

        <section className="mb-12 bg-teal-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Activity className="mr-2 h-5 w-5 text-teal-600" />
            How to Follow This Plan
          </h2>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
                <Clock className="h-4 w-4 text-teal-700" />
              </div>
              <p className="text-gray-700">
                <span className="font-medium">Schedule your workouts</span> - Set aside 30-45 minutes, 5 days a week
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
                <Flame className="h-4 w-4 text-teal-700" />
              </div>
              <p className="text-gray-700">
                <span className="font-medium">Listen to your body</span> - Modify exercises as needed and progress gradually
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
                <Calendar className="h-4 w-4 text-teal-700" />
              </div>
              <p className="text-gray-700">
                <span className="font-medium">Be consistent</span> - Results come from regular practice, not intensity
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
                <Activity className="h-4 w-4 text-teal-700" />
              </div>
              <p className="text-gray-700">
                <span className="font-medium">Track your progress</span> - Use the progress tracker to monitor improvements
              </p>
            </li>
          </ul>
        </section>

        <div className="text-center">
          <Link 
            to="/workout/1" 
            className="bg-lavender-600 hover:bg-lavender-700 text-white font-medium px-8 py-3 rounded-lg transition duration-300 inline-flex items-center"
          >
            Start Day 1 Workout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlanPage;