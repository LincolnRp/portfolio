import styled from "styled-components";

export const DivContainerContact = styled.div`
  margin-top: 8%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: white;
  }

  img {
    width: 28px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const DivIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 80%;
  padding-bottom: 1%;
`;
