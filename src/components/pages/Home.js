import PersonalInfo from '../edit/PersonalInfo';
import Qualifications from '../edit/Qualifications';
import Experiences from '../edit/Experience';

function Home({ togglePreview }) {
  return (
    <div>
      <form className='main-form'>
        <PersonalInfo />
        <Qualifications />
        <Experiences />
        <button className='main-form__button' onClick={togglePreview}>
          Preview CV
        </button>
      </form>
    </div>
  );
}

export default Home;
