import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelopeSquare,
  FaChevronUp,
} from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles['return-home']}>
        <a href='#home'>
          <FaChevronUp className={styles.arrow} />
        </a>
      </div>
      <div className={styles.socials}>
        <a href='https://github.com/jemcewen' target='_blank' rel='noreferrer'>
          <FaGithubSquare className={styles.icon} />
        </a>
        <a
          href='https://www.linkedin.com/in/jemcewen/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin className={styles.icon} />
        </a>
        <a
          href='mailto:jamesmcewen5@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <FaEnvelopeSquare className={styles.icon} />
        </a>
      </div>
      <p className={styles.copyright}>James McEwen &copy;{footerYear}</p>
    </footer>
  );
};
export default Footer;
