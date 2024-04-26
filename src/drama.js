import React from 'react';
import './drama.css'; 

function Drama() {
    function handleGenreChange(){
        let genres=document.getElementById("gen").value;
        window.location.replace(genres);

     }
    return (
        
        <div className="actcontainer">
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
            <div className="c">
                        <div className="movie-card">
                        <a href ='https://www.youtube.com/watch?v=Oqvly3MvlXA'>
                            <div className='balagam'>
                            
                            </div>
                            </a>
                            
                        </div>
                        <div className="movie-card">
                            <div className='gunturkarram'>

                            </div>
                          
                        </div>
                        <div className="movie-card">
                            <div className='guru'>

                            </div>
                           
                        </div>
                        <div className="movie-card">
                            <div className='animal'>

                            </div>
                          
                        </div>
                        <div className="movie-card">
                            <div className='lovestory'>

                            </div>
                           
                        </div>
                        <div className="movie-card">
                            <div className='pantam'>

                            </div>
                          
                        </div>

                    </div>
                    <div className="c">
                        <div className="movie-card">
                            <a href='https://www.youtube.com/watch?v=QliDRYaknmI'>
                            <div className='sham'>

                            </div>
                            </a>
                            
                        </div>
                        <div className="movie-card">
                            <div className='custady'>

                            </div>
                            
                        </div>
                        <div className="movie-card">
                            <div className='pk'>

                            </div>
                            
                        </div>
                        <div className="movie-card">
                            <div className='mage'>

                            </div>
                            
                        </div>
                        <div className="movie-card">
                            <div className='master'>

                            </div>
                            
                        </div>
                        
                    </div>
            </main>
            
        </div>
    );
}
export default Drama;
