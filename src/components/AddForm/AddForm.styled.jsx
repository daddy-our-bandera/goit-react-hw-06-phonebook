import styled from '@emotion/styled';

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  label {
    font-weight: 500;
  }
  input {
    width: 300px;
    padding: 5px;
    margin-bottom: 20px;
    font-size: 20px;
    
  }
   button{
        width: 100px;
        padding: 5px 0;
        cursor: pointer;
        font-size: 15px;
        border: none;
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
         rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, 
         rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
        background-color: transparent;
        border-radius: 5px;
        :hover, :focus {
            background-color: rgb(155, 164, 165);
           
        }
    }
  }
`;
