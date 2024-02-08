import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const deletElement = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-container">
      <div className="info-container">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="website-container">
          <img className="logo-img" src={logoUrl} alt="domain logo" />
          <div className="domain-container">
            <p className="domain-name">{title} </p>
            <p className="domain-url">{domainUrl} </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="button"
        data-testid="delete"
        onClick={deletElement}
      >
        <img
          className="delete-button"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
