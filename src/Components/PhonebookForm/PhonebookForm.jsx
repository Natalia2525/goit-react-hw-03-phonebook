import { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import st from './PhonebookForm.module.css';

const PhonebookForm = ({ onSubmit, onCheckUniq }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const id = shortid.generate();
  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id,
      name,
      number,
    };

    const isValidated = validateForm();
    if (!isValidated) return;
    onSubmit(newContact);

    setName('');
    setNumber('');
  };

  const validateForm = () => {
    if (!name || !number) {
      alert('Please еnter data!');
      setName('');
      setNumber('');
      return false;
    }
    return onCheckUniq(name);
  };

  return (
    <form className={st.form} onSubmit={handleSubmit}>
      <label className={st.title}>
        Name
        <input
          className={st.input}
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Number
        <input
          className={st.input}
          type="text"
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className={st.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCheckUniq: PropTypes.func.isRequired,
};
export default PhonebookForm;
