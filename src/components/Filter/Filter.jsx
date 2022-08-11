import PropTypes from 'prop-types';
import './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter';

export const Filter = () => {
  const value = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const changeFilterInput = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={changeFilterInput}
        placeholder="Find contacts by name"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};
