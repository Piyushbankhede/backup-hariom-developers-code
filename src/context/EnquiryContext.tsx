import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface EnquiryState {
  open: boolean;
  triggerLabel: string;
  openEnquiry: (label?: string) => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryState | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [triggerLabel, setTriggerLabel] = useState('Enquire Now');

  const openEnquiry = (label = 'Enquire Now') => {
    setTriggerLabel(label);
    setOpen(true);
  };
  const closeEnquiry = () => setOpen(false);

  // Close popup on route change so it doesn't block navbar links
  useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    window.addEventListener('routechange', handleRouteChange);
    return () => window.removeEventListener('routechange', handleRouteChange);
  }, []);

  return (
    <EnquiryContext.Provider value={{ open, triggerLabel, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error('useEnquiry must be used within EnquiryProvider');
  return ctx;
}
