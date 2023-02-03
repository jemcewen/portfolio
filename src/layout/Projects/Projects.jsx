import Button from '../../components/Button/Button';
import styles from './Projects.module.css';
import pastDrafts from '../../assets/past-drafts.png';
import rateMyCampus from '../../assets/rate-my-campus.png';

const Projects = () => {
  return (
    <section id='projects'>
      <div className='container'>
        <h2>Projects</h2>
        <div className={styles.projects}>
          <div className={styles['project-card']}>
            <img
              src={pastDrafts}
              className={styles['project-img']}
              alt='past-drafts'
            />
            <div className={styles['project-info']}>
              <h4 className={styles['project-title']}>Past Drafts</h4>
              <p>
                Single Page Application that pulls data from an ESPN API to
                display information about NFL players and when they were
                selected in the entry draft. Built with React, implements
                various react hooks including context, reducer, and state
                management.
              </p>

              <div className={styles.buttons}>
                <a
                  href='https://past-drafts.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button>Live</Button>
                </a>
                <a
                  href='https://github.com/jemcewen/drafted-before'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button>Code</Button>
                </a>
              </div>
            </div>
          </div>

          <div className={styles['project-card']}>
            <img
              src={rateMyCampus}
              className={styles['project-img']}
              alt='past-drafts'
            />
            <div className={styles['project-info']}>
              <h4 className={styles['project-title']}>Rate My Campus</h4>
              <p>
                Full-stack web application allows users to rate and review
                university campuses. Features REST API, image upload, map
                functionality, and authentication with Passport.js.
              </p>
              <div className={styles.buttons}>
                <a
                  href='https://rate-my-campus.onrender.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button>Live</Button>
                </a>{' '}
                <a
                  href='https://github.com/jemcewen/rate-my-campus'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button>Code</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
