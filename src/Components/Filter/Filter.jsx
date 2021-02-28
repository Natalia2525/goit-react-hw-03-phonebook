import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  title: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    marginBottom: 20,
  },
});
const Filter = ({ onChange, value }) => {
  const classes = useStyles();
  return (
    <label className={classes.title}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Filter;
