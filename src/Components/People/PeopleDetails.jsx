import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function PeopleDetails() {
  let { id, People } = useParams();
  // console.log(id, media_type);
  const [PeopleDetails, setPeopleDetails] = useState({})

  async function getDetails(id, People) {
    let { data } =
      await
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=ee839d64c170e2609474ffb3f7618206&language=en-US&page=${id}`)
    setPeopleDetails(data)
    console.log(data);
  }
  useEffect(() => {
    getDetails(id, People)
  }, [])

  return <>
    <div className="row">
      <div className='col-md-4'>
        {PeopleDetails.poster_path ?
          <img src={'https://image.tmdb.org/t/p/w500' + PeopleDetails.poster_path} className='w-100' alt="" /> :
          <img src={'https://image.tmdb.org/t/p/w500' + PeopleDetails.profile_path} className='w-100' alt="" />}
      </div>
      <div className="col-md-8">
        <h2 className='mt-5'>{PeopleDetails.title} {PeopleDetails.name}</h2>
        <p className='text-muted my-2 py-2'>{PeopleDetails.overview}</p>
        {PeopleDetails.vote_average ? <div className=''>Vote : {PeopleDetails.vote_average}</div> : ''}
        {PeopleDetails.vote_count ? <div className=''>Vote Count : {PeopleDetails.vote_count}</div> : ''}
        {PeopleDetails.release_date ? <div className=''>Release Date : {PeopleDetails.release_date}</div> : ''}
        {PeopleDetails.original_title ? <div className=''>Original title  : {PeopleDetails.original_title}</div> : ''}
        {PeopleDetails.birthday ? <div className=' my-3'> birthday  : {PeopleDetails.birthday}</div> : ''}
        {PeopleDetails.biography ? <div className='  '>{PeopleDetails.biography}</div>
          : ''}

      </div>
    </div>
  </>

}
