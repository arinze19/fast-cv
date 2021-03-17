import uniqid from "uniqid"

function Qualifications(props) {
const { qualifications } = props.state
const hideEleClass = {
    display: "none",
  };

  const qualificationsList = qualifications.map((qualification, index) => {
    return (
      <div key={uniqid()}>
        <div className="information__inputs">
          <div className="form-control">
            <label htmlFor="institution">Name of Institution:</label>
            <br />
            <input
              type="text"
              name="institution"
              placeholder="Stanford University"
              id={index}
              className="qualifications"
              value={qualification.institution}
              onChange={props.handleInputChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="certification">Name of Certification:</label>
            <br />
            <input
              type="text"
              name="certification"
              placeholder="Bsc. Computer Science"
              id={index}
              className="qualifications"
              value={qualification.certification}
              onChange={props.handleInputChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="startDate">From:</label>
            <br />
            <input
              type="date"
              name="startDate"
              className="qualifications"
              id={index}
              value={qualification.startDate}
              onChange={props.handleInputChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="endDate">To:</label>
            <br />
            <input
              type="date"
              name="endDate"
              className="qualifications"
              id={index}
              value={qualification.endDate}
              onChange={props.handleInputChange}
            />
          </div>
        </div>

        <div className="information__actions">
          <span>
            <input type="checkbox" /> I currently study here
          </span>
          <button
            className="information__actions__delete-btn"
            type="button"
            name="qualifications"
            id={index}
            onClick={props.modifyInfoField}
            style={index === qualifications.length - 1 ? hideEleClass : null}
          >
            Delete Qualification
          </button>
          <button
            className="information__actions__add-btn"
            type="button"
            name="qualifications"
            id={index}
            onClick={props.modifyInfoField}
            style={index !== qualifications.length - 1 ? hideEleClass : null}
          >
            Add Qualification
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="information">
      <h2 className="heading">Education and Qualifications.</h2>
      <hr />
      {qualificationsList}
    </div>
  );
}

export default Qualifications;
