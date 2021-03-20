import SkillItem from "./SkillItem";
import uniqid from "uniqid";

function SkillsList({ list, handleButtonClick }) {
  return list.map((item, index) => {
    return (
      <SkillItem
        item={item}
        key={uniqid()}
        handleButtonClick={handleButtonClick}
        id={index}
      />
    );
  });
}

export default SkillsList;
