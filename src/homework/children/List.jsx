import { Content } from "./data";
import "./List.css";
import SectionItem from "./sectionItem";
const List = () => {
  return (
    <>
      <h1>Assignment</h1>
      {Content.map((item, index) => (
        <SectionItem key={index} title={item.title} data={item.data} />
      ))}
    </>
  );
};

export default List;
