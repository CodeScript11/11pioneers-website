import React from 'react';
import { TrendingUp, Users, Globe, Shield, BarChart, ArrowRight } from 'lucide-react';

const InvestorsPage = () => {
  const marketStats = [
    {
      metric: "$487.3B",
      description: "Global Corporate Training Market Size (2022)",
      source: "Source: Grand View Research"
    },
    {
      metric: "8.4%",
      description: "CAGR of Corporate Training Market (2023-2030)",
      source: "Source: Grand View Research"
    },
    {
      metric: "$40B+",
      description: "AI Upskilling Investment by Companies (2023)",
      source: "Source: IDC Research"
    }
  ];

  const impactMetrics = [
    {
      title: "Skills Gap Impact",
      description: "87% of companies report skills gaps or expect them within the next few years",
      source: "McKinsey Global Survey"
    },
    {
      title: "AI Transformation",
      description: "40% of working hours could be impacted by language models, requiring massive workforce adaptation",
      source: "McKinsey Global Institute"
    },
    {
      title: "Digital Skills Demand",
      description: "149M new digital jobs expected globally by 2025",
      source: "World Economic Forum"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Investment Opportunity in Workforce Development</h1>
            <p className="text-xl text-gray-300">
              Partner with us to build sustainable, profitable academies that address critical skills gaps in the digital economy.
            </p>
          </div>
        </div>

        {/* Market Opportunity */}
        <section className="py-20 px-6 bg-white text-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Market Opportunity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketStats.map((stat, index) => (
                <div key={index} className="border border-black p-8">
                  <div className="text-3xl font-bold mb-4">{stat.metric}</div>
                  <p className="mb-4">{stat.description}</p>
                  <p className="text-sm text-gray-600">{stat.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Approach */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Our Investment Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white text-black p-8">
                <Shield className="mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">De-Risked Model</h3>
                <p>Pre-validated concepts with proven demand and established corporate partnerships before significant capital deployment.</p>
              </div>
              <div className="bg-white text-black p-8">
                <BarChart className="mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Sustainable Growth</h3>
                <p>Focus on profitability and sustainable growth rather than excessive capital consumption.</p>
              </div>
              <div className="bg-white text-black p-8">
                <TrendingUp className="mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Efficient Scale</h3>
                <p>Systematic approach to launching new academies with shared infrastructure and proven playbooks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-20 px-6 bg-white text-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Market Impact & Opportunity</h2>
            <div className="space-y-8">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="flex items-start">
                  <TrendingUp className="mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
                    <p className="text-gray-600 mb-2">{metric.description}</p>
                    <p className="text-sm text-gray-500">{metric.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ESG Impact */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Sustainable Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white text-black p-8">
                <Users className="mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Social Impact</h3>
                <p>Creating accessible pathways to high-demand careers and enabling economic mobility through skills development.</p>
              </div>
              <div className="bg-white text-black p-8">
                <Globe className="mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Economic Impact</h3>
                <p>Addressing critical workforce gaps and enabling digital transformation across industries.</p>
              </div>
              <div className="bg-white text-black p-8">
                <TrendingUp className="mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Governance</h3>
                <p>Transparent, sustainable business model with clear metrics and accountability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 bg-white text-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
            <p className="text-xl mb-8">
              Learn more about our approach to building sustainable education businesses.
            </p>
            <a href="mailto:contact@11pioneers.com" className="inline-flex items-center bg-black text-white px-8 py-3 hover:opacity-80 transition-opacity">
              <span>Schedule a Discussion</span>
              <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InvestorsPage;
