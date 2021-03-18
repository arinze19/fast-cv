import { useState } from "react";
import PersonalInfo from "../edit/PersonalInfo";
import Qualifications from "../edit/Qualifications";
import Experiences from "../edit/Experience";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  linkedin: "",
  website: "",

  institution: "",
  certification: "",
  certStartDate: "",
  certEndDate: "",

  organization: "",
  position: "",
  orgStartDate: "",
  orgEndDate: "",
};

function Home() {
  const [institutionsList, setInstitutionsList] = useState([]);
  const [organizationsList, setOrganizationsList] = useState([]);
  const [info, setInfo] = useState({ ...initialState });

  function handleInputChange(e) {
      e.preventDefault()
    const { name, value } = e.target;
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  }

  function handleButtonClick(e) {
      e.preventDefault()
    const { name } = e.target;
    let selectedInfo;

    if (name === "qualifications") {
      selectedInfo = {
        institution: info.institution,
        certification: info.certification,
        certStartDate: info.certStartDate,
        certEndDate: info.certEndDate,
      };

      setInstitutionsList(prevList => prevList.concat(selectedInfo))
    } else {
      selectedInfo = {
        organization: info.organization,
        position: info.position,
        orgStartDate: info.orgStartDate,
        orgEndDate: info.orgEndDate,
      };

      setOrganizationsList(prevList => prevList.concat(selectedInfo))
      console.log(organizationsList)
    }
  }

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
