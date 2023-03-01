import Button from '../../components/Button/Button';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section id='home' className={styles.section}>
      <div className={styles.content}>
        <p className={styles.leading}>Hi, my name is</p>
        <h1 className={styles.heading}>James McEwen.</h1>
        <h3 className={styles['sub-heading']}>
          I am a Full Stack Web Developer.
        </h3>
        <a href='#projects' className={styles.button}>
          <Button>View My Work</Button>
        </a>
      </div>
      <div className={styles.spacer}></div>
    </section>
  );
};
export default Home;
