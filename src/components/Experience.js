import uniqid from "uniqid"

function Experience(props) {
  const { experiences } = props.state
  const hideEleClass = {
    display: "none",
  };

    const experiencesList = experiences.map((experience, index) => {
      return (
        <div key={uniqid()}>
          <div className="information__inputs">
            <div className="form-control">
              <label htmlFor="organization">Name of Organisation:</label>
              <br />
              <input
                type="text"
                name="organization"
                placeholder="Microsoft"
                id={index}
                value={experience.organization}
                className="experiences"
                onChange={props.handleInputChange}
              />
            </div>
  
            <div className="form-control">
              <label htmlFor="position">Position Held:</label>
              <br />
              <input
                type="text"
                name="position"
                placeholder="Software Engineer III"
                id={index}
                value={experience.position}
                className="experiences"             
                onChange={props.handleInputChange}
              />
            </div>
  
            <div className="form-control">
              <label htmlFor="startDate">From:</label>
              <br />
              <input
                type="date"
                name="startDate"
                value={experience.startDate}
                id={index}
                className="experiences"              
                onChange={props.handleInputChange}
              />
            </div>
  
            <div className="form-control">
              <label htmlFor="endDate">To:</label>
              <br />
              <input
                type="date"
                name="endDate"
                value={experience.endDate}
                id={index}
                className="experiences"
                onChange={props.handleInputChange}
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
              style={index === experiences.length - 1 ? hideEleClass : null}
            >
              Delete Experience
            </button>
            <button
              className="information__actions__add-btn"
              type="button"
              name="experiences"
              onClick={props.modifyInfoField}
              style={index !== experiences.length - 1 ? hideEleClass : null}
            >
              Add Experience
            </button>
          </div>
        </div>
      );
    })

  return (
    <div className="information">
      <h2 className="heading">Work Experience.</h2>
      <hr />
      {experiencesList}
    </div>
  );
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