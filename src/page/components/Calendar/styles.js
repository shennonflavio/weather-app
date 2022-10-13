import styled from "styled-components";

export const Container = styled.div`
  width: 416px;
  height: 349px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

export const DaysWeek = styled.div`
  width: 100%;
  height: 35px;
  border: 1px solid red;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  span {
    border: 1px solid blue;
  }
`;

export const Days = styled.div`
  width: 100%;
  height: 35px;
  border: 1px solid green;
`;
