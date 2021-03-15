function Qualifications(props) {
  const qualificationsList = props.state.qualifications.map((qualification) => {
    return (
      <div key={new Date().toISOString()}>
        <div className="information__inputs">
          <div className="form-control">
            <label htmlFor="institution">Name of Institution:</label>
            <br />
            <input
              type="text"
              name="institution"
              placeholder="Stanford University"
              value={qualification.institution}
              onChange={props.handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="certification">Name of Certification:</label>
            <br />
            <input
              type="text"
              name="certification"
              placeholder="Bsc. Computer Science"
              value={qualification.certification}
              onChange={props.handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="startDate">From:</label>
            <br />
            <input
              type="date"
              name="startDate"
              value={qualification.startDate}
              onChange={props.handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="endDate">To:</label>
            <br />
            <input
              type="date"
              name="endDate"
              value={qualification.endDate}
              onChange={props.handleChange}
            />
          </div>
        </div>

        <div className="information__actions">
          <span>
            <input type="checkbox" /> I currently study here
          </span>
          <button
            type="button"
            name="qualifications"
            onClick={props.modifyInfoField}
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
