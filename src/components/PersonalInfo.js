import { useState } from "react"
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
}


function PersonalInfo() {
  const [ personalInfoValues, setPersonalInfo ] = useState(initialValues)

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfoValues,
      [name]: value,
    });
  }

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
            value={personalInfoValues.firstName}
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
            value={personalInfoValues.lastName}
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
            value={personalInfoValues.email}
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
            value={personalInfoValues.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
