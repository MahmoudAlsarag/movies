import React from 'react'

export default function MediaItem(item) {
    return <>
        <div className="col-md-2">
            <img src={'https://image.tmdb.org/t/p/w500' + item.poster_path} className='w-100' alt="" />
            <h4 className='h6 my-2'>{item.titel}</h4>
        </div>

    </>
}
