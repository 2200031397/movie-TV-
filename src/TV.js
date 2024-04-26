import React, { useState, useEffect } from 'react';
import './toprated.css'; // Import CSS file

function TV() {
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
      const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=9638dc18be13b6d70ff0084639d06894&language=en-US');
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
    return (
        <div className="co">
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
                        <li><a href="#">TV</a></li>
                    </ul>
                </nav>
            </header>
            <main>
            <main>
                <div className="App">
                <h1>Top Rated Movies</h1>
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
            </main>
            
        </div>
    );
}

export default TV;
