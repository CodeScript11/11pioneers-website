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
                <h2 className="text-2xl font-bold mb-4">Anbieter</h2>
                <p className="text-gray-300">
                  11 Pioneers GmbH<br />
                  Kreuzstraße 33a<br />
                  66557 Illingen<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
                <p className="text-gray-300">
                  Email: fabian@11pioneers.com<br />
                  Telefon: +49 155/60544648
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Rechtliche Informationen</h2>
                <p className="text-gray-300">
                  Sitz der Gesellschaft: Illingen <br/>
                  Amtsgericht Saarbrücken </br>
                  HRB110229 </br>
                  Umsatzsteuer-ID:DE367885826 </br>
                  

                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Vertreten durch den Geschäftsführer</h2>
                <p className="text-gray-300">
                  Fabian Klein
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Haftungshinweis</h2>
                <p className="text-gray-300">
                 
                Die 11 Pioneers GmbH übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen.
                Haftungsansprüche gegenüber der 11 Pioneers GmbH, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens der 11 Pioneers GmbH kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich.

                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Streitbeilegung</h2>
                <p className="text-gray-300">
                  Informationen zur Streitbeilegung mit Verbrauchern: 
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit, die Sie unter <a href="http://ec.europa.eu/consumers/odr/">http://ec.europa.eu/consumers/odr/</a> finden.
                  Die 11 Pioneers GmbH nimmt nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil und ist hierzu auch nicht verpflichtet (Allgemeine Hinweispflicht gemäß § 36 VSBG).

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
