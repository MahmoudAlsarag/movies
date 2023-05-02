import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function ItemDetails() {
    let { id, media_type } = useParams();
    // console.log(id, media_type);
    const [itemDetails, setitemDetails] = useState({})

    async function getDetails(id, media_type) {
        let { data } =
            await
                axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=ee839d64c170e2609474ffb3f7618206&language=en-US`)
        setitemDetails(data)
        console.log(data);
    }
    useEffect(() => {
        getDetails(id, media_type)
    }, [])

    return <>
        <div className="row">
            <div className='col-md-4'>
                {itemDetails.poster_path ?
                    <img src={'https://image.tmdb.org/t/p/w500' + itemDetails.poster_path} className='w-100' alt="" /> :
                    <img src={'https://image.tmdb.org/t/p/w500' + itemDetails.profile_path} className='w-100' alt="" />}
            </div>
            <div className="col-md-8">
                <h2 className='mt-5'>{itemDetails.title} {itemDetails.name}</h2>
                <p className='text-muted my-2 py-2'>{itemDetails.overview}</p>
                {itemDetails.vote_average ? <div className=''>Vote : {itemDetails.vote_average}</div> : ''}
                {itemDetails.vote_count ? <div className=''>Vote Count : {itemDetails.vote_count}</div> : ''}
                {itemDetails.release_date ? <div className=''>Release Date : {itemDetails.release_date}</div> : ''}
                {itemDetails.original_title ? <div className=''>Original title  : {itemDetails.original_title}</div> : ''}
                {itemDetails.birthday ? <div className=' my-3'> birthday  : {itemDetails.birthday}</div> : ''}
                {itemDetails.biography ? <div className='  '>{itemDetails.biography}</div>
                    : ''}

            </div>
        </div>
    </>
}

