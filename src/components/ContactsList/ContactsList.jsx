import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { getContacts, getFilterValue } from 'redux/selectors';
import { List } from './ContactsList.styled';

export const ContactsList = () => {
  let contacts = useSelector(getContacts);
  const contactFilter = useSelector(getFilterValue);
  if (contactFilter.length) {
    const lowerCasedFilter = contactFilter.toLowerCase();
    contacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  }

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </List>
  );
};
