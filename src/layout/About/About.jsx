import Button from '../../components/Button/Button';
import styles from './About.module.css';

const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <h2>About</h2>
        <div className={styles.content}>
          <div className={styles['about-text']}>
            <div>
              I am a <b>Full-Stack Web Developer</b> with a passion for building
              web applications. I studied at the British Columbia Institute of
              Technology and completed the <b>Computer Systems Technology</b>{' '}
              Diploma.
            </div>
            <Button className={styles.contact}>
              <a href='#contact'>Contact</a>
            </Button>
          </div>
          <div className={styles['tech-skills']}>
            <div className={styles['tech-item']}>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                alt='html5'
                className={styles.icon}
              />
              <p>HTML</p>
            </div>
            <div className={styles['tech-item']}>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                alt='css3'
                className={styles.icon}
              />
              <p>CSS</p>
            </div>
            <div className={styles['tech-item']}>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                alt='javascript'
                className={styles.icon}
              />
              <p>JavaScript</p>
            </div>
            <div className={styles['tech-item']}>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
                alt='bootstrap'
                className={styles.icon}
              />
              <p>Bootstrap</p>
            </div>
            <div className={styles['tech-item']}>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                alt='git'
                className={styles.icon}
              />
              <p>Git</p>
            </div>
            <div className={styles['tech-item']}>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                alt='react'
                className={styles.icon}
              />
              <p>React</p>
            </div>
            <div className={styles['tech-item']}>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                alt='nodejs'
                className={styles.icon}
              />
              <p>Node.js</p>
            </div>
            <div className={styles['tech-item']}>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                alt='mongodb'
                className={styles.icon}
              />
              <p>MongoDB</p>
            </div>

            <div className={styles['tech-item']}>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
                alt='express'
                className={styles.icon}
              />
              <p>Express</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
