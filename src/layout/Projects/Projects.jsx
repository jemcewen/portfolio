import Button from '../../components/Button/Button';
import styles from './Projects.module.css';
import pastDrafts from '../../assets/past-drafts.png';
import rateMyCampus from '../../assets/rate-my-campus.png';

const Projects = () => {
  return (
    <section id='projects'>
      <div className='container'>
        <h2>Projects</h2>
        <div className={styles.project}>
          <img
            src={pastDrafts}
            className={styles['project-img']}
            alt='past-drafts'
          />
          <div className={styles['project-info']}>
            <h3>Past Drafts</h3>
            <p>
              A basic React application that allows the user to search for a
              player and view when that player was drafted and who was selected
              before them.
            </p>
            <div className={styles.buttons}>
              <Button>
                <a
                  href='https://past-drafts.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Demo
                </a>
              </Button>
              <Button>
                <a
                  href='https://github.com/jemcewen/drafted-before'
                  target='_blank'
                  rel='noreferrer'
                >
                  Code
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <img
            src={rateMyCampus}
            className={styles['project-img']}
            alt='past-drafts'
          />
          <div className={styles['project-info']}>
            <h3>Rate My Campus</h3>
            <p>
              A full stack application that allows users to rate university
              campuses. This application includes authentication, image upload,
              and more.
            </p>
            <div className={styles.buttons}>
              <Button>
                <a
                  href='https://rate-my-campus.onrender.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Demo
                </a>
              </Button>
              <Button>
                <a
                  href='https://github.com/jemcewen/rate-my-campus'
                  target='_blank'
                  rel='noreferrer'
                >
                  Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
