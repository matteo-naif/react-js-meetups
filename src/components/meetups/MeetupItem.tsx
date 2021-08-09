import { useContext } from "react";
import { Meetup } from "../../model/meetup.model";
import FavouritesContext from "../../store/favourites-context";
import Button from "../ui/Button";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.scss";

type Props = {
  meetup: Meetup;
};
function MeetupItem({ meetup }: Props) {
  const favouriteCtx = useContext(FavouritesContext);

  // TODO: fix double convert
  const itemIsFavourite = favouriteCtx.itemIsFavourite(
    meetup.id!
  ) as unknown as boolean;

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favouriteCtx.removeFavourite(meetup.id!);
    } else {
      favouriteCtx.addFavourite({
        id: meetup.id,
        title: meetup.title,
        description: meetup.description,
        image: meetup.image,
        address: meetup.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <Button
            onClick={toggleFavouriteStatusHandler}
            label={(itemIsFavourite ? "Remove from" : "Add to") + " favourites"}
          />
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
