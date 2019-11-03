import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

function Navbar(
  {
    links = [],
  }
) {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        {
          links.map((link, index) => {
            const classname = classnames({
              'navbar__logo-link': link.isLogo,
            });

            return (
              <NavLink
                key={index}
                className={classname}
                exact
                to={link.route}
              >
                <img className='navbar__icon' alt={link.text} src={process.env.PUBLIC_URL + link.image} />
                {link.text}
              </NavLink>
            )
          })
        }
      </div>
    </div>
  )
}

export default Navbar;
