import '../App.css'

const AddCardOrList = () => {
  return (
    <div className='add-title'>
      <span className='add-icon'>
        <svg width="15" height="15" viewBox="0 0 24 24" style={{ fill: 'var(--text-shadow)' }}>
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
        </svg>
      </span>
        <h2 className='add-title-text'>Add card</h2>
    </div>
  )
}

export default AddCardOrList
