import { useState } from 'react';

const useInput = (validate) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const isValid = validate(value);
  const hasError = !validate(value) && touched;

  const handleChange = (e) => {
    setTouched(true);
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const reset = () => {
    setValue('');
    setTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    handleChange,
    handleBlur,
    reset,
  };
};

export default useInput;
