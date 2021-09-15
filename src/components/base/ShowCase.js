import { useContext } from 'react';
import { MainContext } from '../../context/MainContextProvider';
import '../../css/base/showcase.css';

function ShowCase({ list, section }) {
  const { cvInfo, setCvInfo } = useContext(MainContext);

  const handleDelete = (id) => {
    const newState = { ...cvInfo };
    newState[section] = newState[section].filter((item) => item.id !== id);

    setCvInfo(newState);
  };

  return list.map((item, index) => {
    return (
      <div className='showcase' key={item.id}>
        <i
          className={`las la-times showcase__close ${section}`}
          onClick={() => handleDelete(item.id)}
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
