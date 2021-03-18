import ShowCase from "../base/ShowCase";

function Qualifications({ info, handleInputChange, handleButtonClick, list }) {
  return (
    <div className="information">
      <h2 className="heading">Education and Qualifications.</h2>
      <hr />
      
      {/* setting up a section props to determine how to render showcase component */}
      <ShowCase list={list} section="qualifications"/>

      <div>
        <div className="information__inputs">
          <div className="form-control">
            <label htmlFor="institution">Name of Institution:</label>
            <br />
            <input
              type="text"
              name="institution"
              placeholder="Stanford University"
              className="qualifications"
              value={info.institution}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="certification">Name of Certification:</label>
            <br />
            <input
              type="text"
              name="certification"
              placeholder="Bsc. Computer Science"
              className="qualifications"
              value={info.certification}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="certStartDate">From:</label>
            <br />
            <input
              type="text"
              name="certStartDate"
              placeholder="DD-MM-YYYY"
              className="qualifications"
              value={info.certStartDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="certEndDate">To:</label>
            <br />
            <input
              type="text"
              name="certEndDate"
              placeholder="DD-MM-YYYY or Present"
              className="qualifications"
              value={info.certEndDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="information__actions">
          <button
            className="information__actions__add-btn"
            type="button"
            name="qualifications"
            onClick={handleButtonClick}
          >
            Add Qualification
          </button>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;
