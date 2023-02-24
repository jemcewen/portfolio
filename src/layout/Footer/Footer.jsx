import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href='https://github.com/jemcewen' target='_blank' rel='noreferrer'>
          <FaGithub className={styles.icon} />
        </a>
        <a
          href='mailto:jamesmcewen5@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <FaEnvelope className={styles.icon} />
        </a>
        <a
          href='https://www.linkedin.com/in/jemcewen/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedinIn className={styles.icon} />
        </a>
      </div>
      <p className={styles.copyright}>James McEwen &copy;{footerYear}</p>
    </footer>
  );
};
export default Footer;
