import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealId, setFavoriteMealId] = useState([]);

  function addFavorite(id) {
    setFavoriteMealId((currenFavIds) => [...currenFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealId((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value={
    ids:favoriteMealId,
    addFavorite:addFavorite,
    removeFavorite:removeFavorite
  }
  return <FavoritesContextProvider value={value}>{children}</FavoritesContextProvider>;
}

export default FavoritesContextProvider;
