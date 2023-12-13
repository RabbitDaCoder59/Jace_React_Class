import { Fragment } from "react";
import NewsCard from "./NewsCard";
import Item from "./item";
import List from "../homework/children/List";

const divStyle = {
  // display: "flex",
  // gap: "2rem",
};

const LessonOne = () => {
  const data = [
    {
      PetTitle: "My Favourite Pets",
      Petli: "dogs",
      li1: "Cats",
      li2: "Rabbits",
      li3: "Birds",
    },
    {
      ColorTitle: "My Favourite Color",
      Colorli: "Black",
      cli: "White",
      cli1: "Dark Blue",
    },
  ];

  const news = [
    {
      title: "I'm Learning React",
      text: "It feels good to learn React",
    },
    {
      title: "I'm Learning React Native",
      text: "It feels good to learn React Native",
    },
    {
      title: "I'm Learning Lavarel",
      text: "It feels good to learn Lavarel",
    },
  ];
  const names = ["Victor", "Cynthia", "Martins", "Chinedu"];

  return (
    <div>
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
      <div style={divStyle}>
        {news.map(({ text, title }, index) => {
          let isBlue = false;
          if (title.includes("Lavarel")) {
            isBlue = true;
          }
          return (
            <NewsCard
              key={index}
              title={title}
              text={text}
              blueColor={isBlue}
            />
          );
        })}
        <NewsCard
          title={"Learn C programming"}
          text={"This a good programming language"}
          myKey
        />
      </div>
      <div>
        {data.map(
          (
            { PetTitle, Petli, li1, li2, li3, ColorTitle, Colorli, cli1, cli },
            index
          ) => {
            return (
              <div>
                <h1>{PetTitle}</h1>
                <ul>
                  <li>{Petli}</li>
                  <li>{li1}</li>
                  <li>{li2}</li>
                  <li>{li3}</li>
                </ul>
                <h1>{ColorTitle}</h1>
                <ul>
                  <li>{Colorli}</li>
                  <li>{Colorli}</li>
                  <li>{cli}</li>
                  <li>{cli1}</li>
                </ul>
              </div>
            );
          }
        )}
      </div>
      {/* Children */}
      <Item>
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
      </Item>
    </div>
  );
};
export default LessonOne;
