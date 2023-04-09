import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import {
  Form,
  Label,
  Field,
  Button,
  ErrorMessage,
} from './ContactsForm.styled';
import { schema } from './validSchema';
import { getContacts } from 'redux/selectors';

const initialValues = {
  name: '',
  number: '',
};

export const ContactsForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (existingContact) {
      return alert(`${values.name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <Label htmlFor="name">
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </Label>

        <Label htmlFor="number">
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </Label>
        <Button type="submit">Create</Button>
      </Form>
    </Formik>
  );
};
