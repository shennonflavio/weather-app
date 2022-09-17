import axios from "axios";
import React, { useEffect, useState } from "react";
import { arrowClose, arrowDown, arrowUp, search } from "../assets";
import {
  City,
  CloseButton,
  Container,
  // DaysWeek,
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
import DaysWeek from "./components/DaysWeek";

function App() {

  const [ closeResult, setCloseResult] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [apiData, setApiData] = useState([])
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputSearch}?unitGroup=metric&include=events%2Cdays%2Ccurrent&key=474YT95ZP6R8H5CMRL9BRHH5U&lang=pt&contentType=json`;

  const handleInputSearch =(e) =>{
    setInputSearch(e.target.value)
  }
// console.log(apiData)

  const handleWeatherDataRes =  () =>{

        axios.get(url)
    .then(function (response) {
      // handle success
      setApiData(response?.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    setCloseResult(true)
  }


useEffect(()=>{
  setCloseResult(false)
},[])



  return (
    <Container>
      <Title>Previsão do tempo</Title>
      <WrapperWeatherResult height={!closeResult ? "0px" : "320px"}>
        <WrapperCity>
          <City>{apiData?.resolvedAddress}</City>
          <CloseButton onClick={()=>setCloseResult(prev => !prev)}>
            <img src={arrowClose} alt="fechar" />
          </CloseButton>
        </WrapperCity>

        <WrapperWeatherData>
          <WrapperTemp>
            <Temp>
              {apiData?.currentConditions?.temp.toFixed()} ºC
            {/* <img src={apiData?.currentConditions?.icon} alt="fechar" /> */}
            </Temp>
            <Description>{apiData?.currentConditions?.conditions}</Description>
          </WrapperTemp>
          <WeatherData>
            <div>
              <span>
                <img src={arrowDown} alt="seta para baixo" />
                <b>&nbsp;{apiData?.days?.[0]?.tempmin.toFixed()}º</b>
                <img src={arrowUp} alt="seta para cima" />
                <b>&nbsp;{apiData?.days?.[0]?.tempmax.toFixed()}º</b>
              </span>
              <span>
                Vento &nbsp;<b>{apiData?.currentConditions?.windspeed.toFixed()}km/h</b>
              </span>
            </div>
            <div>
              <span>
                Sensação&nbsp; <b>{apiData?.currentConditions?.feelslike.toFixed()}º</b>
              </span>
              <span>
                Humidade &nbsp;<b>{apiData?.currentConditions?.humidity.toFixed()}%</b>
              </span>
            </div>
          </WeatherData>
        </WrapperWeatherData>
        <WrapperDaysWeek>
          <DaysWeek dataTemp={apiData?.days?.[1]} days={apiData?.days?.[1]?.datetimeEpoch} />
          <DaysWeek dataTemp={apiData?.days?.[2]} days={apiData?.days?.[2]?.datetimeEpoch} />
          <DaysWeek dataTemp={apiData?.days?.[3]} days={apiData?.days?.[3]?.datetimeEpoch} />
          <DaysWeek dataTemp={apiData?.days?.[4]} days={apiData?.days?.[4]?.datetimeEpoch} />

          {/* <DaysWeek>
            <p>{date.getDate(apiData?.days?.[2]?.datetimeEpoch)}</p>
              <span>
              {apiData?.days?.[2]?.tempmin.toFixed()}º&nbsp;
              {apiData?.days?.[2]?.tempmax.toFixed()}º
              </span>
          </DaysWeek>
          <DaysWeek>
            <p>Terça</p>
              <span>
              {apiData?.days?.[3]?.tempmin.toFixed()}º&nbsp;
              {apiData?.days?.[3]?.tempmax.toFixed()}º
              </span>
          </DaysWeek>
          <DaysWeek>
            <p>Terça</p>
              <span>
              {apiData?.days?.[4]?.tempmin.toFixed()}º&nbsp;
              {apiData?.days?.[4]?.tempmax.toFixed()}º
              </span>
          </DaysWeek> */}
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
