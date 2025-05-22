import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Clock, Check, BarChart, Star, Heart } from 'lucide-react';
import { workoutPlans, Exercise } from '../data/workoutPlans';
import { useWorkout } from '../context/WorkoutContext';

const WorkoutDetailPage: React.FC = () => {
  const { day } = useParams<{ day: string }>();
  const dayNumber = parseInt(day || '1', 10);
  const workout = workoutPlans.find(wp => wp.day === dayNumber);
  
  const [activeSection, setActiveSection] = useState<'warmup' | 'main' | 'cooldown'>('warmup');
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState('');
  const { addCompletedWorkout, getCompletedWorkoutByDay } = useWorkout();

  // Check if this workout was completed before
  useEffect(() => {
    const savedWorkout = getCompletedWorkoutByDay(dayNumber);
    if (savedWorkout) {
      setRating(savedWorkout.rating);
      setNotes(savedWorkout.notes);
    }
  }, [dayNumber, getCompletedWorkoutByDay]);

  if (!workout) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Workout Not Found</h1>
        <p className="mb-6">Sorry, we couldn't find the workout you're looking for.</p>
        <Link 
          to="/plan" 
          className="bg-lavender-600 hover:bg-lavender-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
        >
          Back to Workout Plan
        </Link>
      </div>
    );
  }

  const getCurrentExercises = () => {
    switch (activeSection) {
      case 'warmup': return workout.warmup;
      case 'main': return workout.mainWorkout;
      case 'cooldown': return workout.cooldown;
      default: return workout.warmup;
    }
  };

  const currentExercises = getCurrentExercises();
  const currentExercise = currentExercises[currentExerciseIndex];

  const handleNext = () => {
    if (currentExerciseIndex < currentExercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      window.scrollTo(0, 0);
    } else if (activeSection === 'warmup') {
      setActiveSection('main');
      setCurrentExerciseIndex(0);
      window.scrollTo(0, 0);
    } else if (activeSection === 'main') {
      setActiveSection('cooldown');
      setCurrentExerciseIndex(0);
      window.scrollTo(0, 0);
    } else {
      // Workout completed
      setCompleted(true);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
    } else if (activeSection === 'main') {
      setActiveSection('warmup');
      setCurrentExerciseIndex(workout.warmup.length - 1);
    } else if (activeSection === 'cooldown') {
      setActiveSection('main');
      setCurrentExerciseIndex(workout.mainWorkout.length - 1);
    }
  };

  const handleComplete = () => {
    addCompletedWorkout({
      day: dayNumber,
      date: new Date().toISOString(),
      rating,
      notes
    });
    
    // Redirect to progress page
    window.location.href = '/progress';
  };

  const renderProgressBar = () => {
    let total = workout.warmup.length + workout.mainWorkout.length + workout.cooldown.length;
    let current = 0;
    
    if (activeSection === 'main') {
      current = workout.warmup.length + currentExerciseIndex;
    } else if (activeSection === 'cooldown') {
      current = workout.warmup.length + workout.mainWorkout.length + currentExerciseIndex;
    } else {
      current = currentExerciseIndex;
    }
    
    const percentage = Math.round((current / total) * 100);
    
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div 
          className="bg-lavender-600 h-2.5 rounded-full transition-all duration-500" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  const renderExerciseCard = (exercise: Exercise) => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative h-64 overflow-hidden bg-lavender-100">
        <img 
          src={exercise.image} 
          alt={exercise.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{exercise.name}</h2>
          <div className="flex items-center text-lavender-600 bg-lavender-50 px-3 py-1 rounded-full">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{exercise.duration}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{exercise.description}</p>
        
        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-2">Tips:</h3>
          <ul className="space-y-1 text-gray-600">
            {exercise.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-4 w-4 text-teal-500 mr-2 mt-1" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-medium text-gray-700 mb-2">Modifications:</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-teal-600 font-medium mb-1">Easier:</p>
              <p className="text-gray-600">{exercise.modifications.easier}</p>
            </div>
            <div>
              <p className="text-coral-500 font-medium mb-1">More Challenging:</p>
              <p className="text-gray-600">{exercise.modifications.harder}</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between space-x-4">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition duration-300 flex-1"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-lavender-600 hover:bg-lavender-700 text-white rounded-lg transition duration-300 flex-1"
          >
            {activeSection === 'cooldown' && currentExerciseIndex === currentExercises.length - 1 
              ? 'Finish Workout' 
              : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );

  const renderCompletionScreen = () => (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
      <div className="w-20 h-20 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="h-10 w-10 text-lavender-600" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Workout Complete!</h2>
      <p className="text-gray-600 mb-8">Great job finishing your {workout.title} workout.</p>
      
      <div className="mb-8">
        <h3 className="font-medium text-gray-700 mb-3">How was your workout?</h3>
        <div className="flex justify-center space-x-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="focus:outline-none"
            >
              <Star 
                className={`h-8 w-8 ${rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
              />
            </button>
          ))}
        </div>
        
        <div className="mb-6">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
            Notes (optional):
          </label>
          <textarea
            id="notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full rounded-lg border-gray-300 bg-gray-50 p-3 text-gray-600 focus:border-lavender-500 focus:ring focus:ring-lavender-200 focus:ring-opacity-50"
            placeholder="How did you feel? Any modifications you made?"
          ></textarea>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Link 
          to="/plan" 
          className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition duration-300"
        >
          Back to Plan
        </Link>
        <button
          onClick={handleComplete}
          className="px-6 py-3 bg-lavender-600 hover:bg-lavender-700 text-white rounded-lg transition duration-300 flex items-center"
        >
          <BarChart className="mr-2 h-5 w-5" />
          Save & View Progress
        </button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-6">
          <Link 
            to="/plan" 
            className="inline-flex items-center text-lavender-600 hover:text-lavender-800 mb-4"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Plan
          </Link>
          
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Day {dayNumber}: {workout.title}
            </h1>
            <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">{workout.duration}</span>
            </div>
          </div>
          
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">Focus: {workout.focus}</span>
            <span>Intensity: {workout.intensity}</span>
          </div>
          
          {!completed && renderProgressBar()}
          
          {!completed && (
            <div className="bg-lavender-50 rounded-lg p-4 flex items-center mb-6">
              <div className="bg-lavender-100 rounded-full p-2 mr-4">
                <Heart className="h-5 w-5 text-lavender-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-1">
                  {activeSection === 'warmup' 
                    ? 'Warm-Up' 
                    : activeSection === 'main' 
                      ? 'Main Workout' 
                      : 'Cool Down'}
                </h3>
                <p className="text-sm text-gray-600">
                  {activeSection === 'warmup' 
                    ? 'Prepare your body with gentle movements' 
                    : activeSection === 'main' 
                      ? 'Focus on form and controlled movements' 
                      : 'Slow down and stretch to recover'}
                </p>
              </div>
            </div>
          )}
        </header>
        
        <section>
          {completed 
            ? renderCompletionScreen()
            : renderExerciseCard(currentExercise)
          }
        </section>
      </div>
    </div>
  );
};

export default WorkoutDetailPage;