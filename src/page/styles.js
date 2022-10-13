import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(254, 150, 0);
  background: linear-gradient(
    180deg,
    rgba(255, 127, 0, 1) 0%,
    rgba(255, 166, 0, 1) 90%,
    rgba(255, 186, 0, 1) 100%
  );
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 900px) {
    height: 100%;
    min-height: 100vh;
    overflow: auto;
  }
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 500px;
  text-align: left;
  height: fit-content;
  color: #fff;
  font-size: ${({ size }) => size};
  padding: 20px 30px;
  transition: 0.3s;
  @media (min-width: 900px) {
    margin-top: 30px;
    text-align: center;
    font-size: ${({ size }) => size};
    max-width: 700px;
  }
`;

export const SecondTitle = styled.h1`
  width: 100%;
  max-width: 500px;
  text-align: left;
  height: fit-content;
  color: #fff;
  font-size: 2.5rem;
  padding: 5px 0 0px 30px;
  transition: 0.3s;
`;

export const WrapperWeatherResult = styled.div`
  width: 100%;
  max-width: 500px;
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
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  display: flex;
  align-items: center;
  flex-direction: column;
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
  gap: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 0px 30px 40px;

  div {
    width: fit-content;
    height: 100%;
    display: flex;
    gap: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;

    span {
      width: 100%;
      font-size: 1rem;
      color: #505050;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: left;

      img {
        width: 24px;
        height: 20px;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #505050;
`;

export const WrapperDaysWeek = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
`;

export const WrapperInputSearch = styled.div`
  width: 100%;
  max-width: 550px;
  padding-bottom: 20px;
  height: 100px;
  border-bottom: 1px solid #fff;
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
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 35px;
      height: 35px;
    }
  }
`;

export const Input = styled.input`
  width: 80%;
  height: 100%;
  padding-left: 10px;
  font-size: 22px;
  outline: none;
  border: none;

  ::placeholder {
    font-size: 1.2rem;
    color: #999999;
  }
`;

export const WrapperCapitals = styled.div`
  width: 100%;
  max-width: 450px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-left: 30px;

  div {
    padding: 0;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    span {
      width: 100%;
      height: 35px;
      margin: 8px 0;
      font-weight: 600;
      color: #262626;
    }
  }
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const CapitalLabel = styled.label`
  color: #292929;
  font-weight: 400;
  margin: 20px 0;
  display: ${({ display }) => display};
`;
