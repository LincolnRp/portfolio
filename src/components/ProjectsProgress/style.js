import styled from "styled-components";
import progressCircle from "./../../assets/images/progress.png";

export const DivProjectsCircle = styled.div`
  background-image: url(${progressCircle});
  background-repeat: no-repeat;
  background-size: 180px;
  height: 30vh;
  width: 14%;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  p {
    color: white;
    font-weight: bold;
    font-size: 50px;
  }

  h4 {
    color: white;
    margin-bottom: -20%;
  }
`;

export const DivContainerProjctsProgress = styled.div`
  margin-top: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4%;
`;
