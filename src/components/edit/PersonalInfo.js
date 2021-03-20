import SkillsList from "../base/SkillsList"

function PersonalInfo({ info, handleInputChange, handleButtonClick, list }) {
  return (
    <div className="information">
      <h2 className="heading">Personal Information.</h2>
      <hr />

      <div className="information__inputs">
        <div className="form-control">
          <label htmlFor="first-name">First Name:</label>
          <br />
          <input
            placeholder="John"
            type="text"
            name="firstName"
            value={info.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="lastName">Last Name:</label>
          <br />
          <input
            placeholder="Doe"
            type="text"
            name="lastName"
            value={info.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="location">Location:</label>
          <br />
          <input
            placeholder="California, US"
            type="text"
            name="location"
            value={info.location}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            placeholder="jondoe@test.com"
            type="text"
            name="email"
            value={info.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="phone-number">Phone Number:</label>
          <br />
          <input
            type="tel"
            name="phoneNumber"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="+1-234-567-890"
            value={info.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="linkedin">LinkedIn:</label>
          <br />
          <input
            placeholder="https://linkedin.com/in/johndoe"
            type="text"
            name="linkedin"
            value={info.linkedin}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="website">Website:</label>
          <br />
          <input
            placeholder="https://johndoe.com"
            type="text"
            name="website"
            value={info.website}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="website">Skills:</label>
          <br />
          <input
            placeholder="Vue.JS"
            type="text"
            name="skill"
            value={info.skill}
            onChange={handleInputChange}
          />
          <button
            className="main-form__button"
            style={{ marginLeft: 0 }}
            name="skills"
            onClick={handleButtonClick}
          >
            Add Skill
          </button>
        </div>

        <SkillsList list={list} handleButtonClick={handleButtonClick}/>
      </div>
    </div>
  );
}

export default PersonalInfo;
