

function cvGenButton({ cv }) {
  return (
    <button className="main-form__button" onClick={convertToPdf(cv)}>
      Generate CV
    </button>
  );
}

export default cvGenButton;
