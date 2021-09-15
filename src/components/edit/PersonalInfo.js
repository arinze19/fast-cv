import { useContext, useState } from 'react';
import { MainContext } from '../../context/MainContextProvider';
import uniqid from 'uniqid';
import SkillsList from '../base/SkillsList';

function PersonalInfo() {
  const initialState = {
    skill: '',
  };
  const { cvInfo, setCvInfo } = useContext(MainContext);
  const [info, setInfo] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'skill') {
      setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    } else {
      setCvInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let newState = { ...cvInfo };
    let newLocalState = { ...info };

    newState.skills.push({ name: info.skill, id: uniqid() });
    newLocalState.skill = '';

    setCvInfo(newState);
    setInfo(newLocalState);
  };

  return (
    <form>
      <div className='information'>
        <h2 className='heading'>Personal Information.</h2>
        <hr />

        <div className='information__inputs'>
          <div className='form-control'>
            <label htmlFor='first-name'>First Name:</label>
            <br />
            <input
              placeholder='John'
              type='text'
              name='firstName'
              value={cvInfo.firstName}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='lastName'>Last Name:</label>
            <br />
            <input
              placeholder='Doe'
              type='text'
              name='lastName'
              value={cvInfo.lastName}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='location'>Location:</label>
            <br />
            <input
              placeholder='California, US'
              type='text'
              name='location'
              value={cvInfo.location}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <br />
            <input
              placeholder='jondoe@test.com'
              type='text'
              name='email'
              value={cvInfo.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='phone-number'>Phone Number:</label>
            <br />
            <input
              type='tel'
              name='phoneNumber'
              pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
              placeholder='+1-234-567-890'
              value={cvInfo.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='linkedin'>LinkedIn:</label>
            <br />
            <input
              placeholder='https://linkedin.com/in/johndoe'
              type='text'
              name='linkedin'
              value={cvInfo.linkedin}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='website'>Website:</label>
            <br />
            <input
              placeholder='https://johndoe.com'
              type='text'
              name='website'
              value={cvInfo.website}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='website'>Skills:</label>
            <br />
            <input
              placeholder='Vue.JS'
              type='text'
              name='skill'
              value={info.skill}
              onChange={handleChange}
            />
            <button
              className='main-form__button'
              style={{ marginLeft: 0 }}
              name='skills'
              onClick={handleSubmit}
            >
              Add Skill
            </button>
          </div>

          <SkillsList />
        </div>
      </div>
    </form>
  );
}

export default PersonalInfo;
