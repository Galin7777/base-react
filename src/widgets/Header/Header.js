import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

/**
 * @function Header
 * @returns {JSX.Element}
 */

export const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.left}>
          <NavLink to="/" className={({ isActive }) => isActive ? classes.active : undefined}>
            HomePage
          </NavLink>
        </div>
        <div className={classes.right}>
          <NavLink to="/photos" className={({ isActive }) => isActive ? classes.active : undefined}>
            Photos
          </NavLink>
          <NavLink to="/todos" className={({ isActive }) => isActive ? classes.active : undefined}>
            Todos
          </NavLink>
          <NavLink to="/posts" className={({ isActive }) => isActive ? classes.active : undefined}>
            Posts
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
