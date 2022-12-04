import "./Attention.css";

export const Attention = ({ isActiveAttention, messageAttention }) => {
  return (
    <div
      className={
        isActiveAttention
          ? "attention attention__container"
          : "attention attention__container_hidden"
      }
    >
      <div className='attention'>
        <p className='attention__text'>{messageAttention}</p>
      </div>
    </div>
  );
};
