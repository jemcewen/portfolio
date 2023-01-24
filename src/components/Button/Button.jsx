import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={styles.button}
      disabled={props.disabled}
    >
      <span className={styles['button-shadow']}></span>
      <span className={styles['button-edge']}></span>
      <span className={styles['button-front']}>{props.children}</span>
    </button>
  );
};
export default Button;
