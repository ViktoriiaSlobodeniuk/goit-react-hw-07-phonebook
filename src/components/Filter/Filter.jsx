import { useDispatch } from 'react-redux';
import { filterValue } from 'redux/filterSlice';
import { Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onInput = e => {
    dispatch(filterValue(e.target.value));
  };

  return (
    <div>
      <Input
        type="text"
        name="filter"
        onInput={onInput}
        placeholder="Search by name..."
      />
    </div>
  );
};
