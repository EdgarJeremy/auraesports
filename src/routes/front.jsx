import { useEffect } from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';

export default function Front() {

  return (
    <>
      <div className="front-container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img src="/assets/aura-logo.png" /><img className="aura-text" src="/assets/aura-text.png" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current="page" to="/front/">Home</NavLink>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/front/division">Division</NavLink>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/front/schedules">Schedule</NavLink>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/front/update-media">Update & Media</NavLink>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/front/community">Community</NavLink>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/front/company">Company</NavLink>
              <a target="_blank" className="nav-link" href="https://instagram.com/auramerch">Store</a>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>

      <div className="footer">
        <div className="footer-container">
          <div className="row">
            <div className="col-md-2">
              <div className="footer-logo">
                <img src="/assets/aura-logo.png" />
              </div>
            </div>
            <div className="col-md-10">
              <div className="row footer-menus">
                <div className="col-md-4">
                  <h2>Aura Esports</h2>
                  <ul>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Schedule</Link></li>
                    <li><Link to="#">Update</Link></li>
                    <li><Link to="#">Gallery</Link></li>
                    <li><Link to="#">Brand Ambassador</Link></li>
                    <li><Link to="#">Talent</Link></li>
                    <li><Link to="#">Videos</Link></li>
                    <li><Link to="#">Team Community</Link></li>
                    <li><Link to="#">Event</Link></li>
                    <li><Link to="#">Partners</Link></li>
                    <li><Link to="#">Contact</Link></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h2>Divisions</h2>
                  <ul>
                    <li><Link to="#">Mobile Legends</Link></li>
                    <li><Link to="#">PUBG Mobile</Link></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h2>Follow Us</h2>
                  <ul>
                    <li><a target="_blank" href="https://instagram.com/auraesports"><i className="bi bi-instagram"></i> @auraesports</a></li>
                    <li><a target="_blank" href="https://instagram.com/auraesportsfamily"><i className="bi bi-instagram"></i> @auraesportsfamily</a></li>
                    <li><a target="_blank" href="https://youtube.com/@auratv"><i className="bi bi-youtube"></i> AuraTV</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; {(new Date()).getFullYear()} Aura Esports - Made with <i className="bi bi-heart-fill"></i> by PiLab
        </div>
      </div>
    </>
  )
}