import { useState } from "react"
const initialValues = {
  organization: "",
  position: "",
  startDate: "",
  endDate: "",
}

function Experience(props) {
  // const hideEleClass = {
  //   display: "none",
  // };
  const [ experiencesValues, setExperiences ] = useState(initialValues)

  function handleInputChange(e) {
    const { name, value } = e.target;
    setExperiences({
      ...experiencesValues,
      [name]: value,
    });
  }

    return (
      <div>
        <div className="information__inputs">
          <div className="form-control">
            <label htmlFor="organization">Name of Organisation:</label>
            <br />
            <input
              type="text"
              name="organization"
              placeholder="Microsoft"
              value={experiencesValues.organization}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="position">Position Held:</label>
            <br />
            <input
              type="text"
              name="position"
              placeholder="Software Engineer III"
              value={experiencesValues.position}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="startDate">From:</label>
            <br />
            <input
              type="date"
              name="startDate"
              value={experiencesValues.startDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="endDate">To:</label>
            <br />
            <input
              type="date"
              name="endDate"
              value={experiencesValues.endDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="information__actions">
          <span>
            <input type="checkbox" /> I currently work here
          </span>
          <button
            className="information__actions__delete-btn"
            type="button"
            name="experiences"
            onClick={props.modifyInfoField}
            // style={index === experiences.length - 1 ? hideEleClass : null}
          >
            Delete Experience
          </button>
          <button
            className="information__actions__add-btn"
            type="button"
            name="experiences"
            onClick={props.modifyInfoField}
            // style={index !== experiences.length - 1 ? hideEleClass : null}
          >
            Add Experience
          </button>
        </div>
      </div>
    );

  // return (
  //   <div className="information">
  //     <h2 className="heading">Work Experience.</h2>
  //     <hr />
  //     {experienceList}
  //   </div>
  // );
}

export default Experience;



    //   experiences: [
    //     {
    //       organization: "",
    //       position: "",
    //       startDate: "",
    //       endDate: "",
    //     },
    //   ],