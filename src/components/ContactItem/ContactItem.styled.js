import styled from 'styled-components';

export const Contact = styled.li`
  min-width: 210px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: linear-gradient(145deg, #e63e81, #ff4a99);
`;
export const ContactInfo = styled.div`
  display: flex;
  gap: 15px;
`;
export const Button = styled.button`
  cursor: pointer;
  padding-top: 4px;
  background-color: inherit;
  color: white;
  border: none;

  &:hover {
    color: red;
  }
`;
