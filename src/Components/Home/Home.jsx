import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Media from '../Media/Media';


export default function Home() {
  const [Movies, setMovies] = useState([]);
  const [Tv, setTv] = useState([]);
  const [People, setPeople] = useState([]);

  async function getTrending(mediaItem, callback) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaItem}/week?api_key=ee839d64c170e2609474ffb3f7618206`)
    callback(data.results)
    console.log(data.results);
  }
  useEffect(() => {
    getTrending('movie', setMovies)
    getTrending('tv', setTv)
    getTrending('person', setPeople)
  }, [])
  return <>
    <div className="row py-5">
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <div className="brdr w-25 mb-3"></div>
          <h2 className='h4'> Trending <br /> Movies <br /> Right Now</h2>
          <p className='text-muted'> Top Trending Movies By Week</p>
          <div className="brdr w-100 mb-3 "></div>

        </div>
      </div>
      {Movies.slice(0, 10).map((item, index) => <Media key={index} item={item} />)}
    </div>
    <div className="row py-5">
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <div className="brdr w-25 mb-3"></div>
          <h2 className='h4'> Trending <br /> Tv <br /> Right Now</h2>
          <p className='text-muted'> Top Trending Tv By Week</p>
          <div className="brdr w-100 mb-3 "></div>

        </div>
      </div>
      {Tv.slice(0, 10).map((item, index) => <Media key={index} item={item} />)}
    </div>
    <div className="row py-5">
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <div className="brdr w-25 mb-3"></div>
          <h2 className='h4'> Trending <br /> People <br /> Right Now</h2>
          <p className='text-muted'> Top Trending People By Week</p>
          <div className="brdr w-100 mb-3 "></div>

        </div>
      </div>
      {People.slice(0, 10).map((item, index) => <Media key={index} item={item} />)}
    </div>
  </>
}
