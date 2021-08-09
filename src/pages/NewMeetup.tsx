import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";
import * as Util from "../util/util-api";
import { Meetup } from "../model/meetup.model";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData: Meetup) {
    Util.postMeetup(meetupData)
      .then(() => history.replace("/"))
      .catch((err) => console.log(err));
  }

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
