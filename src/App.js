import { useState } from "react";
import Header       from "./components/base/Header";
import Preview      from "./components/pages/Preview";
import Home         from "./components/pages/Home";

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

function App() {
  const [info, setInfo]                           = useState({ ...initialState });
  let   [preview, setPreview]                     = useState(false);
  const [institutionsList, setInstitutionsList]   = useState([]);
  const [organizationsList, setOrganizationsList] = useState([]);
  
  function togglePreview() {
    // set the preview mode to the opposite of what it was
    setPreview((prevState) => (preview = !prevState));
  }

  function handleButtonClick(e) {
    e.preventDefault();
    const { name } = e.target;
    // initiate obj to be stored in a list depending on the name attribute
    let selectedInfo;

    if (name === "qualifications") {
      selectedInfo = {
        institution: info.institution,
        certification: info.certification,
        certStartDate: info.certStartDate,
        certEndDate: info.certEndDate,
      };

      setInstitutionsList((prevList) => prevList.concat(selectedInfo));
      // reset state values 
      setInfo(prevInfo => {
        return {
          ...prevInfo,
          institution: "",
          certification: "",
          certStartDate: "",
          certEndDate: ""
        }
      })
    } else {
      selectedInfo = {
        organization: info.organization,
        position: info.position,
        orgStartDate: info.orgStartDate,
        orgEndDate: info.orgEndDate,
      };

      setOrganizationsList((prevList) => prevList.concat(selectedInfo));
      setInfo(prevInfo => {
        return {
          ...prevInfo,
          organization: "",
          position: "",
          orgStartDate: "",
          orgEndDate: ""
        }
      })
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
      return <Preview />;
    }

    return (
      <Home
        info={info}
        handleButtonClick={handleButtonClick}
        handleInputChange={handleInputChange}
        lists={{ organizationsList, institutionsList }}
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
