import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import { Container, Button, } from 'react-bootstrap';

const App = () => {
  const [movies, setMovies] = useState([
    // Example movies
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 8.8,
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 9.0,
    },
    {
      title: 'The Mouse Trap',
      description: "It's Alex's 21st Birthday, but she's stuck at the amusement arcade on a late shift so her friends decide to surprise her, but a masked killer dressed as Mickey Mouse decides to play a game of his own with them which she must survive.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMzI0MmRhOGItM2UxYS00ZDI0LWExMDEtOWY3NWNlNjhlMTNjXkEyXkFqcGdeQXVyMTc5NTc4NDkx._V1_.jpg",
      rating: 5.5,
    },
    {
      title: 'Megamind vs The Doom Syndicate',
      description: "Megamind's former villain team, The Doom Syndicate, has returned. Our newly crowned blue hero must now keep up evil appearances until he can assemble his friends (Roxanne, Ol' Chum and Keiko) to stop his former evil teammates from launching Metro City to the Moon.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BOGVkMmU1YWUtNmJlNi00ODJhLWI4NWMtMjY3YTA3MDJjOTVlXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg",
      rating: 6.7,
    },
    {
      title: 'Godzilla X Kong : The New Empire',
      description: "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence and our own.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BY2QwOGE2NGQtMWQwNi00M2IzLThlNWItYWMzNGQ5YWNiZDA4XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
      rating: 9.5,
    },
    {
      title: 'Torque',
      description: "Biker Cary Ford is framed by an old rival and biker gang leader for the murder of another gang member who happens to be the brother of Trey, leader of the most feared biker gang in the country. Ford is now on the run trying to clear his name from the murder with Trey and his gang looking for his blood.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BODRmNjgxZjktNzM5MS00M2I0LTk5ZGYtMGE4NzQzOTUxOGY1XkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_FMjpg_UX1000_.jpg",
      rating: 8.7,
    },
    {
      title: 'The Avengers',
      description: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 9.0,
    },
    {
      title: 'Fast & Furious 6',
      description: "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets convoluted also facing his presumed deceased girlfriend, Letty.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_.jpg",
      rating: 10.0,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleAddMovie = () => {
    const newMovie = {
      title: 'New Movie',
      description: 'Description of new movie',
      posterURL: 'https://via.placeholder.com/150',
      rating: 7.0,
    };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRating = ratingFilter ? movie.rating >= ratingFilter : true;
    return matchesTitle && matchesRating;
  });

  return (
    <Container>
      <h1>Movie App</h1>
      <Button onClick={handleAddMovie} style={{ margin: '1rem' }}>Add New Movie</Button>
      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
    </Container>
  );
};

export default App;
