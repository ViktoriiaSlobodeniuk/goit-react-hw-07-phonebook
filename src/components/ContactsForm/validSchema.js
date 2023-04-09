import * as yup from 'yup';

const patternName =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const messageName =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";

const patternNumber =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const messageNumber =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

export const schema = yup.object().shape({
  name: yup.string().required().matches(patternName, messageName),
  number: yup.string().required().matches(patternNumber, messageNumber),
});
