import React from 'react';
import { Rocket, Shield, Target, Users, BarChart, ChevronRight } from 'lucide-react';

const FoundersPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Build Your Academy With Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Join us in creating the next generation of online academies with the backing of our proven blueprint and some of the most experienced entrepreneurs in the education and academy space.
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <section className="py-20 px-6 bg-white text-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">The 11 Pioneers Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-black p-8">
                <Shield className="mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">De-Risked Launch</h3>
                <p>Pre-validated concepts with secured funding and proven playbooks.</p>
              </div>
              <div className="border border-black p-8">
                <Target className="mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Clear Path to Profitability</h3>
                <p>Structured approach to reach profitability within 18 months.</p>
              </div>
              <div className="border border-black p-8">
                <BarChart className="mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Protected Upside</h3>
                <p>Anti-dilution model protecting founder equity through future raises.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Opportunities</h2>
            <div className="space-y-12">
              <div className="bg-white text-black p-8">
                <h3 className="text-2xl font-bold mb-4">Academy CEO</h3>
                <p className="text-gray-600 mb-8">Lead a pre-validated academy with secured funding</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-lg font-bold mb-4">Your Mission</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      As an Academy CEO, you'll be at the forefront of transforming professional education. You'll build and scale an academy that creates real impact, helping thousands of professionals master the skills they need to thrive in the digital age. This isn't just about running a business – it's about shaping the future of how people learn and grow in their careers.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      You'll be pioneering new approaches to skills-based education, working with industry experts, and building a team that shares your passion for impactful education. Your academy will be a catalyst for change, creating opportunities for people to transform their careers and lives through practical, market-driven education.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-4">What You'll Get</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                        <span>Minority stake in your academy</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                        <span>Fixed + variable compensation</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                        <span>Equity pool for your team</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                        <span>Studio equity participation</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                        <span>Anti-dilution protection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white text-black p-8">
                <h3 className="text-2xl font-bold mb-4">Entrepreneur in Residence</h3>
                <p className="text-gray-600 mb-8">Shape the future of our academy platform</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-lg font-bold mb-4">Your Mission</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      As an Entrepreneur in Residence, you'll be architecting the future of education technology. You'll work at the intersection of innovation and execution, helping to refine and evolve our academy blueprint while identifying new opportunities for growth and impact. Your work will directly influence how we scale our mission across multiple academies and markets.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      You'll be part of reimagining how education is delivered and consumed, working closely with our leadership team to push the boundaries of what's possible in online education. Your strategic insights and hands-on approach will help shape not just individual academies, but the entire future of our platform.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-4">What You'll Get</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                        <span>Studio equity participation</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                        <span>Competitive compensation</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                        <span>Path to Academy CEO role</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                        <span>Work with multiple academies</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                        <span>Shape overall strategy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We're Looking For */}
        <section className="py-20 px-6 bg-white text-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Who We're Looking For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black p-8">
                <h3 className="text-xl font-bold mb-4">Background</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                    <span>Ex-consultants with strong operational experience</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                    <span>Proven self-starters with entrepreneurial drive</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                    <span>Impact-driven leaders with a passion for education</span>
                  </li>
                </ul>
              </div>
              <div className="border border-black p-8">
                <h3 className="text-xl font-bold mb-4">Skills & Mindset</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                    <span>Balance of strategic thinking and operational excellence</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                    <span>Strong leadership and team building capabilities</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                    <span>Data-driven decision making approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build the Future of Education?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in creating the next generation of online academies.
            </p>
            <a 
              href="mailto:founders@11pioneers.com" 
              className="inline-flex items-center bg-white text-black px-8 py-3 hover:opacity-80 transition-opacity"
            >
              <span>Start the Conversation</span>
              <Rocket className="ml-2" size={16} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FoundersPage;
