import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import useInput from '../../hooks/useInput';
import Button from '../../components/Button/Button';
import styles from './Contact.module.css';
import toast from 'react-hot-toast';

const validateText = (text) => {
  return text.trim() !== '';
};

const validateEmail = (val) => {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val);
};

const Contact = () => {
  const form = useRef();

  const name = useInput(validateText);
  const email = useInput(validateEmail);
  const message = useInput(validateText);

  const formIsValid = name.isValid && email.isValid && message.isValid;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      name.handleBlur();
      email.handleBlur();
      message.handleBlur();
      return;
    }

    sendEmail();

    name.reset();
    email.reset();
    message.reset();
  };

  const sendEmail = (e) => {
    const promise = emailjs.sendForm(
      'Gmail',
      'template_wt47icn',
      form.current,
      'gfJFTBt54N2j7GJpI'
    );

    toast.promise(
      promise,
      {
        loading: 'Sending message...',
        success: 'Message Sent!',
        error: 'Unable to send message.',
      },
      {
        style: {
          fontWeight: '600',
          minWidth: '20rem',
        },
      }
    );
  };

  // Returns proper class names for an input based on errors
  const inputStyles = (hasError) =>
    hasError ? `${styles.input} ${styles.invalid}` : `${styles.input}`;

  // Shows or hides error message based on errors
  const messageStyles = (hasError) =>
    hasError ? `${styles.message}` : `${styles.hidden} ${styles.message}`;

  return (
    <section className={styles.section} id='contact'>
      <div className={styles.content}>
        <h2>Contact</h2>
        <form ref={form} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles['form-group']}>
            <label htmlFor='name' className={styles.label}>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Enter your name'
              className={inputStyles(name.hasError)}
              value={name.value}
              onChange={name.handleChange}
              onBlur={name.handleBlur}
            />
            <p className={messageStyles(name.hasError)}>
              Please enter your name.
            </p>
          </div>
          <div className={styles['form-group']}>
            <label htmlFor='email' className={styles.label}>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              className={inputStyles(email.hasError)}
              value={email.value}
              onChange={email.handleChange}
              onBlur={email.handleBlur}
            />
            <p className={messageStyles(email.hasError)}>
              Please enter a valid email.
            </p>
          </div>
          <div className={styles['form-group']}>
            <label htmlFor='message' className={styles.label}>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              placeholder='Enter your message'
              rows='4'
              cols='1'
              wrap='hard'
              className={inputStyles(message.hasError)}
              value={message.value}
              onChange={message.handleChange}
              onBlur={message.handleBlur}
            />
            <p className={messageStyles(message.hasError)}>
              Please enter a message.
            </p>
          </div>
          <div className={styles.submit}>
            <Button type='submit'>Submit</Button>
          </div>
        </form>
      </div>
      <div className={styles.spacer}></div>
    </section>
  );
};
export default Contact;
