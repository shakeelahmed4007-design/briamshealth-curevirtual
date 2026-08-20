import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import TopBanner from './TopBanner';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans text-navy antialiased flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <TopBanner />
      <main className="flex-1">
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}
