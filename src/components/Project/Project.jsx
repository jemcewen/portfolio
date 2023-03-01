import styles from './Project.module.css';

const Project = ({ project }) => {
  return (
    <div className={styles.project}>
      <div className={styles.introduction}>
        <h3 className={styles['project-heading']}>
          <span className={styles.highlight}>1.</span> {project.title}
        </h3>
        <p className={styles.paragraph}>{project.intro}</p>
        <div className={styles['project-links']}>
          <a
            href={project.website}
            target='_blank'
            rel='noreferrer'
            className={styles['project-link']}
          >
            Visit Website
          </a>
          <a
            href={project.github}
            target='_blank'
            rel='noreferrer'
            className={styles['project-link']}
          >
            View Code
          </a>
        </div>
      </div>
      <div className={styles.images}>
        {project.images.map((image) => {
          return (
            <img
              src={image}
              alt={project.title}
              className={styles['project-img']}
            />
          );
        })}
      </div>
      <div className={styles.description}>
        <div>
          <p className={styles.detail}>In Detail</p>
          <h4 className={styles['sub-heading']}>Description</h4>
        </div>
        <div className={styles.paragraphs}>
          {project.description.map((paragraph) => {
            return <p className={styles.paragraph}>{paragraph}</p>;
          })}
        </div>
      </div>
      <div className={styles.technologies}>
        <div>
          <p className={styles.detail}>The tools</p>
          <h4 className={styles['sub-heading']}>Technologies</h4>
        </div>
        <p className={styles.paragraph}>{project.technology}</p>
        <div className={styles.icons}>
          {project.icons.map((icon) => {
            return (
              <img src={icon.url} alt={icon.name} className={styles.icon} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Project;
