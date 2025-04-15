// Favorites context and storage management

export interface FavoritesContextType {
  favorites: string[]
  addFavorite: (songId: string) => void
  removeFavorite: (songId: string) => void
  isFavorite: (songId: string) => boolean
}

export const getFavorites = (): string[] => {
  if (typeof window === "undefined") return []
  const favorites = localStorage.getItem("favorites")
  return favorites ? JSON.parse(favorites) : []
}

export const addFavorite = (songId: string) => {
  const favorites = getFavorites()
  if (!favorites.includes(songId)) {
    favorites.push(songId)
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }
}

export const removeFavorite = (songId: string) => {
  const favorites = getFavorites()
  const updatedFavorites = favorites.filter(id => id !== songId)
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
}

export const isFavorite = (songId: string): boolean => {
  const favorites = getFavorites()
  return favorites.includes(songId)
}
