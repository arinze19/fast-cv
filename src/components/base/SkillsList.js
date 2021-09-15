import { useContext } from 'react';
import { MainContext } from '../../context/MainContextProvider';
import SkillItem from "./SkillItem";

function SkillsList() {
  const { cvInfo } = useContext(MainContext)
  const { skills } = cvInfo 

  return skills.map((item) => {
    return (
      <SkillItem
        item={item}
        key={item.id}
      />
    );
  });
}

export default SkillsList;
