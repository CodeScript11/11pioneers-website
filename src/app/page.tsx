import React from 'react';
import { ChevronDown, ArrowRight, Users, Rocket, Award, Target } from 'lucide-react';

const HomePage = () => {
  const academies = [
    {
      title: "Digital Sales Academy",
      description: "Upskilling program for modern B2B sales professionals"
    },
    {
      title: "Digital HR Academy",
      description: "Training for next-generation HR leaders"
    },
    {
      title: "AI & Automation Academy",
      description: "Practical skills for the AI-driven future"
    },
    {
      title: "Leadership Academy",
      description: "Building tomorrow's startup leaders"
    },
    {
      title: "Digital Product Academy",
      description: "Product management for the digital age"
    }
  ];

  const stats = [
    { number: "100%", label: "Government Funded" },
    { number: "5+", label: "Industry Partners" },
    { number: "20+", label: "Expert Instructors" },
    { number: "50+", label: "Available Course Modules" }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center px-4 relative">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">11 Pioneers.</h1>
        <p className="text-xl md:text-2xl text-gray-300 text-center max-w-2xl">
          Creating the next generation of Online Academies.
        </p>
        <div className="absolute bottom-12 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>

      {/* Vision Statement */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Building the Future of Workforce Enablement</h2>
          <p className="text-xl leading-relaxed mb-12">
            We believe in a world where education is accessible, practical, and aligned with industry needs. 
            Our academies bridge the gap between traditional education and the real-world skills demanded by 
            modern businesses.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="border border-black p-6">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academies Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Our Academies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academies.map((academy, index) => (
              <div key={index} className="bg-white text-black p-8 hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-3">{academy.title}</h3>
                <p className="text-gray-600 mb-4">{academy.description}</p>
                <button className="flex items-center space-x-2 text-black hover:opacity-70 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Why Choose 11 Pioneers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-black">
              <Users className="mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Expert-Led Training</h3>
              <p className="text-sm">Learn from industry professionals who bring real-world experience to the classroom.</p>
            </div>
            <div className="p-6 border border-black">
              <Rocket className="mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Career Acceleration</h3>
              <p className="text-sm">Fast-track your career with practical skills that employers actually need.</p>
            </div>
            <div className="p-6 border border-black">
              <Award className="mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Industry Recognition</h3>
              <p className="text-sm">Our certifications are recognized and valued by leading companies.</p>
            </div>
            <div className="p-6 border border-black">
              <Target className="mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Focused Learning</h3>
              <p className="text-sm">Concentrated programs designed to get you job-ready in months, not years.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
