import ShowCase from "../base/ShowCase";

function Experience({ info, handleInputChange, handleButtonClick, list }) {
  return (
    <div className="information">
      <h2 className="heading">Experiences.</h2>
      <hr />

      {/* setting up a section props to determine how to render showcase component */}
      <ShowCase
        list={list}
        section="experience"
        handleButtonClick={handleButtonClick}
      />

      <div>
        <div className="information__inputs">
          <div className="form-control">
            <label htmlFor="organization">Name of Organization:</label>
            <br />
            <input
              type="text"
              name="organization"
              placeholder="Microsoft"
              className="experiences"
              value={info.organization}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="position">Name of Position Held:</label>
            <br />
            <input
              type="text"
              name="position"
              placeholder="Software Engineer III"
              className="experiences"
              value={info.position}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="orgStartDate">From:</label>
            <br />
            <input
              type="text"
              name="orgStartDate"
              placeholder="MM YYYY"
              className="experiences"
              value={info.orgStartDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="orgEndDate">To:</label>
            <br />
            <input
              type="text"
              name="orgEndDate"
              placeholder="MM YYYY or Present"
              className="experiences"
              value={info.orgEndDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="information__actions">
          <button
            className="information__actions__add-btn"
            type="button"
            name="experiences"
            onClick={handleButtonClick}
          >
            Add Experience
          </button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
