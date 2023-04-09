import { useDispatch } from 'react-redux';
import { Contact, Button, ContactInfo } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { AiOutlineDelete } from 'react-icons/ai';
export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Contact>
      <ContactInfo>
        <p>{name}</p>
        <p>{number}</p>
      </ContactInfo>

      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        <AiOutlineDelete />
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
