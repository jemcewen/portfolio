import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelopeSquare,
  FaChevronDown,
} from 'react-icons/fa';
import Button from '../../components/Button/Button';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section id='home'>
      <div className={styles.landing}>
        <h1 className={styles.name}>James McEwen</h1>
        <h3 className={styles.title}>Full-Stack Web Developer</h3>
        <div className={styles.buttons}>
          <Button className={styles.button}>
            <a href='#projects'>Projects</a>
          </Button>
          <Button className={`${styles.contact} ${styles.button}`}>
            <a href='#contact'>Contact</a>
          </Button>
        </div>
        <div className={styles.socials}>
          <a
            href='https://github.com/jemcewen'
            target='_blank'
            rel='noreferrer'
          >
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

        <div className={styles.arrow}>
          <a href='#about'>
            <FaChevronDown className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Home;
