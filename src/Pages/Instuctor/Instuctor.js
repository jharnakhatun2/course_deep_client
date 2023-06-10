import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Instructor = () => {
  // JSON data for instructors
  const instructors = [
    {
      id: 1,
      name: 'Parveen Anand',
      role: 'Lead Designer',
      image: 'assets/img/team/1.jpg',
      twitterProfile: 'https://twitter.com/javaScripLogic',
      facebookProfile: 'https://www.facebook.com/jharnakhatun2/',
      linkedinProfile: 'https://www.linkedin.com/in/jharna-khatun2/',
    },
    {
      id: 2,
      name: 'Diana Petersen',
      role: 'Lead Marketer',
      image: 'assets/img/team/2.jpg',
      twitterProfile: 'https://twitter.com/javaScripLogic',
      facebookProfile: 'https://www.facebook.com/jharnakhatun2/',
      linkedinProfile: 'https://www.linkedin.com/in/jharna-khatun2/',
    },
    {
      id: 3,
      name: 'Larry Parker',
      role: 'Lead Developer',
      image: 'assets/img/team/3.jpg',
      twitterProfile: 'https://twitter.com/javaScripLogic',
      facebookProfile: 'https://www.facebook.com/jharnakhatun2/',
      linkedinProfile: 'https://www.linkedin.com/in/jharna-khatun2/',
    },
  ];

  return (
    <div className='bg-light'>
    <div className="container py-5">
      <div className="text-center pt-5 pb-5">
        <h2 className="text-uppercase title-shadow">Best Instructors</h2>
        <hr className="hr blurry-ruler" />
        <p className="text-muted">Empowering minds, shaping hearts, unlocking potential</p>
      </div>
      <div className="row py-3">
        {instructors.map((instructor) => (
          <div className="col-lg-4" key={instructor.id}>
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={instructor.image} alt="..." />
              <h4>{instructor.name}</h4>
              <p className="text-muted">{instructor.role}</p>
              <a className="btn btn-warning btn-social mx-2 socialIcon" href={instructor.twitterProfile} aria-label={`${instructor.name} Twitter Profile`}><FontAwesomeIcon icon={faTwitter} /></a>
              <a className="btn btn-warning btn-social mx-2 socialIcon" href={instructor.facebookProfile} aria-label={`${instructor.name} Facebook Profile`}><FontAwesomeIcon icon={faFacebook} /></a>
              <a className="btn btn-warning btn-social mx-2 socialIcon" href={instructor.linkedinProfile} aria-label={`${instructor.name} LinkedIn Profile`}><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Instructor;