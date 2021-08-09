import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { Meetup } from "../model/meetup.model";
import * as Util from "../util/util-api";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [meetupList, setMeetupList] = useState<Meetup[]>([]);

  useEffect(() => {
    setIsLoading(true);

    Util.getMeetupList()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetupListTemp: Meetup[] = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetupListTemp.push(meetup);
        }

        setIsLoading(false);
        setMeetupList(meetupListTemp);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  } else {
    return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList list={meetupList} />
      </section>
    );
  }
}

export default AllMeetupsPage;
