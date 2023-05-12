import React from 'react'
import img1 from '../../image/react.png'
import img2 from '../../image/R (1).png'
import img3 from '../../image/typescript.png'
import img4 from '../../image/redux.png'
import img5 from '../../image/1452px-CSS3_logo_and_wordmark.svg.png'
import img6 from '../../image/HTML5_logo_and_wordmark.svg.png'
import img7 from '../../image/download.png'
import img8 from '../../image/R.png'
import img9 from '../../image/R (2).png'
import img10 from '../../image/147-1475273_hot-to-reset-reinitialise-a-git-repository-git.png'

export default function MyStack() {
  return <>

    <div>
      <div class="container mt-5 pt-5 text-center" htmlFor="#Stack">
        <div className=" text-warning">
          <h1 className='fs-3'>Here are some technologies I like working with:</h1>
        </div>
        <div className=''>



          <div className='w-100  d-flex align-items-center justify-content-center mt-5 pt-5'>
            <img className='image1 px-3 mx-2' src={img1} alt="" />
            <img className='image1 px-3 mx-2' src={img2} alt="" />
            <img className='image1 px-3 mx-2' src={img3} alt="" />
            <img className='image1 px-3 mx-2' src={img4} alt="" />
          </div>
          <div className='w-100 d-flex align-items-center justify-content-center mt-5 pt-5 '>
            <img className='image1 px-4 mx-2' src={img5} alt="" />
            <img className='image1 px-3 mx-2' src={img6} alt="" />
            <img className='image1 px-3 mx-2' src={img7} alt="" />
            <img className='image1 px-3 mx-2' src={img8} alt="" />
          </div>
          <div className='w-100 d-flex align-items-center justify-content-center mt-5 pt-5 '>
            <img className='image1 px-4 mx-2' src={img9} alt="" />
            <img className='image1 px-3 mx-2' src={img10} alt="" />
          </div>
        </div>
      </div>
    </div>
  </>
}
