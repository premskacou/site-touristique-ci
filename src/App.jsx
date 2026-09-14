import React, { useState, Suspense, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import PopularDestinations from './components/PopularDestinations';
import AdventuresCoverflow from './components/AdventuresCoverflow';
import CustomerReviews from './components/CustomerReviews';
import FAQSection from './components/FAQSection';
import FloatingSocials from './components/FloatingSocials';
import Footer from './components/Footer';

// Code-split heavy pages and modals for instant initial page loading
const DestinationsPage = lazy(() => import('./pages/DestinationsPage'));
const DestinationDetailPage = lazy(() => import('./pages/DestinationDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BookingModal = lazy(() => import('./components/BookingModal'));

// Ultra-lightweight transition fallback
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-amber-400/30 border-t-amber-400 animate-spin" />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDestinationId, setSelectedDestinationId] = useState('abidjan');
  const [currency, setCurrency] = useState('XOF');
  const [lang, setLang] = useState('FR');
  const [filterSearch, setFilterSearch] = useState('');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [initialDestination, setInitialDestination] = useState('');
  const [initialGuide, setInitialGuide] = useState('');

  const handleOpenBooking = (dest = '', guide = '') => {
    setInitialDestination(dest);
    setInitialGuide(guide);
    setBookingOpen(true);
  };

  const handleSearchDestination = (term) => {
    setFilterSearch(term);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDestination = (destId) => {
    if (destId) {
      setSelectedDestinationId(destId);
    }
    setCurrentPage('destination-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-100 flex flex-col font-sans selection:bg-akwaba-gold selection:text-slate-950 relative">
      {/* Fixed Navbar with Page Indicator & Routing */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        currency={currency}
        setCurrency={setCurrency}
        lang={lang}
        setLang={setLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Pinned Floating Social Bar on Scroll */}
      <FloatingSocials />

      {/* Main Content with Smooth Page Transitions */}
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            {currentPage === 'home' && (
              <motion.div
                key="home-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <Hero
                  onSearchDestination={handleSearchDestination}
                  onOpenBooking={() => handleOpenBooking()}
                />

                <WhoWeAre onNavigateAbout={() => handleNavigate('about')} />

                <PopularDestinations
                  onOpenBooking={(dest) => handleOpenBooking(dest)}
                  onNavigateToDestinations={() => handleNavigate('destinations')}
                  onSelectDestination={handleSelectDestination}
                />

                <AdventuresCoverflow
                  onOpenBooking={(dest) => handleOpenBooking(dest)}
                />

                <CustomerReviews
                  onOpenBooking={(dest) => handleOpenBooking(dest)}
                />

                <FAQSection
                  onOpenBooking={(dest) => handleOpenBooking(dest)}
                />
              </motion.div>
            )}

            {currentPage === 'destinations' && (
              <motion.div
                key="destinations-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <DestinationsPage
                  onOpenBooking={(dest) => handleOpenBooking(dest)}
                  onSelectDestination={handleSelectDestination}
                />
              </motion.div>
            )}

            {currentPage === 'destination-detail' && (
              <motion.div
                key={`destination-detail-${selectedDestinationId}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <DestinationDetailPage
                  destinationId={selectedDestinationId}
                  onBack={() => handleNavigate('destinations')}
                  onOpenBooking={(dest) => handleOpenBooking(dest)}
                  onNavigateHome={() => handleNavigate('home')}
                />
              </motion.div>
            )}

            {currentPage === 'about' && (
              <motion.div
                key="about-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <AboutPage
                  onOpenBooking={(dest, guide) => handleOpenBooking(dest, guide)}
                  onNavigateToDestinations={() => handleNavigate('destinations')}
                />
              </motion.div>
            )}

            {currentPage === 'contact' && (
              <motion.div
                key="contact-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <ContactPage
                  onNavigateToDestinations={() => handleNavigate('destinations')}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Suspense>
      </main>

      {/* Full-Screen Minimalist Footer (100vh) */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onNavigate={handleNavigate}
      />

      {/* Interactive Booking Modal (Code-split) */}
      {bookingOpen && (
        <Suspense fallback={null}>
          <BookingModal
            isOpen={bookingOpen}
            onClose={() => setBookingOpen(false)}
            initialDestination={initialDestination}
            initialGuide={initialGuide}
          />
        </Suspense>
      )}
    </div>
  );
}
