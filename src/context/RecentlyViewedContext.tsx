import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface RecentlyViewedState {
  viewed: string[];
  add: (id: string) => void;
}

const RecentlyViewedContext = createContext<RecentlyViewedState | undefined>(undefined);

const STORAGE_KEY = 'hariom-recently-viewed';

function load(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function RecentlyViewedProvider({ children }: { children: ReactNode }) {
  const [viewed, setViewed] = useState<string[]>(() => load());

  // useCallback ensures `add` is stable across renders.
  // Without this, PropertyDetailPage's useEffect([property, add]) would fire
  // in an infinite loop, corrupting navigation state after back-navigation.
  const add = useCallback((id: string) => {
    setViewed((prev) => {
      const next = [id, ...prev.filter((v) => v !== id)].slice(0, 6);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return (
    <RecentlyViewedContext.Provider value={{ viewed, add }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const ctx = useContext(RecentlyViewedContext);
  if (!ctx) throw new Error('useRecentlyViewed must be used within RecentlyViewedProvider');
  return ctx;
}

