import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

/**
 * @function Header
 * @returns {JSX.Element}
 */

export const Header = () => {
  const [loadingLink, setLoadingLink] = useState(null);

  const handleLinkClick = (path, event) => {
    if (loadingLink) {
      event.preventDefault();
      return;
    }
    setLoadingLink(path);
    setTimeout(() => setLoadingLink(null), 1000);
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.left}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            HomePage
          </NavLink>
        </div>
        <div className={classes.right}>
          <NavLink
            to="/photos"
            className={({ isActive }) =>
              `${isActive ? classes.active : ''} ${
                loadingLink === '/photos' ? classes.disabled : ''
              }`
            }
            onClick={(event) => handleLinkClick('/photos', event)}
          >
            Photos
          </NavLink>
          <NavLink
            to="/todos"
            className={({ isActive }) =>
              `${isActive ? classes.active : ''} ${
                loadingLink === '/todos' ? classes.disabled : ''
              }`
            }
            onClick={(event) => handleLinkClick('/todos', event)}
          >
            Todos
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              `${isActive ? classes.active : ''} ${
                loadingLink === '/posts' ? classes.disabled : ''
              }`
            }
            onClick={(event) => handleLinkClick('/posts', event)}
          >
            Posts
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
