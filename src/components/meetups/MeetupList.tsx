import { Meetup } from "../../model/meetup.model";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.scss";

type Props = {
  list: Meetup[];
};
function MeetupList({ list }: Props) {
  return (
    <ul className={classes.list}>
      {list.map((item: Meetup) => (
        <MeetupItem key={item.id} meetup={item} />
      ))}
    </ul>
  );
}

export default MeetupList;
