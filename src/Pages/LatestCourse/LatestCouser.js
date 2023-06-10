import {
  faArrowRightLong,
  faClock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const LatestCouser = () => {
  const [faceData, setFaceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://assignment-ten-server-sage.vercel.app/courses"
        );
        const data = await response.json();
        setFaceData(data);
      } catch (error) {
        console.error("Error fetching face data:", error);
      }
    };

    fetchData();
  }, []);

  const courseData = faceData.slice(0, 4);
  return (
    <div className="aboutusbg">
    <div className="container py-5">
      <div className="text-center pt-5 pb-5">
        <h2 className="text-uppercase title-shadow">Latest Courses</h2>
        <hr className="hr blurry-ruler" />
        <p className="text-muted">
          An investment in knowledge pays the best interest
        </p>
      </div>
      {/* Product Card */}
      <div class="row">
        {courseData.map((face) => {
          const { _id, name, image, price, shortDes, teacher, time } = face;
          return (
            <div key={_id} class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div class="card">
                <a href="#">
                  <img class="card-img-top" src={image} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">{name.slice(0, 20)}</h5>
                    <p class="card-text">{shortDes.slice(0, 62) + ".."}</p>
                    <p class="card-text">
                      <small class="text-muted">
                        <FontAwesomeIcon icon={faUser} className="cardIcon" />
                        {teacher.slice(0, 7)}
                        <FontAwesomeIcon icon={faClock} className="cardIcon" />
                        {time}
                      </small>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="fs-4 priceText">{price}</div>
                      <a href="/courses">
                      <button className="buttonText">View Course</button>
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pb-5 w-25 arrowDiv">
        <a href="/courses">
          <FontAwesomeIcon icon={faArrowRightLong} className="productnext" />
        </a>
      </div>
    </div>
    </div>
  );
};

export default LatestCouser;
