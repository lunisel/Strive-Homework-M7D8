import { ChangeEvent, useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { RouteComponentProps } from "react-router";

type MixedProps = RouteComponentProps;

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
    cover: string
  };
}

const Home = ({ location }: MixedProps) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState("");

  const handleInput = (value: string | boolean, nameState: string) => {
    if (nameState === "query") {
      setQuery(value as string);
    } else if (nameState === "isLoading") {
      setIsLoading(value as boolean);
    }
  };

  const fetchData = async (query: string | null, nameState: string) => {
    if (query === null) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=sunshine"
        );
        if (response.ok) {
          let data = await response.json();
          let song = await data.data;
          setSongs(song);
          console.log(songs);
        }
      } catch (err) {
        console.log(err);
      }
    } else if (nameState === "search") {
      if (query !== "") {
        let response = await fetch(
          ("https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            query) as string
        );
        if (response.ok) {
          let data = await response.json();
          let song = await data.data;
          setSongs(song);
          console.log(songs);
        }
      }
    }
  };

  useEffect(() => {
    fetchData(null, "first");
  }, []);

  useEffect(() => {
    fetchData(query, "search");
  }, [query]);

  return (
    <div className="big-cont">
      <h1 className="main-title" onClick={() => fetchData(null, "first")}>
        Search for New Music
      </h1>

      <div className="home-cont">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInput(e.target.value, "query")
          }
          className="search-bar"
        />
        <Row className="row-cont">
          {songs?.map((song) => (
            <Col xs={12} md={3} lg={2}>
              <Card className="card-cont">
                <Card.Body>
                  <img
                    src={song.album.cover}
                    alt="song-cover"
                    className="img-fluid cover"
                  />
                  <Card.Title>{song.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {song.artist.name}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
