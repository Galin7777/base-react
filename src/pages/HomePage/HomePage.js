import { defaultBannerURL } from 'shared/assets';
import classes from './HomePage.module.scss';

/**
 * @function HomePage
 * @returns {JSX.Element}
 */

export const HomePage = () => {

  return (
    <div className={classes.banner}>
      <img src={defaultBannerURL} />
    </div>
  );
};
