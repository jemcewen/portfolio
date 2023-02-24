import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        className={
          clicked ? `${styles.overlay} ${styles.show}` : `${styles.overlay}`
        }
      ></div>
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
            <li onClick={() => handleScroll('home')}>
              <p onClick={closeMenu}>Home</p>
            </li>
            <li onClick={() => handleScroll('about')}>
              <p onClick={closeMenu}>About</p>
            </li>
            <li onClick={() => handleScroll('projects')}>
              <p onClick={closeMenu}>Projects</p>
            </li>
            <li onClick={() => handleScroll('contact')}>
              <p onClick={closeMenu}>Contact</p>
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
    </>
  );
};
export default Navigation;
