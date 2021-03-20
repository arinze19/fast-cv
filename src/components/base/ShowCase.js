import uniqid from "uniqid";
import "../../css/base/showcase.css";

function ShowCase({ list, handleButtonClick, section }) {
  let lists;
  if (section === "qualifications") {
    lists = list.map((item, index) => {
      return (
        <div className="showcase" key={uniqid()}>
          <i
            className="las la-times showcase__close qualifications"
            id={index}
            onClick={handleButtonClick}
          ></i>
          <h2 className="showcase__header">{item.institution}</h2>
          <p className="showcase__para">
            ({`${item.certStartDate} to ${item.certEndDate}`})
          </p>
          <small>{item.certification}</small>
        </div>
      );
    });
  } 
  
  else {
    lists = list.map((item, index) => {
      return (
        <div className="showcase" key={uniqid()}>
          <i
            className="las la-times showcase__close experiences"
            id={index}
            onClick={handleButtonClick}
          ></i>
          <h2 className="showcase__header">{item.organization}</h2>
          <div className="showcase__para">
            ({`${item.orgStartDate} to ${item.orgEndDate}`})
          </div>
          <small>{item.position}</small>
        </div>
      );
    });
  }

  return lists;
}

export default ShowCase;
