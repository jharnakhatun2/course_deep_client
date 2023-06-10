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
    <div class="py-5 bg-light category-bg">
      <div class="container">
        <div class="text-center pt-5">
          <h2 class="text-uppercase title-shadow">Services</h2>
          <hr class="hr blurry-ruler " />
          <p class="text-muted">We provide professional online courses</p>
        </div>
        <div class="row g-2 p-5">
          <div class="col ">
            <div class="counter blue">
              <div class="counter-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h3>Web Designing</h3>
              <CounterValue initialValue={500} />
            </div>
          </div>
          <div class="col">
            <div class="counter blue">
              <div class="counter-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h3>Web Development</h3>
              <CounterValue initialValue={600} />
            </div>
          </div>
          <div class="col">
            <div class="counter blue">
              <div class="counter-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3>Brand Building</h3>
              <CounterValue initialValue={530} />
            </div>
          </div>
          <div class="col">
            <div class="counter blue">
              <div class="counter-icon">
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
