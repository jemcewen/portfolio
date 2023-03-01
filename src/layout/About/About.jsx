import Button from '../../components/Button/Button';
import styles from './About.module.css';

const About = () => {
  return (
    <section id='about' className={styles.section}>
      <div className={styles.container}>
        <h2>About</h2>
        <div className={styles.content}>
          <div className={styles['about-text']}>
            <div>
              I am a{' '}
              <span className={styles.highlight}>Full Stack Web Developer</span>{' '}
              with a strong foundation in object-oriented programing and web
              technologies. I studied at the British Columbia Institute of
              Technology where I completed the{' '}
              <span className={styles.highlight}>
                Computer Systems Technology
              </span>{' '}
              Diploma.
            </div>
            <a href='#contact'>
              <Button className={styles.contact}>Contact</Button>
            </a>
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
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
                alt='java'
                className={styles.icon}
              />
              <p>Java</p>
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
