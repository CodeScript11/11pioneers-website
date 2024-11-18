import React from 'react';
import { ArrowRight, TrendingUp, Building, Target, Wallet } from 'lucide-react';

const ThesisPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">The Non-Venture Venture Builder</h1>
            <p className="text-xl text-gray-300">
              We build profitable Online Academies to combat the skills shortage, focusing on real outcomes and sustainable growth.
            </p>
          </div>
        </div>

        {/* Main Thesis */}
        <section className="py-20 px-6 bg-white text-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Our Core Thesis</h2>
            <div className="space-y-12">
              <div className="border-l-4 border-black pl-6">
                <p className="text-xl mb-4">
                  The demand for Workforce Enablement and Skills Training with real outcomes is constantly rising.
                </p>
                <p className="text-gray-600">
                  Traditional education systems are failing to keep pace with the rapidly evolving needs of the modern workforce.
                </p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <p className="text-xl mb-4">
                  The VC model doesn't work in EdTech, but education companies are highly resilient and profitable.
                </p>
                <p className="text-gray-600">
                  EdTech companies rarely reach venture scale, but they can build sustainable, profitable businesses.
                </p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <p className="text-xl mb-4">
                  Focus beats fragmentation.
                </p>
                <p className="text-gray-600">
                  We focus exclusively on online academies, allowing us to perfect our blueprint and create repeatable success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Works */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white text-black p-8">
                <h3 className="text-xl font-bold mb-4">Pre-Sales Validation</h3>
                <p className="mb-4">Within 4-8 weeks we either generate €100k+ in pre-sales or kill an academy trial with minimal cost.</p>
                <div className="flex items-center text-sm">
                  <ArrowRight className="mr-2" size={16} />
                  <span>De-risked academy building</span>
                </div>
              </div>
              <div className="bg-white text-black p-8">
                <h3 className="text-xl font-bold mb-4">Distribution Edge</h3>
                <p className="mb-4">Proven playbook for fast marketing & sales roll-out with established corporate networks.</p>
                <div className="flex items-center text-sm">
                  <ArrowRight className="mr-2" size={16} />
                  <span>Reduced customer acquisition costs</span>
                </div>
              </div>
              <div className="bg-white text-black p-8">
                <h3 className="text-xl font-bold mb-4">Automation Edge</h3>
                <p className="mb-4">High degree of infrastructure synergies across platform, content creation, and operations.</p>
                <div className="flex items-center text-sm">
                  <ArrowRight className="mr-2" size={16} />
                  <span>Scalable efficiency</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unfair Advantages */}
        <section className="py-20 px-6 bg-white text-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Our Unfair Advantages</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <Building className="mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Certified Education Provider</h3>
                  <p className="text-gray-600">Modern 'Bildungsträger' certified by the Labour Office, enabling 100% cost coverage for many target groups.</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Proven Content Creation</h3>
                  <p className="text-gray-600">Track record in creating engaging, effective learning content and marketing materials.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Corporate Network</h3>
                  <p className="text-gray-600">Established partnerships reducing customer acquisition costs across all academies.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Wallet className="mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Efficient Capital Deployment</h3>
                  <p className="text-gray-600">Focus on profitability over scale, with each academy reaching break-even within 12-24 months.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Building the Future of Education</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're creating sustainable, profitable academies that deliver real value to learners and businesses.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="/investors" className="bg-white text-black px-8 py-3 hover:opacity-80 transition-opacity">
                For Investors
              </a>
              <a href="/founders" className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-all">
                For Founders
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ThesisPage;
