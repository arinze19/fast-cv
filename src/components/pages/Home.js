import PersonalInfo from "../edit/PersonalInfo";
import Qualifications from "../edit/Qualifications";
import Experiences from "../edit/Experience";


function Home({ handleButtonClick, lists, info, handleInputChange }) {
  const { organizationsList, institutionsList } = lists

  return (
    <div>
      <form className="main-form">
        <PersonalInfo
          info={info}
          handleInputChange={handleInputChange}
        />
        <Qualifications
          list={institutionsList}
          info={info}
          handleInputChange={handleInputChange}
          handleButtonClick={handleButtonClick}
        />
        <Experiences
          list={organizationsList}
          info={info}
          handleInputChange={handleInputChange}
          handleButtonClick={handleButtonClick}
        />
        <button>Preview CV</button>
      </form>
    </div>
  );
}

export default Home;
