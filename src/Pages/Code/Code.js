import { faMobileScreen, faPencil, faQuestion, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Code = () => {
  return (
    <div class="content-section py-5 bg-Image text-white text-center" id="services">
            <div class="container my-5 px-4 px-lg-5">
                <div class="content-section-heading">
                    <h2 className='title-shadow text-dark'>What We Offer</h2>
                    <hr class="hr blurry-ruler mb-5  " />
                </div>
                <div class="row gx-4 gx-lg-5">
                    <div class="col mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3">
                            <img src='https://i.ibb.co/qNC5x5J/1.png' alt=""/>
                        </span>
                        <h4 className='headStyle'><strong>HTML</strong></h4>
                    </div>
                    <div class="col mb-5 mb-lg-0">
                    <span class="service-icon rounded-circle mx-auto mb-3">
                            <img src='https://i.ibb.co/RPX49Nc/2.png' alt=""/>
                        </span>
                        <h4 className='headStyle'><strong>CSS</strong></h4>
                    </div>
                    <div class="col mb-5 mb-md-0">
                    <span class="service-icon rounded-circle mx-auto mb-3">
                            <img src='https://i.ibb.co/xgCwJJ3/3.png' alt=""/>
                        </span>
                        <h4 className='headStyle'><strong>JAVASCRIPT</strong></h4>
                    </div>
                    <div class="col">
                    <span class="service-icon rounded-circle mx-auto mb-3">
                            <img src='https://i.ibb.co/Hgt8Wx8/4.png' alt=""/>
                        </span>
                        <h4 className='headStyle'><strong>REACT JS</strong></h4>
                    </div>
                    <div class="col">
                    <span class="rounded-circle mx-auto mb-3">
                            <img src='https://i.ibb.co/jM5G9YW/1709306.png' alt=""/>
                        </span>
                        <h4 className='headStyle'><strong>NODE JS</strong></h4>
                    </div>
                    <div class="col">
                    <span class="service-icon rounded-circle mx-auto mb-3">
                            <img src='https://i.ibb.co/X75NjSZ/images-removebg-preview.png' alt=""/>
                        </span>
                        <h4 className='headStyle'><strong>MONGODB</strong></h4>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Code

