import "./NewsCard.css";
const NewsCard = ({ title, text, myKey, blueColor }) => {
  // console.log(prop);
  return (
    <div
      className={`News-card ${myKey ? "red" : ""} ${blueColor ? "blue" : ""}  `}
    >
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};
export default NewsCard;
