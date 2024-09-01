import styled from "styled-components";

export const CustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #407c66; 
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;

  max-width: 500px;
  width: 100%;

  &:hover {
    background-color: #5dc19c;
  }

  & > svg {
    margin-right: 0.5rem;
  }

  font-weight: 600;
`;
