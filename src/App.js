import { useState } from "react";
import Header       from "./components/base/Header";
import Preview      from "./components/pages/Preview";
import Home         from "./components/pages/Home";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  location: "",
  phoneNumber: "",
  linkedin: "",
  website: "",
  skill: "",

  institution: "",
  certification: "",
  certStartDate: "",
  certEndDate: "",

  organization: "",
  position: "",
  orgStartDate: "",
  orgEndDate: "",
};

function App() {
  const [info, setInfo]                           = useState({ ...initialState });
  let   [preview, setPreview]                     = useState(false);
  const [skillsList, setSkillsList]               = useState([]);
  const [institutionsList, setInstitutionsList]   = useState([]);
  const [organizationsList, setOrganizationsList] = useState([]);

  function togglePreview() {
    // set the preview mode to the opposite of what it was
    setPreview((prevState) => (preview = !prevState));
  }

  function handleButtonClick(e) {
    e.preventDefault();
    const { name, id, className } = e.target;
    
    // determine if an item should be deleted from the list
    if (id) {
      if(className.includes("qualifications")) {
        setInstitutionsList(prevList => {
          const newList = [ ...prevList ]
          newList.splice(id, 1)

          return newList
        })
      } else if(className.includes("experiences")) {
        setOrganizationsList(prevList => {
          const newList = [ ...prevList ]
          newList.splice(id, 1)

          return newList
        })
      } else {
        setSkillsList(prevList => {
          const newList = [ ...prevList ]
          newList.splice(id, 1)

          return newList
        })
      }
    } 


    // else add an item to the list
    else {
      let selectedInfo;
      // initiate obj to be stored in a list depending on the name attribute
      if (name === "qualifications") {
        selectedInfo = {
          institution: info.institution,
          certification: info.certification,
          certStartDate: info.certStartDate,
          certEndDate: info.certEndDate,
        };

        setInstitutionsList((prevList) => prevList.concat(selectedInfo));
        // reset state values
        setInfo((prevInfo) => {
          return {
            ...prevInfo,
            institution: "",
            certification: "",
            certStartDate: "",
            certEndDate: "",
          };
        });
      } else if(name === "experiences") {
        selectedInfo = {
          organization: info.organization,
          position: info.position,
          orgStartDate: info.orgStartDate,
          orgEndDate: info.orgEndDate,
        };

        setOrganizationsList((prevList) => prevList.concat(selectedInfo));
        setInfo((prevInfo) => {
          return {
            ...prevInfo,
            organization: "",
            position: "",
            orgStartDate: "",
            orgEndDate: "",
          };
        });
      } else {
        const newSkill = info.skill
        setSkillsList(prevSkills => prevSkills.concat(newSkill))
        setInfo(prevInfo => {
          return {
            ...prevInfo,
            skill: ""
          }
        })
      }
    }
  }

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  }

  function currentPage() {
    if (preview) {
      return (
        <Preview 
          info={info} 
          lists={{ organizationsList, institutionsList, skillsList }}
        />
      );
    }

    return (
      <Home
        info={info}
        handleButtonClick={handleButtonClick}
        handleInputChange={handleInputChange}
        togglePreview={togglePreview}
        lists={{ organizationsList, institutionsList, skillsList }}
      />
    );
  }

  return (
    <div>
      <Header togglePreview={togglePreview} preview={preview} />
      {currentPage()}
    </div>
  );
}

export default App;
