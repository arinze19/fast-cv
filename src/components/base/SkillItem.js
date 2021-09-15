import { useContext } from 'react';
import { MainContext } from '../../context/MainContextProvider';
import "../../css/base/skillitem.css"

function SkillItem({ item }) {
  const { cvInfo, setCvInfo } = useContext(MainContext);

  const handleDelete = (id) => {
    const newState = { ...cvInfo };
    newState.skills = newState.skills.filter((item) => item.id !== id);

    setCvInfo(newState);
  }

    return (
        <span className="skill-item">
            { item.name }
            <i className="las la-times skill-item__close" onClick={() => handleDelete(item.id)}></i>
        </span>
    )
}

export default SkillItem