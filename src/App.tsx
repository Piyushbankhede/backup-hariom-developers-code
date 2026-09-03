import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';

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

/**
 * Closes any open modals/overlays when the route changes.
 * This prevents invisible overlay elements from blocking navbar clicks
 * after navigating away from a page that had an open modal.
 */
function ModalCloseOnRouteChange() {
  const location = useLocation();
  useEffect(() => {
    // Dispatch a custom event so any open modal can listen and close itself
    window.dispatchEvent(new CustomEvent('routechange'));
  }, [location.pathname]);
  return null;
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
              <ModalCloseOnRouteChange />
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">
                  <Suspense fallback={<PageLoader />}>
                    <Routes>
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
