import { useEffect } from 'react';
import { useEnquiry } from '@/context/EnquiryContext';

const SESSION_KEY = 'hariom-enquiry-shown';

export default function AutoEnquiryTrigger() {
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === '1';
    } catch {
      /* ignore */
    }
    if (seen) return;

    const timer = setTimeout(() => {
      openEnquiry('Enquire Now');
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        /* ignore */
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [openEnquiry]);

  return null;
}
