import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../redux/filterSlice';

import './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        placeholder="Find contacts by name"
      />
    </label>
  );
};
