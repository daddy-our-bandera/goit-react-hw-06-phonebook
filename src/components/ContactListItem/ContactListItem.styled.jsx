import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  width: 1500px;
  padding: 10px 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  justify-content: space-between;
  span {
  }
  button {
    border-radius: 5px;
    cursor: pointer;
    border: none;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    :hover,
    :focus {
      background-color: rgb(218, 70, 70);
    }
  }
`;
