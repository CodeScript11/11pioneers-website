import React from 'react';

const ImpressumPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow pt-20">
        {/* Impressum Content */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">Impressum</h1>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Company Information</h2>
                <p className="text-gray-300">
                  11 Pioneers GmbH<br />
                  Sample Street 123<br />
                  10115 Berlin<br />
                  Germany
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <p className="text-gray-300">
                  Email: contact@11pioneers.com<br />
                  Phone: +49 (0) 30 123456789
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Legal Information</h2>
                <p className="text-gray-300">
                  Commercial Register: Amtsgericht Berlin-Charlottenburg<br />
                  Registration Number: HRB 123456<br />
                  VAT ID: DE123456789
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Managing Directors</h2>
                <p className="text-gray-300">
                  Sarah Mitchell<br />
                  Michael Chen
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Responsible for Content</h2>
                <p className="text-gray-300">
                  According to § 55 Abs. 2 RStV:<br />
                  Sarah Mitchell<br />
                  11 Pioneers GmbH<br />
                  Sample Street 123<br />
                  10115 Berlin
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
                <p className="text-gray-300">
                  The European Commission provides a platform for online dispute resolution (OS): 
                  https://ec.europa.eu/consumers/odr<br /><br />
                  We are not willing or obliged to participate in dispute resolution proceedings 
                  before a consumer arbitration board.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ImpressumPage;
