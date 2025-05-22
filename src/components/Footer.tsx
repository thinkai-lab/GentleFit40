import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <Activity className="h-6 w-6 text-lavender-600" />
              <span className="ml-2 text-lg font-bold text-gray-800">
                GentleFit<span className="text-lavender-600">40+</span>
              </span>
            </Link>
            <p className="text-gray-600 mt-2 text-sm max-w-md">
              Low-impact, effective home workouts designed specifically for women over 40.
              Build strength, improve flexibility, and boost your energy.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase mb-4">Workouts</h3>
              <ul className="space-y-2">
                <li><Link to="/workout/1" className="text-gray-600 hover:text-lavender-700">Full Body</Link></li>
                <li><Link to="/workout/2" className="text-gray-600 hover:text-lavender-700">Core & Balance</Link></li>
                <li><Link to="/workout/3" className="text-gray-600 hover:text-lavender-700">Flexibility</Link></li>
                <li><Link to="/workout/4" className="text-gray-600 hover:text-lavender-700">Lower Body</Link></li>
                <li><Link to="/workout/5" className="text-gray-600 hover:text-lavender-700">Gentle Cardio</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase mb-4">About</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-lavender-700">Our Approach</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-lavender-700">Benefits</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-lavender-700">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} GentleFit40+. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 mt-4 sm:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 text-coral-500 mx-1" /> for women over 40
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;