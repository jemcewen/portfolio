import Button from '../../components/Button/Button';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section id='home'>
      <div className='container'>
        <h1>James McEwen</h1>
        <h3>Full-Stack Web Developer</h3>
        <div className={styles.buttons}>
          <Button className={styles.button}>
            <a href='#projects'>Projects</a>
          </Button>
          <Button className={`${styles.contact} ${styles.button}`}>
            <a href='#contact'>Contact</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Home;
