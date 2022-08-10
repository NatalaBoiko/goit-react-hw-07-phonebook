import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/store';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  console.log(value);
  return (
    <>
      <button
        onClick={() => {
          dispatch(decrement(100));
        }}
      >
        decrement
      </button>
      {value}
      <button
        onClick={() => {
          dispatch(increment(100));
        }}
      >
        increment
      </button>
    </>
  );
};
