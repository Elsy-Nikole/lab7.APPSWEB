const STORAGE_KEY = 'favoriteCountries';

export function getFavorites(): string[] {
  const data = localStorage.getItem(STORAGE_KEY); // <-- usar STORAGE_KEY
  return data ? JSON.parse(data) : [];
}

export function toggleFavorite(code: string): void {
  const favorites = getFavorites();
  if (favorites.includes(code)) {
    const index = favorites.indexOf(code);
    favorites.splice(index, 1);
  } else {
    favorites.push(code);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites)); // <-- usar STORAGE_KEY
}

export function saveFavorites(favorites: string[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}