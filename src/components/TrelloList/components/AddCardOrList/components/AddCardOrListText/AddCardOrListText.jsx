
const AddCardOrListText = () => {
  return (
    <div className="">
        <label>
            <input type="text" placeholder="Enter a title for this card..."></input>
        </label>
        <button>Añadir Tarjeta</button>
        <button className="list-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" style={{ fill: 'var(--text-color)' }}>
                <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/>
            </svg>
        </button>
    </div>
  )
}

export default AddCardOrListText
