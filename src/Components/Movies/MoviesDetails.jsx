import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MoviesDetails() {
  let { id, movie } = useParams();
  // console.log(id, media_type);
  const [MoviesDetails, setMoviesDetails] = useState({})

  async function getDetails(id, movie) {
    let { data } =
      await axios.get(` https://api.themoviedb.org/3/discover/movie?api_key=ee839d64c170e2609474ffb3f7618206&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${id}`)
    setMoviesDetails(data)
    console.log(data);
  }
  useEffect(() => {
    getDetails(id, movie)
  }, [])
  return <>
    <div className="row">
      <div className='col-md-4'>
        <img src={'https://image.tmdb.org/t/p/w500' + MoviesDetails.poster_path} className='w-100' alt="" />
      </div>

      <div className="col-md-4">
        <h2 className='mt-5'>{MoviesDetails.title} {MoviesDetails.name}</h2>
        <p className='text-muted my-2 py-2'>{MoviesDetails.overview}</p>
      </div>
    </div>
  </>

}
