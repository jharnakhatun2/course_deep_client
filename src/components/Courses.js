// import { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { AuthContext } from '../contexts/UserContext'

import { useContext } from "react"
import { AuthContext } from "../layer/UserContext"

const Courses = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-warning shadow-2xl">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Courses;
