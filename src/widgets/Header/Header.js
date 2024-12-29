import { Link } from 'react-router-dom';
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
          <Link to="/">HomePage</Link>
        </div>
        <div className={classes.right}>
          <Link to="/photos">Photos</Link>
          <Link to="/todos">Todos</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </nav>
    </header>
  );
};
