import { createContext, ReactNode } from "react";
import useLocalStorage from "../hook/useLocalStorage";
import { Meetup } from "../model/meetup.model";


const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  // Aggiungo la dichiarazione di queste funzione
  // per avere l'autocomplete quando verranno usate 
  addFavourite: (favouriteMeetup: Meetup) => {},
  removeFavourite: (id: string) => {},
  itemIsFavourite: (id: string) => {},
});
type Props = {
  children: ReactNode
};
export function FavouritesContextProvider({ children }: Props) {
  const [userFav, setUserFav] = useLocalStorage<Meetup[]>("favouritesMeeting",[]);

  function addFavHandler(favouriteMeetup: Meetup) {
    // utilizzo una funzione così è in coda ad altre
    // eventuali lavorazioni e sono sicuro che lo stato
    // che vado a usare è veramente lo stato aggiornato
    setUserFav((prevUserFav: Meetup[]) => prevUserFav.concat(favouriteMeetup));
  }

  function removeFavouriteHandler(id: string) {
    setUserFav((prevUserFav: Meetup[]) => prevUserFav.filter((m: Meetup) => m.id !== id));
  }

  function itemIsFavouriteHandler(id: string): boolean {
    return userFav.some((m: Meetup) => m.id === id);
  }

  const context = {
    favourites: userFav,
    totalFavourites: userFav.length,
    addFavourite: addFavHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;