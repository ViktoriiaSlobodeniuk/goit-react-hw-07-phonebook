import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Label, Field } from './ContactsForm.styled';
import { Button, ErrorMessage } from './ContactsForm.styled';
import { schema } from './validSchema';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const initialValues = {
  name: '',
  number: '',
};

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (existingContact) {
      return alert(`${values.name} is already in contacts`);
    }

    dispatch(addContact({ ...values }));
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
