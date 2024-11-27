import React from 'react';

const KontaktPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow pt-20">
        {/* Contact Content */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">Kontakt</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Büro Deutschland</h2>
                  <p className="text-gray-300">
                    11 Pioneers GmbH<br />
                    Kreuzstraße 33a<br />
                    66557 Illingen<br />
                    Deutschland
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Kontaktdaten</h2>
                  <p className="text-gray-300">
                    Email: fabian@11pioneers.com<br />
                    Telefon: +49 155/60544648
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Öffnungszeiten</h2>
                  <p className="text-gray-300">
                    Montag - Freitag<br />
                    09:00 - 18:00 Uhr
                  </p>
                </div>
              </div>

              {/* Contact Form 
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Kontaktformular</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Betreff
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white resize-none"
                    ></textarea>
                  </div>

                  <div className="text-sm text-gray-400">
                    * Pflichtfelder
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Standort</h2>
              <div className="w-full h-[400px] bg-white/10 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">
                  Hier wird eine interaktive Karte eingebunden
                </p>
              </div>
            </div>
          </div>
        </section>

          */}
      </main>
    </div>
  );
};

export default KontaktPage;
