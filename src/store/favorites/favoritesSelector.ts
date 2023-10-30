const getFavorites = (state: {
  favorites: {
    favorites: any;
  };
}) => state.favorites.favorites;

export const favaritesSelectors = { getFavorites };