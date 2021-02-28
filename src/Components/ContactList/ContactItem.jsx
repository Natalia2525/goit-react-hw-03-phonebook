import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  listItem: {
    width: 300,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    background: 'linear-gradient(to left, #f8ab8d 0%, white, #f8ab8d)',
  },
  name: {
    marginRight: 'auto',
  },
  number: {
    fontWeight: '500',
    marginRight: 'auto',
  },
  button: {
    backgroundColor: 'rgb(184, 92, 80)',
    boxShadow: '0px 0px 3px 0px black',
    borderRadius: 5,
    cursor: 'pointer',
  },
});
const ContactItem = ({ name, number, id, onDelete }) => {
  const classes = useStyles();
  return (
    <li className={classes.listItem}>
      <p className={classes.name}>{name}</p>
      <p className={classes.number}>{number}</p>
      <button className={classes.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactItem;
