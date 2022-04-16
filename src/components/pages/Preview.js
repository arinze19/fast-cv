import { useContext } from 'react';
import { MainContext } from '../../context/MainContextProvider';
import uniqid from 'uniqid';
import '../../css/pages/preview.css';

function Preview() {
  const { cvInfo } = useContext(MainContext);
  const { skills, experience, qualifications } = cvInfo;

  return (
    <div className='preview-container'>
      <div className='preview-container__header'>
        <div className='preview-container__header__left'>
          <h2>
            {cvInfo.firstName} {cvInfo.lastName}
          </h2>
          <p>{cvInfo.email}</p>
          <p>{cvInfo.website}</p>
          <p>{cvInfo.linkedin}</p>
        </div>

        <div className='preview-container__header__right'>
          <p>{cvInfo.location}</p>
          <p>{cvInfo.phoneNumber}</p>
        </div>
      </div>

      <hr />

      <div className='preview-container__skills-container'>
        <h2>Skills.</h2>
        <ul>
          {skills.map((skill) => (
            <li key={uniqid()}>{skill.name}</li>
          ))}
        </ul>
      </div>

      <div className='preview-container__qualifications-section'>
        <h2>Education and Qualifications.</h2>
        {qualifications.map((item) => (
          <div className='preview-container__qualifications' key={uniqid()}>
            <h3> {item.institution} </h3>
            <i>{item.certification}</i>
            <p>
              <small>
                {item.startDate} - {item.endDate}
              </small>
            </p>
          </div>
        ))}
      </div>

      <div className='preview-container__experiences-section'>
        <h2>Experience.</h2>
        {experience.map((item) => (
          <div className='preview-container__qualifications' key={uniqid()}>
            <h3> {item.organization} </h3>
            <i>{item.position}</i>
            <p>
              <small>
                {item.startDate} - {item.endDate}
              </small>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preview;
