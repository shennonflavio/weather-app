import axios from "axios";
import React, { useState } from "react";
import { arrowClose, arrowDown, arrowUp, search } from "../assets";
import {
  City,
  CloseButton,
  Container,
  DaysWeek,
  Description,
  Input,
  Temp,
  Title,
  WeatherData,
  WrapperCity,
  WrapperDaysWeek,
  WrapperInputSearch,
  WrapperTemp,
  WrapperWeatherData,
  WrapperWeatherResult,
} from "./styles";

function App() {

  const [ closeResult, setCloseResult] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const url = "https://api.hgbrasil.com/weather?key=f1cb6a43&city_name=";


  const handleInputSearch =(e) =>{
    setInputSearch(e.target.value)
  }

  const handleWeatherDataRes =  () =>{

      axios.get(`${url}`+`${inputSearch}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }




  return (
    <Container>
      <Title>Previsão do tempo</Title>
      <WrapperWeatherResult height={closeResult ? "0px" : "320px"}>
        <WrapperCity>
          <City>Niterói, RJ - Brasil</City>
          <CloseButton onClick={()=>setCloseResult(prev => !prev)}>
            <img src={arrowClose} alt="fechar" />
          </CloseButton>
        </WrapperCity>

        <WrapperWeatherData>
          <WrapperTemp>
            <Temp>20ºC</Temp>
            <Description>Nublado</Description>
          </WrapperTemp>
          <WeatherData>
            <div>
              <span>
                <img src={arrowDown} alt="seta para baixo" />
                <b>&nbsp;16º</b>
                <img src={arrowUp} alt="seta para cima" />
                <b>&nbsp;25º</b>
              </span>
              <span>
                Vento &nbsp;<b>18km/h</b>
              </span>
            </div>
            <div>
              <span>
                Sensação&nbsp; <b>19º</b>
              </span>
              <span>
                Humidade &nbsp;<b>89%</b>
              </span>
            </div>
          </WeatherData>
        </WrapperWeatherData>
        <WrapperDaysWeek>
          <DaysWeek>
            <p>Terça</p>
            <span>16º&nbsp;26º</span>
          </DaysWeek>
          <DaysWeek>
            <p>Terça</p>
            <span>16º&nbsp;26º</span>
          </DaysWeek>
          <DaysWeek>
            <p>Terça</p>
            <span>16º&nbsp;26º</span>
          </DaysWeek>
          <DaysWeek>
            <p>Terça</p>
            <span>16º&nbsp;26º</span>
          </DaysWeek>
        </WrapperDaysWeek>
      </WrapperWeatherResult>

      <WrapperInputSearch>
        <div>
          <Input onChange={handleInputSearch} type="text" placeholder="Insira aqui o nome da cidade"/>
          <button onClick={handleWeatherDataRes}>

        <img src={search} alt="pesquisa" />
          </button>
        </div>

      </WrapperInputSearch>
    </Container>
  );
}

export default App;
