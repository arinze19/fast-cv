function Experience(props) {
  const { experiences } = props.state;
  const hideEleClass = {
    display: "none",
  };

  const experienceList = experiences.map((experience, index) => {
    return (
      <div key={new Date().toISOString()}>
        <div className="information__inputs">
          <div className="form-control">
            <label htmlFor="institution">Name of Organisation:</label>
            <br />
            <input
              type="text"
              name="institution"
              placeholder="Microsoft"
              value={experience.organization}
              onChange={props.handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="certification">Position Held:</label>
            <br />
            <input
              type="text"
              name="certification"
              placeholder="Software Engineer III"
              value={experience.position}
              onChange={props.handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="startDate">From:</label>
            <br />
            <input type="date" name="startDate" value={experience.startDate} onChange={props.handleChange}/>
          </div>

          <div className="form-control">
            <label htmlFor="endDate">To:</label>
            <br />
            <input type="date" name="endDate" value={experience.endDate} onChange={props.handleChange}/>
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
            style={
              index === experiences.length - 1
                ? hideEleClass
                : null
            }
          >
            Delete Experience
          </button>
          <button
            className="information__actions__add-btn"
            type="button"
            name="experiences"
            onClick={props.modifyInfoField}
            style= {
              index !== experiences.length - 1
              ? hideEleClass
              : null
            }
          >
            Add Experience
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="information">
      <h2 className="heading">Work Experience.</h2>
      <hr />
      {experienceList}
    </div>
  );
}

export default Experience;
