import uniqid from "uniqid";

function ShowCase({ list, handleButtonClick }) {
  let lists;
  if (list.institution) {
    lists = list.map((item) => {
      return (
        <div className="showcase" key={uniqid()}>
          <h2>
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
          <h2>
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
