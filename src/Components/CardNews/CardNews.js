export default function CardNews({ url, urlToImage, title, description, publishedAt, source }) {
  return (
    <div className="card-item">
      <div className="card-item__image">
        <img className="card-item__img" src={urlToImage} alt="" />
      </div>
      <p className="card-item__title">{title}</p>
      <p className="card-item__subtitle">{description}</p>
      <div className="card-item__source">
        <time className="card-item__time">{publishedAt.slice(0, 10).split('-').reverse().join('.')}</time>
        <a className="card-item__name" href={url} target="_blank" rel="nofollow noopener noreferrer" title="Страница новости">{source.name}</a>
      </div>
    </div>
  )
};