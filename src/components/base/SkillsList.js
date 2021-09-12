import { useContext } from 'react';
import { MainContext } from '../../context/MainContextProvider';
import SkillItem from "./SkillItem";
import uniqid from "uniqid";

function SkillsList() {
  const { cvInfo, setCvInfo } = useContext(MainContext)
  const { skills } = cvInfo 

  const handleClick = (id) => {
    const newState = [...cvInfo]
    newState.skills.splice(id, 1);

    setCvInfo(newState)
  }

  return skills.map((item, index) => {
    return (
      <SkillItem
        item={item}
        key={uniqid()}
        handleButtonClick={handleClick}
        id={index}
      />
    );
  });
}

export default SkillsList;
