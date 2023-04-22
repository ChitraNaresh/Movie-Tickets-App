import Booking from '../Booking'
import './index.css'

const FirstPage = props => {
  const {eachItem, onChangeIntialVal} = props
  const {show, score} = eachItem
  const {
    image,
    status,
    name,
    summary,
    _links,
    genres,
    language,
    premiered,
  } = show
  const viewMore = () => onChangeIntialVal(name, summary)

  const {nextepisode, previousepisode} = _links
  const selfSrc = _links.self
  const imageSrc = image !== null && image.medium
  return (
    <li>
      {image !== null && (
        <div className="img-card-container">
          <div className="movie-img-card">
            <img src={imageSrc} alt="movie img" className="movie-img" />
            <h1>{name}</h1>
            <div className="links-container">
              {previousepisode !== undefined && (
                <button type="button" className="nav-button">
                  <a href={previousepisode.href}>Previous Episode</a>
                </button>
              )}
              {selfSrc !== undefined && (
                <button type="button" className="nav-button">
                  <a href={selfSrc.href}>Now</a>
                </button>
              )}
              {nextepisode !== undefined && (
                <button type="button" className="nav-button">
                  <a href={nextepisode.href}>Next Episode</a>
                </button>
              )}
            </div>
          </div>
          <div className="about-movie">
            <h2>Show details</h2>
            <p>Score: {score}</p>
            <p>Status: {status}</p>
            <p>
              Genre:
              {genres.map(eachGenre => (
                <span>{eachGenre} </span>
              ))}
            </p>
            <p>Language: {language}</p>
            <p>Premiered: {premiered}</p>
            <div className="button-card">
              <button type="button" onClick={viewMore} className="nav-button">
                View-More
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  )
}
export default FirstPage
