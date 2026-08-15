import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans text-navy antialiased flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}
