import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className='p-4'>
        <h2>Sidebar</h2>
        <nav className='py-4'>
            <ul style={{"padding-inline-start": '0', textAlign: 'center' }}>
                <li>
                    <Link className="navbar-brand" to="/leads">Leads</Link>
                </li>
                <li>
                    <Link className="navbar-brand" to="/sales">Sales</Link>
                </li>
            </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
