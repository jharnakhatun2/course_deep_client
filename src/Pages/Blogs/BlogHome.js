import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { News } from "./News";


const BlogHome = () => {
  const [blog, setBlog] = useState();
  

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          "/blogdata.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch JSON data");
        }
        const data = await response.json();
        console.log(data);
        setBlog(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogData();
  }, []);

    
  return (
    <main>
      {/* <!-- Page Content--> */}
      <div className="py-5">
        <div className="container px-5">
          <h1 className="fw-bolder fs-5 mb-4">Our Blog</h1>
          <div className="card border-0 shadow rounded-3 overflow-hidden">
            <div className="card-body p-0">
              <div className="row gx-0">
                <div className="col-lg-6 col-xl-5 py-lg-5">
                  <div className="p-4 p-md-5">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      News
                    </div>
                    <div className="h2 fw-bolder">
                      The Dev's Corner Insights and Innovations in Programming
                    </div>
                    <p>
                      From beginner-friendly tutorials to advanced
                      problem-solving strategies, our blog is a treasure trove
                      of knowledge for aspiring developers and seasoned
                      programmers alike.
                    </p>
                    <a className="stretched-link text-decoration-none" href="#">
                      Read more
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-7">
                  <div
                    className="bg-featured-blog"
                    style={{
                      backgroundImage:
                        "url('https://i.ibb.co/MccRgJ4/blog2.png')",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 bg-light">
        <div className="container px-5">
          <div className="row gx-5">
            <div className="col-xl-8">
              <h2 className="fw-bolder fs-5 mb-4">News</h2>
              <News/>
              <div className="text-end mb-5 mb-xl-0">
                <a className="text-decoration-none" href="/">
                  More news
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            
            <div className="col-xl-4 ">
              <div className="card border-0 h-100 sticky">
                <div className="card-body p-4">
                  <div className="d-flex h-100 align-items-center justify-content-center">
                    <div className="text-center">
                      <div className="h6 fw-bolder">Contact</div>
                      <p className="text-muted mb-4">
                        For press inquiries, email us at
                        <br />
                        <a href="/">jharnaamin8@gmail.com</a>
                      </p>
                      <div className="h6 fw-bolder">Follow us</div>
                      <div className="col-12 my-3 my-lg-0 text-lg-center">
                        <a
                          className="btn btn-dark btn-social mx-2 "
                          href="https://twitter.com/javaScripLogic"
                          aria-label="Parveen Anand Twitter Profile"
                        >
                          <FontAwesomeIcon icon={faTwitter} className="socialButtonStyle"/>
                        </a>
                        <a
                          className="btn btn-dark btn-social mx-2"
                          href="https://www.facebook.com/jharnakhatun2/"
                          aria-label="Parveen Anand Facebook Profile"
                        >
                          <FontAwesomeIcon icon={faFacebook} className="socialButtonStyle"/>
                        </a>
                        <a
                          className="btn btn-dark btn-social mx-2"
                          href="https://www.linkedin.com/in/jharna-khatun2/"
                          aria-label="Parveen Anand LinkedIn Profile"
                        >
                          <FontAwesomeIcon icon={faLinkedin} className="socialButtonStyle"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog preview div--> */}
      <div className="py-5">
        <div className="container px-5">
          <h2 className="fw-bolder fs-5 mb-4">Featured Stories</h2>
          <div className="row gx-5">
            {blog?.map((post) => {
              const {id,image,category,title,content,author,date,readTime} =post
              return(
                <div className="col-lg-4 mb-5" key={id}>
                <div className="blogCard h-100 shadow border-0">
                  <div className="imageContainer">
                    <img
                      className="card-img-top overlayImage"
                      src={image}
                      alt="..."
                    />
                    <div className="middle">
                      <div className="textOverlay">
                        <Link to={title} state={post}>View More</Link>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      {category}
                    </div>
                      <Link to={title} state={post} className="text-decoration-none link-dark stretched-link">
                      <h5 className=" mb-3">
                        {title?.slice(0, 47) + ".."}
                      </h5>
                      </Link>
                    <p className="card-text mb-0">
                      {content?.slice(0, 82) + ".."}
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle blogAvetar me-3"
                          src="https://i.ibb.co/D9dYdq7/user.png"
                          alt="..."
                        />
                        <div className="small">
                          <div className="fw-bold">{author}</div>
                          <div className="text-muted">
                            {date} &middot; {readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
          <div className="text-end mb-5 mb-xl-0">
            <a className="text-decoration-none" href="/">
              More stories
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogHome;
