import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Flame } from 'lucide-react';

interface DayCardProps {
  day: number;
  title: string;
  focus: string;
  duration: string;
  intensity: string;
  description: string;
}

const DayCard: React.FC<DayCardProps> = ({ 
  day, 
  title, 
  focus, 
  duration, 
  intensity, 
  description 
}) => {
  // Day names array
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  return (
    <div className="bg-lavender-50 rounded-lg p-5 hover:bg-lavender-100 transition duration-300">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Day {day}</span>
          <h3 className="text-xl font-semibold text-gray-800">{dayNames[day-1]}</h3>
          <p className="text-lavender-700 font-medium">{title}</p>
        </div>
        
        <div className="md:w-2/4 mb-4 md:mb-0">
          <p className="text-gray-600 mb-2">{description}</p>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" /> {duration}
            </span>
            <span className="flex items-center">
              <Flame className="h-4 w-4 mr-1" /> {intensity}
            </span>
            <span className="text-gray-700">Focus: {focus}</span>
          </div>
        </div>
        
        <div className="md:w-1/4 text-right">
          <Link 
            to={`/workout/${day}`} 
            className="inline-flex items-center text-lavender-600 hover:text-lavender-800 font-medium transition duration-300"
          >
            View Workout <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DayCard;