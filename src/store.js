import { createStore, action, persist } from 'easy-peasy';

export const store = createStore(
  persist({
    cardView: false,
    setCardView: action((state, payload) => {
      state.cardView = payload;
    }),
    favourites: [],
    setFavourites: action((state, payload) => {
      state.favourites.push(payload);
    }),
    removeFavourites: action((state, payload) => {
      return {
        ...state,
        favourites: state.favourites.filter(
          (fav) => fav.imdbID !== payload.imdbID
        ),
      };
    }),
  })
);
