import React from 'react'
import { Link } from 'react-router-dom'

const Main = ({children}) => {
  return (
    <div>
    <header>
      <nav className="navbar bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand" >
            POS
          </Link>
        </div>
      </nav>
    </header>
    <main>
      <div className=" container mt-3">
        {children}
      </div>
    </main>
  </div>
  )
}

export default Main