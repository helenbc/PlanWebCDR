import styled from "styled-components";

export const CustomButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  max-width: 200px;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }

  font-weight: 600;
`;
