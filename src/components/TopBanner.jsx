import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Globe, X } from 'lucide-react';

export default function TopBanner() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileBanner, setShowMobileBanner] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isHome) return null;

  const appleLogo = (
    <svg viewBox="0 0 384 512" width="14" height="14" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
  );

  const playLogo = (
    <svg viewBox="0 0 512 512" width="14" height="14" fill="currentColor">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
    </svg>
  );

  const handleAppClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const Popup = () => {
    if (!showPopup) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/40 backdrop-blur-sm p-4">
        <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center relative shadow-2xl animate-fade-scale">
          <button 
            onClick={() => setShowPopup(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="w-16 h-16 bg-teal-50 text-teal rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-navy mb-2">Coming Soon!</h3>
          <p className="text-gray-600 text-sm mb-6">Our mobile application is currently in development and will be available to download soon.</p>
          <button 
            onClick={() => setShowPopup(false)}
            className="w-full py-2.5 bg-teal text-white rounded-xl font-medium hover:bg-teal-600 transition-colors"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    );
  };

  if (isMobile) {
    if (!showMobileBanner) return (
      <>
        <Popup />
      </>
    );
    return (
      <>
        <Popup />
        <div className="bg-navy text-white px-4 py-3 text-sm flex flex-col items-center justify-center gap-3 shadow-md relative w-full z-50">
          <button onClick={() => setShowMobileBanner(false)} className="absolute top-2 right-2 text-white/60 hover:text-white p-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="flex flex-col text-center w-full mt-2">
            <span className="font-bold text-base">Experience BriamsHealth on the go!</span>
            <span className="text-xs text-white/80 mt-1">Download our app for the best experience.</span>
          </div>
          <div className="flex items-center gap-3 w-full justify-center mt-1">
            <a href="#" onClick={handleAppClick} className="flex items-center justify-center gap-2 bg-white text-navy px-4 py-2 rounded-full font-medium text-xs hover:bg-gray-100 transition-colors w-1/2 max-w-[140px]">
              {appleLogo} iOS
            </a>
            <a href="#" onClick={handleAppClick} className="flex items-center justify-center gap-2 bg-white text-navy px-4 py-2 rounded-full font-medium text-xs hover:bg-gray-100 transition-colors w-1/2 max-w-[140px]">
              {playLogo} Android
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Popup />
      <div className="bg-white text-navy px-4 md:px-8 py-2.5 text-sm flex flex-wrap items-center justify-end gap-6 relative z-50 w-full">
        <a href="https://curevirtual.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold hover:text-teal-700 transition-colors text-[15px]">
          <Globe size={18} className="text-teal-600" />
          Consult Online (Web)
        </a>
        <div className="w-px h-5 bg-teal-200"></div>
        <div className="flex items-center gap-3">
          <span className="text-gray-600 font-medium">Download App:</span>
          <div className="flex items-center gap-2">
            <a href="#" onClick={handleAppClick} className="flex items-center gap-2 bg-navy text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-navy/90 transition-colors shadow-sm cursor-pointer">
              {appleLogo} App Store
            </a>
            <a href="#" onClick={handleAppClick} className="flex items-center gap-2 bg-navy text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-navy/90 transition-colors shadow-sm cursor-pointer">
              {playLogo} Google Play
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
