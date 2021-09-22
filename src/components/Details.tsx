import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";

interface Song {
  id: number;
  title: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  preview: string;
  artist: {
    name: string;
  };
  album: {
    title: string;
    cover: string;
  };
}

type MixedProps = RouteComponentProps & Song;

const Details = ({ history, location, match, id }: MixedProps) => {
  const [song, setSong] = useState<null | Song>(null);

  const fetchData = async () => {
    let id = location.pathname.substring(1);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/track/" + id
      );
      if (response.ok) {
        let data = await response.json();
        setSong(data);
        console.log(song);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dit-cont">
      <h1>{song?.title}</h1>
    </div>
  );
};

export default Details;
