import styles from './Projects.module.css';
import projects from '../../assets/projects';
import Project from '../../components/Project/Project';

const Projects = () => {
  return (
    <section id='projects' className={styles.section}>
      <div className={styles.container}>
        <h2>Projects</h2>
        <div className={styles.projects}>
          {projects.map((project) => {
            return <Project project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Projects;
