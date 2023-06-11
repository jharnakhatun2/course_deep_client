import {
  faBriefcase,
  faGlobe,
  faMobile,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CounterValue from "./CounterValue";

const Category = () => {
  return (
    <div className="py-lg-5 py-sm-3 bg-light category-bg">
      <div className="container">
        <div className="text-center pt-5">
          <h2 className="text-uppercase title-shadow">Services</h2>
          <hr className="hr blurry-ruler " />
          <p className="text-muted">We provide professional online courses</p>
        </div>
        <div className="row g-2 p-5">
          <div className="col ">
            <div className="counter blue">
              <div className="counter-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h3>Web Designing</h3>
              <CounterValue initialValue={500} />
            </div>
          </div>
          <div className="col">
            <div className="counter blue">
              <div className="counter-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h3>Web Development</h3>
              <CounterValue initialValue={600} />
            </div>
          </div>
          <div className="col">
            <div className="counter blue">
              <div className="counter-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3>Brand Building</h3>
              <CounterValue initialValue={530} />
            </div>
          </div>
          <div className="col">
            <div className="counter blue">
              <div className="counter-icon">
                <FontAwesomeIcon icon={faMobile} />
              </div>
              <h3>Responsive Design</h3>
              <CounterValue initialValue={478} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
