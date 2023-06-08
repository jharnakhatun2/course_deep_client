import React from 'react'
import Hero from '../Hero/Hero'
import Faq from '../../components/Faq'
import Category from '../Category/Category'
import LatestCouser from '../LatestCourse/LatestCouser'
import About from '../About/About'
import Instuctor from '../Instuctor/Instuctor'
import Contact from '../Contact/Contact'
import Subscribe from '../Subscribe/Subscribe'
import LatestBlog from '../LatestBlog/LatestBlog'
import Code from '../Code/Code'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Category></Category>
      <LatestCouser></LatestCouser>
      <About></About>
      <Subscribe></Subscribe>
      <Instuctor></Instuctor>
      <Code></Code>
      <Faq></Faq>
      <LatestBlog></LatestBlog>
      <Contact></Contact>
    </div>
  )
}

export default Home
