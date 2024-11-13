import classes from './Preloader.module.scss';

/**
 * @function Preloader
 * @returns {JSX.Element}
 */

export const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Preloader;
