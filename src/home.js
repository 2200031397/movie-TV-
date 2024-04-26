// Home.js

import React, { useState, useEffect } from 'react';
import './home.css'; // Import your CSS file for styling

function Home() {
    function handleGenreChange(){
            let genres=document.getElementById("gen").value;
            window.location.replace(genres);

    }
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=9638dc18be13b6d70ff0084639d06894&include_adult=false&language=en-US&page=1&sort_by=popularity.desc');
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
    return (
        <div>
        <div className="home">
            <header>
                <h1 className="title">Welcome to StreamSphere</h1>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/toprated">Top Rated</a></li>
                        <li>
                        <select id="gen" onChange={handleGenreChange}>
                                <option value="#" selected disabled>Select Genre</option>
                                <option value="/genres/action">Action</option>
                                <option value="/genres/comedy">Comedy</option>
                                <option value="/genres/drama">Drama</option>
                            </select>
                        </li>
                        <li><a href="/TV">TV</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <div className="App">
                <h1>Popular Movies</h1>
                <div className="movies-container">
                {movies.map((movie) => (
                <div key={movie.id} className="movie">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <h2>{movie.title}</h2>
                </div>
                ))}
                </div>
                </div>  
            </main>

            <footer>
                <p>&copy; 2024 StreamSphere</p>
            </footer>
        </div>
        </div>
    );
}

export default Home;
