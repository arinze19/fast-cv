function PersonalInfo(props) {
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
            value={props.state.firstName}
            onChange={props.handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="lastName">Last Name:</label>
          <br />
          <input
            placeholder="Doe"
            type="text"
            name="lastName"
            value={props.state.lastName}
            onChange={props.handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            placeholder="jondoe@test.com"
            type="text"
            name="email"
            value={props.state.email}
            onChange={props.handleChange}
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
            value={props.state.phoneNumber}
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
