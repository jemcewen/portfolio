import Button from '../../components/Button/Button';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section id='home'>
      <div className='container'>
        <h1 className={styles.heading}>James McEwen</h1>
        <h3 className={styles['sub-heading']}>Full Stack Web Developer</h3>
        <a href='#projects'>
          <Button>View My Work</Button>
        </a>
      </div>
    </section>
  );
};
export default Home;
