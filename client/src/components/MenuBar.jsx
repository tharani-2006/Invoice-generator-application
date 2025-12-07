import React, { use } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { SignedIn, SignedOut, SignIn, useClerk, UserButton } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { User } from 'lucide-react' 


const MenuBar = () => {

  const navigate = useNavigate();

  const { openSignIn } = useClerk();

  const openLogin = () => {
    openSignIn({});
  }

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top'>
        <div className='container py-2'>
          <Link className='navbar-brand d-flex align-items-center' to='/'>
            <Logo />
            <span className='fw-bolder fs-4 mx-3' style={{ letterSpacing: '-0.5px', color: '#0D6EFDB2' }}>
              QuickInvoice
            </span>
          </Link>
          <button
            className='navbar-toggler'
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav" // same as 27th line id
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span> {/* for the icon of mobile view */}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/">
                  Home
                </Link>
              </li>

              <SignedIn>
                <li className="nav-item">
                  <Link className="nav-link fw-medium" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link fw-medium" onClick={() => navigate('/generate')} >
                    Generate
                  </button>
                </li>
                <UserButton />
              </SignedIn>

              <SignedOut>
                <li className="nav-item">
                  <button className="btn btn-primary rounded-pill px-4" onClick={openLogin} >
                    Login/Signup
                  </button>
                </li>
              </SignedOut>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MenuBar
