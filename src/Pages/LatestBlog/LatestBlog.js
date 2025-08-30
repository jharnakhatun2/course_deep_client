import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const LatestBlog = () => {
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
        setBlog(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogData();
  }, []);
  // Example JSON data for blog posts
 

  const blogPosts = blog?.slice(0, 3);
  return (
    <div className="py-5 blogBg">
      <div className="container px-5 mt-lg-5 mt-sm-3">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="text-center pb-5">
              <h2 className="text-uppercase title-shadow">Latest Blogs</h2>
              <hr className="hr blurry-ruler" />
              <p className="text-muted">
                Presents information in reverse chronological order
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-5">
        {blogPosts?.map((post) => {
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
                        <Link to="/blog">View More</Link>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      {category}
                    </div>
                      <Link to="/blog" className="text-decoration-none link-dark stretched-link">
                      <h5 className=" mb-3">
                        {title.slice(0, 47) + ".."}
                      </h5>
                      </Link>
                    <p className="card-text mb-0">
                      {content.slice(0, 82) + ".."}
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
      </div>
    </div>
  );
};

export default LatestBlog;
