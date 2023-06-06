import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <div className="hero-content text-center headerBG" >
        <div className="max-w-md vw-100 mx-auto p-5 ">
          <h1 className="text-5xl font-bold text-white pt-6">Learn Without Limit</h1>
          <p className=" fontColor w-50 w-sm-100  mx-auto " >Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class Web Skilled Courses.</p>
          <button className="btn btn-warning shadow-2xl"><Link className="text-decoration-none text-white" to='/register'>JOIN FOR FREE</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
