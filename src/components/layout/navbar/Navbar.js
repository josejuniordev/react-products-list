import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { generateStringKey } from '../../../helpers/utils';

function Navbar(
  {
    links = [],
  },
) {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        {
          links.map((link) => {
            const classname = classnames({
              'navbar__logo-link': link.isLogo,
            });

            const linkKey = generateStringKey(link.text);

            return (
              <NavLink
                key={linkKey}
                className={classname}
                exact
                to={link.route}
              >
                <img className="navbar__icon" alt={link.text} src={process.env.PUBLIC_URL + link.image} />
                {link.text}
              </NavLink>
            );
          })
        }
      </div>
    </div>
  );
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

Navbar.defaultProps = {
  links: [],
};

export default Navbar;
