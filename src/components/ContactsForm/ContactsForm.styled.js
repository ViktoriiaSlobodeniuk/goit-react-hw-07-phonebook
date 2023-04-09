import styled from 'styled-components';
import { Form as FormicForm } from 'formik';
import { ErrorMessage as FormicMessage } from 'formik';
import { Field as FormicField } from 'formik';

export const Form = styled(FormicForm)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;

export const Field = styled(FormicField)`
  border: none;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 80px;
  margin-left: auto;
  padding: 4px;
  border: none;
  border-radius: 50px;
  color: white;
  background: linear-gradient(145deg, #e63e81, #ff4a99);
  transition: width 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    width: 120px;
  }
`;

export const ErrorMessage = styled(FormicMessage)`
  color: orangered;
`;
