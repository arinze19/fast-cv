import uniqid from "uniqid";

function ShowCase({ list, handleButtonClick, section }) {

  let lists;
  if (section === "qualifications") {
    lists = list.map((item) => {
      return (
        <div className="showcase" key={uniqid()}>
          <h2 className="showcase__header">
            {item.institution} ({`${item.certStartDate} to ${item.certEndDate}`})
          </h2>
          <small>{item.certification}</small>
        </div>
      );
    });
  } else {
    lists = list.map((item) => {
      return (
        <div className="showcase" key={uniqid()}>
          <h2 className="showcase__header">
            {item.organization} ({`${item.orgStartDate} to ${item.orgEndDate}`})
          </h2>
          <small>{item.position}</small>
        </div>
      );
    });
  }

  return lists;
}

export default ShowCase;
