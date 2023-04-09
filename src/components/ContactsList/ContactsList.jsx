import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import {
  getContacts,
  getError,
  getFilterValue,
  getIsLoading,
} from 'redux/selectors';
import { List } from './ContactsList.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  let contacts = useSelector(getContacts);
  const contactFilter = useSelector(getFilterValue);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  if (contactFilter.length) {
    const lowerCasedFilter = contactFilter.toLowerCase();
    contacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  }
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <List>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </List>
    </>
  );
};
