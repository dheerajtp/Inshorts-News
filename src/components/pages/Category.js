import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Searching from "../Searching";
import SingleItem from "../SingleItem";

const Category = () => {
  let { category } = useParams();
  const [newsResult, setNewsResult] = useState([]);
  const getNews = async () => {
    const news = await fetch(`${process.env.REACT_APP_API}${category}`, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    });

    const result = await news.json();
    setNewsResult(result.data);
  };
  useEffect(() => {
    setNewsResult([]);
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  if (newsResult.length === 0) {
    return <Searching />;
  } else {
    return (
      <>
        {newsResult.map((singleitem) => {
          let key = Math.random();
          return (
            <SingleItem
              title={singleitem.title}
              key={key}
              image={singleitem.imageUrl}
              content={singleitem.content}
              author={singleitem.author}
              date={singleitem.date}
              more={singleitem.readMoreUrl}
            />
          );
        })}
      </>
    );
  }
};

export default Category;
