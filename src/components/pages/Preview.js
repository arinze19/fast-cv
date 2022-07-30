import { useContext, createRef } from 'react';
import { MainContext } from '../../context/MainContextProvider';
import ReactToPdf from 'react-to-pdf';
import uniqid from 'uniqid';
import '../../css/pages/preview.css';

function Preview() {
  const { cvInfo } = useContext(MainContext);
  const { skills, experience, qualifications } = cvInfo;

  const ref = createRef();

  return (
    <div className='preview-container'>
      <div className='ref-container' ref={ref}>
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
          <div className='preview-container__main'>
            {qualifications.map((item) => (
              <div className='preview-container__qualifications' key={uniqid()}>
                <h3> {item.name} </h3>
                <i>{item.certification}</i>
                <p>
                  <small>
                    {item.startDate} - {item.endDate}
                  </small>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='preview-container__experiences-section'>
          <h2>Experience.</h2>
          <div className='preview-container__main'>
            {experience.map((item) => (
              <div className='preview-container__qualifications' key={uniqid()}>
                <h3> {item.name} </h3>
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
      </div>

      <ReactToPdf targetRef={ref} filename={`${cvInfo.firstName + '-' + cvInfo.lastName + '-resume'}`}>
        {({ toPdf }) => <button className='preview-container__button' disabled={!cvInfo.firstName || !cvInfo.lastName} onClick={toPdf}>Download CV</button>}
      </ReactToPdf>
    </div>
  );
}

export default Preview;
