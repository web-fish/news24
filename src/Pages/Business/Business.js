import React, { useState, useEffect } from 'react';
import CardNews from '../../Components/CardNews/CardNews';
import Loader from '../../Components/Loader/Loader';

export default function Business() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = '0b353ed54e1a48d79a662183a552f29c';
  const URL = 'https://newsapi.org/v2/top-headlines?';

  useEffect(function () {
    fetch(`${URL}country=ru&category=business&pageSize=12&apiKey=${API_KEY}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        setNews(result.articles);
        setLoading(true);
      });
  }, []);

  return (
    <>
      <h1 className="content__title">Бизнес</h1>
      <div className="content__cards">
        {loading ? news.map(function (elem, index) {
          if (elem.urlToImage === null) {
            return false;
          } else if (elem.source.name === 'Mail.ru' || elem.source.name === 'Sportmail.ru') {
            return false;
          };
          return (
            <CardNews
              key={index}
              urlToImage={elem.urlToImage}
              title={elem.title}
              description={elem.description}
              publishedAt={elem.publishedAt}
              source={elem.source}
              url={elem.url}
            />
          )
        }) : <Loader />}
      </div>
    </>
  );
};
