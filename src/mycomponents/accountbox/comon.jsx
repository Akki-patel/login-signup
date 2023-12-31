import { styled } from "styled-components";

export const BoxContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: -40px;
`;

export const FormContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
font-size:12px;
color:rgba(200,200,200,9.0);
font-weight:500;
text-decoration:none;
font-family: 'Exo 2', sans-serif;
margin: 0 4px;
`;

export const BoldLink = styled.a`
font-size:13px;
color:rgb(63,94,251);
font-weight:500;
text-decoration:none;
font-family: 'Exo 2', sans-serif;
margin: 0 4px;
`;

export const Input = styled.input`
width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 15px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid  rgb(63,94,251);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);

  &:hover {
    filter: brightness(1.03);
  }
`;