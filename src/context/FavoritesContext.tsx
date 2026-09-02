import { createContext, useContext, useState, type ReactNode } from 'react';

interface FavoritesState {
  favorites: string[];
  toggle: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clear: () => void;
}

const FavoritesContext = createContext<FavoritesState | undefined>(undefined);

const STORAGE_KEY = 'hariom-favorites';

function loadFavorites(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>(() => loadFavorites());

  const persist = (next: string[]) => {
    setFavorites(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const toggle = (id: string) => {
    persist(
      favorites.includes(id) ? favorites.filter((f) => f !== id) : [...favorites, id]
    );
  };

  const isFavorite = (id: string) => favorites.includes(id);
  const clear = () => persist([]);

  return (
    <FavoritesContext.Provider value={{ favorites, toggle, isFavorite, clear }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
}
