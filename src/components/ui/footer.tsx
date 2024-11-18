import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} 11 Pioneers GmbH. Alle Rechte vorbehalten.
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="/kontakt" className="text-gray-400 hover:text-white transition-colors">
            Kontakt
          </a>
          <a href="/impressum" className="text-gray-400 hover:text-white transition-colors">
            Impressum
          </a>
          <a href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
