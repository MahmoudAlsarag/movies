import React from 'react'

export default function Footer() {
  return <>
    <footer className='w-100 footer pb-4 h-50 d-flex m-auto align-items-center justify-content-center  text-center' htmlFor="Footer">
      <div className='mt-3 pt-2 '>
        <h5 className='text-warning '>Contact me :</h5>

        <div className="pb-2">     
        <a href="" className='nav-link active'><i className="fa-solid fa-mobile-screen text-secondary "> </i>+20 01006119217</a>
           </div>

        <div className='pb-2'>
          <a href="" className='nav-link active'><i className="fa-solid fa-mobile-screen text-secondary"></i>+20 01148528535</a>
        </div>

        <div className='Git pb-2 '>
          <a className=' Link text-secondary nav-link active hover-text-warning' href="https://github.com/MahmoudAlsarag"><i class="fa-brands fa-github "></i> @Mahmoud Saeed</a>
        </div>
        <div className='Likedin pb-2 '>
          <a className=' Link text-secondary nav-link active hover-text-warning' href="http://linkedin.com/in/mahmoud-saeed12"><i class="fa-brands fa-linkedin-in"></i> @Mahmoud Saeed</a>
        </div>
        <div className='gmail pb-2 me-5'>
          <a className=' Link text-secondary nav-link active hover-text-warning me-5' href="http://mahmoudelsarag974@gmail.com"><i class="fa-regular fa-envelope"></i> mahmoudelsarag974@gmail.com</a>
        </div>

      </div>
      <div className='  mb-5 pb-5 pt-2 '>
        <h5 className='text-warning'>Location :</h5>
        <div className='gmail pb-2  '>
          <p><i class="fa-solid fa-location-dot"></i> Egypt, Cairo </p>
        </div>
      </div>

    </footer>


  </>
}
