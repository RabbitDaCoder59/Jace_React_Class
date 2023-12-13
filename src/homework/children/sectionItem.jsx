import React from "react";

const SectionItem = ({ title, data }) => {
  return (
    <section className="section-item">
      <h2 className="title">{title}</h2>
      <ul className="items">
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default SectionItem;
