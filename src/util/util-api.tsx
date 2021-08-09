import { Meetup } from "../model/meetup.model";

/**
 * Add your .env file in root directory
 * with your firebase endpoint
 */
const API_URL = process.env.REACT_APP_API_KEY;

export const postMeetup = (meetupData: Meetup) =>
  fetch(API_URL + "meetups.json", {
    method: "POST",
    body: JSON.stringify(meetupData),
    headers: { "Contet-type": "application/json" },
  });

export const getMeetupList = () => {
  console.log(API_URL);
  return fetch(API_URL + "meetups.json");
};
