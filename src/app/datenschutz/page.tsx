import React from 'react';

const DatenschutzPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow pt-20">
        {/* Datenschutz Content */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">Datenschutzerklärung</h1>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
                <p className="text-gray-300">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                  wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                  werden können.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="text-xl font-semibold mb-2">Verantwortliche Stelle</h3>
                <p className="text-gray-300">
                  11 Pioneers GmbH<br />
                  Sample Street 123<br />
                  10115 Berlin<br />
                  Deutschland<br /><br />
                  E-Mail: privacy@11pioneers.com<br />
                  Telefon: +49 (0) 30 123456789
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Datenerfassung auf dieser Website</h2>
                <h3 className="text-xl font-semibold mb-2">Cookies</h3>
                <p className="text-gray-300">
                  Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. 
                  Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Analyse-Tools und Tools von Drittanbietern</h2>
                <h3 className="text-xl font-semibold mb-2">Google Analytics</h3>
                <p className="text-gray-300">
                  Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited, 
                  Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Ihre Rechte</h2>
                <p className="text-gray-300">
                  Sie haben folgende Rechte gemäß der DSGVO:<br /><br />
                  • Recht auf Auskunft (Art. 15 DSGVO)<br />
                  • Recht auf Berichtigung (Art. 16 DSGVO)<br />
                  • Recht auf Löschung (Art. 17 DSGVO)<br />
                  • Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)<br />
                  • Recht auf Datenübertragbarkeit (Art. 20 DSGVO)<br />
                  • Recht auf Widerspruch (Art. 21 DSGVO)
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. SSL- bzw. TLS-Verschlüsselung</h2>
                <p className="text-gray-300">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
                  SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                  des Browsers von "http://" auf "https://" wechselt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Änderung unserer Datenschutzbestimmungen</h2>
                <p className="text-gray-300">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen 
                  Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. 
                  Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Fragen an den Datenschutzbeauftragten</h2>
                <p className="text-gray-300">
                  Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt 
                  an die für den Datenschutz verantwortliche Person in unserer Organisation:<br /><br />
                  Datenschutzbeauftragter<br />
                  11 Pioneers GmbH<br />
                  Sample Street 123<br />
                  10115 Berlin<br />
                  E-Mail: dpo@11pioneers.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DatenschutzPage;
