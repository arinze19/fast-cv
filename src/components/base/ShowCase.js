import uniqid from 'uniqid';
import '../../css/base/showcase.css';

function ShowCase({ list, section }) {
  return list.map((item, index) => {
    return (
      <div className='showcase' key={uniqid()}>
        <i
          className={`las la-times showcase__close ${section}`}
          id={uniqid()}
        ></i>
        <h2 className='showcase__header'>{item.name}</h2>
        <p className='showcase__para'>
          ({`${item.startDate} to ${item.endDate}`})
        </p>
        <small>{item.certification || item.position}</small>
      </div>
    );
  });
}

export default ShowCase;
