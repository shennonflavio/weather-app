import styled from "styled-components";

export const Container = styled.div``;

export const DayOfWeek = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 800;
    font-size: 1rem;
    color: #505050;
  }

  span {
    font-weight: 700;
    font-size: 0.9rem;
    color: #ff8207;
  }
`;
