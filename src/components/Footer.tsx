"use client";

const APPSTORE_URL = "https://apps.apple.com/us/app/mira-studio/id6754275249";
const PLAYSTORE_URL =
  "https://play.google.com/store/apps/details?id=com.mirastudio.app";
const INSTAGRAM_URL = "https://www.instagram.com/mirastudio.match/";
const TIKTOK_URL = "https://www.tiktok.com/@mirastudio.match";

export default function Footer() {
  return (
    <footer className="bg-earth text-cream">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Prêt(e) à relever le défi ?
          </h2>
          <p className="text-stone-light text-base sm:text-lg mb-8 max-w-lg mx-auto">
            Télécharge MIRA Studio, crée ton design et tente de gagner ta tenue de rêve !
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={APPSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-earth font-semibold px-6 py-3 rounded-full hover:bg-gold-light transition-colors duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href={PLAYSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-cream font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-colors duration-200 border border-white/10"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.49c.25.44.68.72 1.15.72.18 0 .37-.04.54-.12L12 20.47l7.13 3.62c.17.08.36.12.54.12.47 0 .9-.28 1.15-.72.37-.65.15-1.47-.49-1.84L13 17.81V6.19l7.33-3.84c.64-.37.86-1.19.49-1.84-.37-.65-1.19-.86-1.84-.49L12 3.53 4.98.02C4.33-.35 3.51-.14 3.14.51c-.37.65-.15 1.47.49 1.84L11 6.19v11.62l-7.33 3.84c-.64.37-.86 1.19-.49 1.84z" />
              </svg>
              Android (Beta)
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="font-[family-name:var(--font-display)] text-xl font-bold">
                MIRA
              </span>
              <span className="text-xs font-medium text-gold tracking-widest uppercase">
                Studio
              </span>
            </div>
            <p className="text-sm text-stone-light mt-2">
              La mode africaine, réinventée par l&apos;IA.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all duration-200"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all duration-200"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.1a8.16 8.16 0 005.58 2.2V11.3a4.85 4.85 0 01-3.77-1.84V6.69h3.77z" />
              </svg>
            </a>
          </div>

          {/* Legal */}
          <div className="text-center md:text-right">
            <a
              href="#"
              className="text-sm text-stone-light hover:text-gold transition-colors duration-200"
            >
              Règlement du concours
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-stone-light">
            &copy; {new Date().getFullYear()} MIRA Studio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
