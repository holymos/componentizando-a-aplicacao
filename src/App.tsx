import { useState } from "react";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";
import { SideBar } from "./components/SideBar";
import Header from "./components/Header";
import { Content } from "./components/Content";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        genres={genres}
        setSelectedGenreId={setSelectedGenreId}
        selectedGenreId={selectedGenreId}
        setGenres={setGenres}
      />

      <div className="container">
        <Header selectedGenre={selectedGenre} />

        <Content
          movies={movies}
          selectedGenreId={selectedGenreId}
          setSelectedGenre={setSelectedGenre}
          setMovies={setMovies}
        />
      </div>
    </div>
  );
}
