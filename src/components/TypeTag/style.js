import styled, { css } from "styled-components";

export const Type = styled.div`
  text-transform: capitalize;
  padding: 5px 10px;
  color: white;
  text-align: center;
  border-radius: 20px;
  font-size: 14px;
  margin-right: 5px;
  display: block;
  background-color: ${({ bgColor }) => bgColor};
  &:last-of-type {
    margin-right: 0px;
  }

  ${({ large }) =>
    large &&
    css`
      font-size: 18px;
      margin-right: 10px;
      padding: 10px 20px;
    `}
`;
