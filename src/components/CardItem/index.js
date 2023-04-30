// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsDetails} = props
  const {title, description, imgUrl, className} = cardsDetails

  return (
    <li className={`list-items ${className}`}>
      <h1 className="car-heading">{title}</h1>
      <p className="rol-description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
