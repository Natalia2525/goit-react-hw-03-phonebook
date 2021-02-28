import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  list: {
    padding: 0,
    margin: 0,
  },
});
const ContactList = ({ contacts, onDelete }) => {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};
export default ContactList;
