import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, CheckCircle, Clock, Activity, HelpCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About GentleFit40+</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We created GentleFit40+ with a single purpose: to provide women over 40 with 
            an effective, enjoyable, and sustainable fitness approach that respects your 
            body's changing needs while helping you feel stronger and more energetic.
          </p>
        </header>

        {/* Our Approach Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Heart className="mr-3 h-6 w-6 text-coral-500" />
              Our Approach
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                As we enter our 40s and beyond, our fitness needs change. High-impact, intense workouts 
                that worked in our 20s and 30s may now lead to injury or burnout. GentleFit40+ embraces 
                a different approach:
              </p>
              
              <ul className="space-y-4 my-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-lavender-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-800">Low-impact movements</strong> that are gentle on joints 
                    while effectively building strength and improving flexibility
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-lavender-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-800">Functional fitness focus</strong> that translates to 
                    real-life activities and movements, making everyday tasks easier
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-lavender-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-800">Balance of strength, flexibility, and cardio</strong> to 
                    address all aspects of fitness for overall wellbeing
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-lavender-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-800">Modifications for all fitness levels</strong>, allowing 
                    you to adapt each exercise to your current ability and gradually progress
                  </span>
                </li>
              </ul>
              
              <p>
                Our program was developed in consultation with fitness professionals who specialize 
                in women's health and aging, ensuring each workout is both safe and effective.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Benefits of Low-Impact Exercise for Women 40+
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="bg-lavender-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-lavender-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Physical Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-lavender-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Maintains and builds lean muscle mass, which naturally declines with age</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-lavender-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Supports bone health and helps prevent osteoporosis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-lavender-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Improves balance and reduces fall risk</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-lavender-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Boosts metabolism to help maintain a healthy weight</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-lavender-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Enhances flexibility and range of motion</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mental & Hormonal Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Reduces stress and anxiety through mindful movement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Helps manage perimenopause and menopause symptoms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Improves sleep quality and duration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Boosts mood and helps prevent depression</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Enhances overall energy levels and reduces fatigue</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <HelpCircle className="mr-3 h-6 w-6 text-coral-500" />
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  How often should I do these workouts?
                </h3>
                <p className="text-gray-600">
                  Our program is designed for 5 days per week, with each day focusing on different aspects of fitness. 
                  However, even 2-3 days per week will provide benefits. Listen to your body and start where you're 
                  comfortable, gradually building up frequency as your fitness improves.
                </p>
              </div>
              
              <div className="border-b border-gray-100 pb-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Do I need special equipment?
                </h3>
                <p className="text-gray-600">
                  No special equipment is required. All exercises can be done with just your body weight. For some 
                  exercises, you might optionally use household items like water bottles or canned goods as light weights, 
                  or a chair for support.
                </p>
              </div>
              
              <div className="border-b border-gray-100 pb-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  I'm a beginner. Is this program suitable for me?
                </h3>
                <p className="text-gray-600">
                  Absolutely! Each exercise includes modifications to make it easier or more challenging. Start with 
                  the easier modifications and progress as you build strength and confidence. The low-impact nature 
                  of our workouts makes them ideal for beginners.
                </p>
              </div>
              
              <div className="border-b border-gray-100 pb-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  I have joint issues. Can I still do these workouts?
                </h3>
                <p className="text-gray-600">
                  Our workouts are specifically designed to be gentle on joints while still being effective. However, 
                  if you have specific medical conditions or injuries, please consult with your healthcare provider before 
                  starting any new exercise program. Use the modifications provided to adapt exercises as needed.
                </p>
              </div>
              
              <div className="border-b border-gray-100 pb-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  How long before I see results?
                </h3>
                <p className="text-gray-600">
                  Many women report feeling more energetic and noticing improved mood within the first 1-2 weeks. 
                  Physical changes like improved strength and flexibility typically become noticeable within 4-6 weeks 
                  of consistent practice. Remember that the journey is unique for everyone, and non-scale victories 
                  (like climbing stairs more easily or reduced pain) are important measures of progress.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Can I combine this with other forms of exercise?
                </h3>
                <p className="text-gray-600">
                  Yes! Our program works well as a standalone routine or as a complement to other activities you enjoy, 
                  such as walking, swimming, or yoga. Just be mindful of giving your body adequate rest between workouts, 
                  especially when starting out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-lavender-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of women who are discovering the joy of movement and 
              building strength with workouts designed specifically for their changing bodies.
            </p>
            <Link 
              to="/plan" 
              className="bg-lavender-600 hover:bg-lavender-700 text-white font-medium px-8 py-3 rounded-lg transition duration-300 inline-flex items-center"
            >
              View the 5-Day Plan <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;