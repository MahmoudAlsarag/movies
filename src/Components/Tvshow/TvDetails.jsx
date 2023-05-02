import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function TvDetails() {
    let { id, tv } = useParams();
    // console.log(id, media_type);
    const [TvDetails, setTvDetails] = useState({})

    async function getDetails(id, tv) {
        let { data } =
            await axios.get(` https://api.themoviedb.org/3/discover/tv?api_key=ee839d64c170e2609474ffb3f7618206&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${id}`)
        setTvDetails(data)
        // console.log(data);
    }
    useEffect(() => {
        getDetails(id, tv)
    }, [])
    return <>
        <div className="row">
            <div className='col-md-4'>
                <img src={'https://image.tmdb.org/t/p/w500' + TvDetails.poster_path} className='w-100' alt="" />
            </div>

            <div className="col-md-4">
                <h2 className='mt-5'>{TvDetails.title} {TvDetails.name}</h2>
                <p className='text-muted my-2 py-2'>{TvDetails.overview}</p>
            </div>
        </div>

    </>
}
