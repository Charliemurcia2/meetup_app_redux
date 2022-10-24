import React from "react";
import { useSelector } from "react-redux";

import MeetupList from "../components/meetups/MeetupList";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorite.favorites);
  const favoritesCount = useSelector((state) => state.favorite.totalFavorites);
  let content;
  if (favoritesCount === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default Favorites;
