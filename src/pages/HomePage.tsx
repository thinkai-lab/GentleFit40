import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Activity, Award, Clock } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 relative overflow-hidden rounded-2xl">
        <div className="bg-gradient-to-r from-lavender-700 to-lavender-600 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Low-Impact Fitness <br />
              <span className="text-teal-300">Designed for Women 40+</span>
            </h1>
            <p className="text-lavender-100 text-lg md:text-xl mb-8 max-w-2xl">
              Build strength, improve flexibility, and boost your energy with our gentle, 
              effective home workouts. No equipment needed, just your commitment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/plan" 
                className="bg-coral-500 hover:bg-coral-600 text-white font-medium px-6 py-3 rounded-lg transition duration-300 inline-flex items-center"
              >
                Start Your Plan <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/about" 
                className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Your Journey to Better Health
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Calendar className="h-8 w-8 text-lavender-600" />}
            title="5-Day Plan"
            description="Balanced weekly routine with focused goals for each session"
          />
          <FeatureCard 
            icon={<Activity className="h-8 w-8 text-teal-500" />}
            title="Low-Impact"
            description="Joint-friendly exercises perfect for women over 40"
          />
          <FeatureCard 
            icon={<Award className="h-8 w-8 text-coral-500" />}
            title="Progress Tracking"
            description="Monitor your improvements and celebrate milestones"
          />
          <FeatureCard 
            icon={<Clock className="h-8 w-8 text-lavender-600" />}
            title="30-45 Minutes"
            description="Efficient workouts that fit into your busy schedule"
          />
        </div>
      </section>

      {/* Weekly Plan Preview */}
      <section className="mb-16">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Your Weekly Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
              <Link 
                to={`/workout/${index + 1}`} 
                key={day}
                className="group bg-lavender-50 hover:bg-lavender-100 rounded-lg p-4 transition duration-300"
              >
                <h3 className="font-semibold text-gray-700">{day}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {getDayFocus(index + 1)}
                </p>
                <div className="text-lavender-600 text-sm group-hover:text-lavender-700 flex items-center">
                  View workout <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-16 text-center">
        <div className="bg-teal-50 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Feel Better?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your gentle fitness journey today and experience increased energy,
            improved flexibility, and gradual toning without stressing your joints.
          </p>
          <Link 
            to="/plan" 
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3 rounded-lg transition duration-300 inline-flex items-center"
          >
            Begin Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Helper function to get the focus for each day
const getDayFocus = (day: number): string => {
  switch (day) {
    case 1: return "Full Body Strength";
    case 2: return "Core & Balance";
    case 3: return "Flexibility & Mobility";
    case 4: return "Lower Body Focus";
    case 5: return "Gentle Cardio & Arms";
    default: return "";
  }
};

export default HomePage;