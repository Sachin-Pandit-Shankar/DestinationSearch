// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationListItem} = props
  const {imgUrl, name} = destinationListItem

  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} className="image-card" />
      <p className="name-card">{name}</p>
    </li>
  )
}
export default DestinationItem
