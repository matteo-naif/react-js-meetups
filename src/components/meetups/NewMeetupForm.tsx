import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.scss";
import React from "react";
import { Meetup } from "../../model/meetup.model";
import Button from "../ui/Button";

type Props = {
  onAddMeetup: (meetup: Meetup) => void;
};
function NewMeetupForm({ onAddMeetup }: Props) {
  const titleInputRef = React.createRef<HTMLInputElement>();
  const imageInputRef = React.createRef<HTMLInputElement>();
  const addressInputRef = React.createRef<HTMLInputElement>();
  const descriptionInputRef = React.createRef<HTMLTextAreaElement>();

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const meetupData: Meetup = {
      title: titleInputRef?.current?.value!,
      image: imageInputRef?.current?.value!,
      address: addressInputRef?.current?.value!,
      description: descriptionInputRef?.current?.value!,
    };
    onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <Button label="Add Meetup" type="submit" appearance='flat'></Button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
