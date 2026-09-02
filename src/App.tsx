import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, lazy } from 'react';

import { EnquiryProvider } from '@/context/EnquiryContext';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { CompareProvider } from '@/context/CompareContext';
import { RecentlyViewedProvider } from '@/context/RecentlyViewedContext';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnquiryPopup from '@/components/EnquiryPopup';
import FloatingActions, { MobileBottomBar } from '@/components/FloatingActions';
import CompareDrawer from '@/components/CompareDrawer';
import ScrollToTop from '@/components/ScrollToTop';
import AutoEnquiryTrigger from '@/components/AutoEnquiryTrigger';

const HomePage = lazy(() => import('@/pages/HomePage'));
const PropertiesPage = lazy(() => import('@/pages/PropertiesPage'));
const PropertyDetailPage = lazy(() => import('@/pages/PropertyDetailPage'));
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const ComparePage = lazy(() => import('@/pages/ComparePage'));
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function PageLoader() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="flex flex-col items-center gap-3">
        <span className="h-10 w-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        <p className="text-sm text-gray-500">Loading…</p>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/properties/compare" element={<ComparePage />} />
            <Route path="/properties/:id" element={<PropertyDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <EnquiryProvider>
        <FavoritesProvider>
          <CompareProvider>
            <RecentlyViewedProvider>
              <ScrollToTop />
              <AutoEnquiryTrigger />
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">
                  <AnimatedRoutes />
                </main>
                <Footer />
              </div>
              <EnquiryPopup />
              <CompareDrawer />
              <FloatingActions />
              <MobileBottomBar />
              <div className="h-14 lg:hidden" aria-hidden />
            </RecentlyViewedProvider>
          </CompareProvider>
        </FavoritesProvider>
      </EnquiryProvider>
    </BrowserRouter>
  );
}
