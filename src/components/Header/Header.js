import React from 'react'

const Header = (props) => {
  return (
    <div className="container pt-3 pb-3">
      <div className="title col-2">
        <p className="title__name" style={{ visibility: 'hidden' }}>
          Kino<span className="title__name-prefix">poisk</span>
        </p>
      </div>
      <div className="search col-10"></div>
    </div>
  )
}

export default Header
