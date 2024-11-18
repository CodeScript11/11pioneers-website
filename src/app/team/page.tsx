import React from 'react';
import { Linkedin } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      position: "Managing Partner",
      linkedin: "https://linkedin.com/in/placeholder1"
    },
    {
      name: "Michael Chen",
      position: "Head of Academy Operations",
      linkedin: "https://linkedin.com/in/placeholder2"
    },
    {
      name: "Dr. Julia Weber",
      position: "Chief Learning Officer",
      linkedin: "https://linkedin.com/in/placeholder3"
    },
    {
      name: "Tom Harris",
      position: "Head of Technology",
      linkedin: "https://linkedin.com/in/placeholder4"
    },
    {
      name: "Elena Rodriguez",
      position: "Head of Growth",
      linkedin: "https://linkedin.com/in/placeholder5"
    }
  ];

  const advisors = [
    {
      name: "Prof. David Anderson",
      position: "Former Dean, Harvard Business School",
      linkedin: "https://linkedin.com/in/advisor1"
    },
    {
      name: "Lisa Zhang",
      position: "Founder, EdTech Ventures",
      linkedin: "https://linkedin.com/in/advisor2"
    },
    {
      name: "Dr. Robert Miller",
      position: "AI Education Pioneer",
      linkedin: "https://linkedin.com/in/advisor3"
    },
    {
      name: "Maria Sanchez",
      position: "Serial EdTech Entrepreneur",
      linkedin: "https://linkedin.com/in/advisor4"
    },
    {
      name: "James Wilson",
      position: "Education Investment Partner",
      linkedin: "https://linkedin.com/in/advisor5"
    },
    {
      name: "Dr. Emily Chang",
      position: "Learning Innovation Expert",
      linkedin: "https://linkedin.com/in/advisor6"
    },
    {
      name: "Alexander Schmidt",
      position: "Scale-up Growth Advisor",
      linkedin: "https://linkedin.com/in/advisor7"
    },
    {
      name: "Sophie Laurent",
      position: "Corporate L&D Leader",
      linkedin: "https://linkedin.com/in/advisor8"
    },
    {
      name: "Dr. Marcus Brown",
      position: "Digital Learning Strategist",
      linkedin: "https://linkedin.com/in/advisor9"
    },
    {
      name: "Nina Patel",
      position: "Future of Work Expert",
      linkedin: "https://linkedin.com/in/advisor10"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow pt-20">
        {/* Vision Statement */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-12">Our Team</h1>
            <p className="text-xl leading-relaxed text-gray-300">
              We are a collective of education innovators, technology pioneers, and business builders 
              united by a singular mission: to revolutionize professional education. Our team brings 
              together decades of experience in scaling education businesses, developing cutting-edge 
              learning experiences, and building category-defining companies. Together with our network 
              of industry-leading advisors, we're creating the blueprint for the future of skills-based education.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 bg-white text-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-64 h-64 bg-gray-200 mb-4">
                    <img 
                      src={`/api/placeholder/256/256`} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.position}</p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:opacity-70 transition-opacity"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisors Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Advisory Board</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {advisors.map((advisor, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-48 h-48 bg-white mb-4">
                    <img 
                      src={`/api/placeholder/192/192`} 
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-center">{advisor.name}</h3>
                  <p className="text-gray-400 text-sm mb-2 text-center">{advisor.position}</p>
                  <a 
                    href={advisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:opacity-70 transition-opacity"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeamPage;
