import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <a href='#home' className={styles.logo}>
        James McEwen
      </a>
      <div>
        <ul
          className={
            clicked
              ? `${styles['nav-links']} ${styles.clicked}`
              : `${styles['nav-links']}`
          }
        >
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a className={styles.contact} href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.burger} onClick={handleClick}>
        {clicked ? (
          <FaTimes className={styles.icon} />
        ) : (
          <FaBars className={styles.icon} />
        )}
      </div>
    </nav>
  );
};
export default Navigation;
