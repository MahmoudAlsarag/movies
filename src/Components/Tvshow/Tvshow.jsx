import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Media from '../Media/Media';
export default function Tvshow() {
    const [Tvshow, setTvshow] = useState([]);
    async function getTrending(mediaItem, callback) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaItem}/week?api_key=ee839d64c170e2609474ffb3f7618206`)
        callback(data.results)
        console.log(data.results);
      }
      useEffect(() => {
        getTrending('tv', setTvshow)
      }, [])
    

  return <>
  <div className="row py-5">
      <div className="col-md-12 d-flex align-items-center">
        <div>
          <div className="brdr w-25 mb-3"></div>
          <h2 className='h4'> Trending <br /> Tvshow <br /> Right Now</h2>
          <p className='text-muted'> Top Trending Tvshow By Week</p>
          <div className="brdr w-100 mb-3 "></div>

        </div>
      </div>
      {Tvshow.slice(0, 20).map((item, index) => <Media key={index} item={item} />)}
    </div>
  </>
}
