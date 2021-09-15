import { useContext, useState } from 'react';
import { MainContext } from '../../context/MainContextProvider';
import uniqid from 'uniqid';
import ShowCase from '../base/ShowCase';

function Qualifications() {
  const initialState = {
    name: '',
    certification: '',
    startDate: '',
    endDate: '',
  };
  const { cvInfo, setCvInfo } = useContext(MainContext);
  const [institution, setInstitution] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInstitution((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    let newState = { ...cvInfo }
    newState.qualifications.push({ ...institution, id: uniqid() })

    setCvInfo(newState);
    setInstitution(initialState);
  };

  return (
    <div className='information'>
      <h2 className='heading'>Education and Qualifications.</h2>
      <hr />

      {/* setting up a section props to determine how to render showcase component */}
      <ShowCase list={cvInfo.qualifications} section='qualifications' />

      <div>
        <div className='information__inputs'>
          <div className='form-control'>
            <label htmlFor='name'>Name of Institution:</label>
            <br />
            <input
              type='text'
              name='name'
              placeholder='Stanford University'
              className='qualifications'
              value={institution.name}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='certification'>Name of Certification:</label>
            <br />
            <input
              type='text'
              name='certification'
              placeholder='Bsc. Computer Science'
              className='qualifications'
              value={institution.certification}
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
              className='qualifications'
              value={institution.startDate}
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
              className='qualifications'
              value={institution.endDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='information__actions'>
          <button
            className='information__actions__add-btn'
            type='button'
            name='qualifications'
            onClick={handleSubmit}
          >
            Add Qualification
          </button>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;
