import {
  FaGithubSquare,
  FaEnvelopeSquare,
  FaLinkedin,
  FaChevronDown,
} from 'react-icons/fa';
import Button from '../../components/Button/Button';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section id='home'>
      <div className={styles.landing}>
        <h1 className={styles.heading}>James McEwen</h1>
        <h3 className={styles['sub-heading']}>Full Stack Web Developer</h3>
        <a href='#projects'>
          <Button className={styles.button}>View My Work</Button>
        </a>
        <div className={styles.socials}>
          <a
            href='https://github.com/jemcewen'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithubSquare className={styles.icon} />
          </a>
          <a
            href='mailto:jamesmcewen5@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <FaEnvelopeSquare className={styles.icon} />
          </a>
          <a
            href='https://www.linkedin.com/in/jemcewen/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Home;
