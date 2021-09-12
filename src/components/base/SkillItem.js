import "../../css/base/skillitem.css"

function SkillItem({item, handleClick, id}) {
    return (
        <span className="skill-item">
            { item }
            <i className="las la-times skill-item__close" onClick={handleClick} id={id}></i>
        </span>
    )
}

export default SkillItem