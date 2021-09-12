import { useContext, useState } from 'react';
import { MainContext } from '../../context/MainContextProvider';
import ShowCase from '../base/ShowCase';

function Experience() {
  const initialState = {
    name: '',
    position: '',
    startDate: '',
    endDate: '',
  };
  const { cvInfo, setCvInfo } = useContext(MainContext);
  const [organization, setOrganization] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrganization((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    let newState = { ...cvInfo }
    newState.experience.push(organization)
    
    setCvInfo(newState);
    setOrganization(initialState);
  }

  return (
    <div className='information'>
      <h2 className='heading'>Experiences.</h2>
      <hr />

      {/* setting up a section props to determine how to render showcase component */} 
      <ShowCase
        list={cvInfo.experience}
        section='experience'
      />

      <div>
        <div className='information__inputs'>
          <div className='form-control'>
            <label htmlFor='name'>Name of Organization:</label>
            <br />
            <input
              type='text'
              name='name'
              placeholder='Microsoft'
              className='experiences'
              value={organization.name}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='position'>Name of Position Held:</label>
            <br />
            <input
              type='text'
              name='position'
              placeholder='Software Engineer III'
              className='experiences'
              value={organization.position}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='startDate'>From:</label>
            <br />
            <input
              type='text'
              name='startDate'
              placeholder='MM YYYY'
              className='experiences'
              value={organization.startDate}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='endDate'>To:</label>
            <br />
            <input
              type='text'
              name='endDate'
              placeholder='MM YYYY or Present'
              className='experiences'
              value={organization.endDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='information__actions'>
          <button
            className='information__actions__add-btn'
            type='button'
            name='experience'
            onClick={handleSubmit}
          >
            Add Experience
          </button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
