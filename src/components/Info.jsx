
const Info = ({ title, image, description, onClose }) => {

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src={image} alt="Empty" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button className="send-btn" onClick={onClose}>
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;