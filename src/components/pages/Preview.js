import uniqid from "uniqid";
import "../../css/pages/preview.css";

function Preview({ info, lists }) {
  const { organizationsList, institutionsList, skillsList } = lists;

  return (
    <div className="preview-container">
      <div className="preview-container__header">
        <div className="preview-container__header__left">
          <h2>
            {info.firstName} {info.lastName}
          </h2>
          <p>{info.email}</p>
          <p>{info.website}</p>
          <p>{info.linkedin}</p>
        </div>

        <div className="preview-container__header__right">
          <p>{info.location}</p>
          <p>{info.phoneNumber}</p>
        </div>
      </div>

      <hr />

      <div className="preview-container__skills-container">
        <h2>Skills.</h2>
        <ul>
          {skillsList.map((skill) => (
            <li key={uniqid()}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="preview-container__qualifications-section">
        <h2>Education and Qualifications.</h2>
        {institutionsList.map((item) => (
          <div className="preview-container__qualifications" key={uniqid()}>
            <h3> { item.institution } </h3>
            <i>{ item.certification }</i>
            <p>
              <small>{item.certStartDate} - {item.certEndDate}</small>
            </p>
          </div>
        ))}
      </div>

      <div className="preview-container__experiences-section">
        <h2>Experience.</h2>
        {organizationsList.map((item) => (
          <div className="preview-container__qualifications" key={uniqid()}>
          <h3> { item.organization } </h3>
          <i>{ item.position }</i>
          <p>
            <small>{item.orgStartDate} - {item.orgEndDate}</small>
          </p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Preview;
