import "../../css/base/skillitem.css"

function SkillItem({item, handleButtonClick, id}) {
    return (
        <span className="skill-item">
            { item }
            <i className="las la-times skill-item__close" onClick={handleButtonClick} id={id}></i>
        </span>
    )
}

export default SkillItem