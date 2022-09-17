import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(254, 150, 0);
  background: linear-gradient(
    180deg,
    rgba(255, 127, 0, 1) 0%,
    rgba(255, 166, 0, 1) 90%,
    rgba(255, 186, 0, 1) 100%
  );
`;

export const Title = styled.h1`
  width: 100%;
  height: fit-content;
  color: #fff;
  font-size: 2rem;
  padding: 20px 30px;
`;

export const WrapperWeatherResult = styled.div`
  width: 100%;
  height: ${({ height }) => height};
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 15px 0px rgb(234, 135, 0);
  overflow: hidden;
  white-space: nowrap;
  transition: 1s;
`;

export const WrapperCity = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px 15px 40px;
`;

export const City = styled.h3`
  color: #505050;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 30px;

  img {
    width: 35px;
    height: 35px;
  }
`;

export const WrapperWeatherData = styled.div`
  width: 100%;
  height: fit-content;
`;

export const WrapperTemp = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  padding-left: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const WeatherData = styled.div`
  width: 100%;
  height: fit-content;
  border-bottom: 2px solid #ff8207;
  display: flex;
  gap: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 40px;

  div {
    width: fit-content;
    height: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;

    span {
      width: 100%;
      font-size: 20px;
      color: #505050;
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Temp = styled.h1`
  font-size: 1.8rem;
  color: #505050;
`;

export const Description = styled.h1`
  font-size: 1.2rem;

  color: #505050;
`;

export const WrapperDaysWeek = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

export const DaysWeek = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 800;
    font-size: 20px;
    color: #505050;
  }

  span {
    font-weight: 700;
    font-size: 20px;
    color: #ff8207;
  }
`;

export const WrapperInputSearch = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 90%;
    height: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: transparent;
      border: none;
      outline: none;
    }

    img {
      width: 35px;
      height: 35px;
      margin-right: 20px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  font-size: 22px;

  outline: none;
  border: none;

  ::placeholder {
    font-size: 22px;
    color: #999999;
  }
`;
