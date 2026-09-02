import { createContext, useContext, useState, type ReactNode } from 'react';

interface CompareState {
  compareList: string[];
  toggle: (id: string) => void;
  isComparing: (id: string) => boolean;
  clear: () => void;
  openDrawer: boolean;
  setOpenDrawer: (v: boolean) => void;
}

const CompareContext = createContext<CompareState | undefined>(undefined);

const STORAGE_KEY = 'hariom-compare';

function load(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareList, setCompareList] = useState<string[]>(() => load());
  const [openDrawer, setOpenDrawer] = useState(false);

  const persist = (next: string[]) => {
    setCompareList(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const toggle = (id: string) => {
    const next = compareList.includes(id)
      ? compareList.filter((c) => c !== id)
      : compareList.length >= 4
        ? [...compareList.slice(1), id]
        : [...compareList, id];
    persist(next);
    if (next.length > 0) setOpenDrawer(true);
  };

  return (
    <CompareContext.Provider
      value={{
        compareList,
        toggle,
        isComparing: (id) => compareList.includes(id),
        clear: () => persist([]),
        openDrawer,
        setOpenDrawer,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error('useCompare must be used within CompareProvider');
  return ctx;
}
