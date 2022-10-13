import axios from "axios";
import React, { useEffect, useState } from "react";
import { arrowClose, arrowDown, arrowUp, search } from "../assets";
import {
  City,
  CloseButton,
  Container,
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
  SecondTitle,
  WrapperCapitals,
  CapitalLabel,
} from "./styles";
import DaysWeek from "./components/DaysWeek";

function App() {
  const width = window.screen.width;
  const [closeResult, setCloseResult] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [apiData, setApiData] = useState([]);
  const [capital1, setCapital1] = useState("")
  const [capital2, setCapital2] = useState("")
  const [capital3, setCapital3] = useState("")
  const [capital4, setCapital4] = useState("")
  const [capital5, setCapital5] = useState("")
  const [capital6, setCapital6] = useState("")
  const [capital7, setCapital7] = useState("")
  const [capital8, setCapital8] = useState("")
  const [capital9, setCapital9] = useState("")
  const [capital10, setCapital10] = useState("")

  const capitals1=
    {
      city1: "Rio de Janeiro",

      city2: "São Paulo",

      city3: "Belo Horizonte",

      city4: "Brasília",

      city5: "Belém",
    }
  const capitals2=
    {
      city6: "Salvador",

      city7: "Curitiba",

      city8: "Fortaleza",

      city9: "Manaus",

      city10: "João Pessoa",
    }

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputSearch}?unitGroup=metric&include=events%2Cdays%2Ccurrent&key=474YT95ZP6R8H5CMRL9BRHH5U&lang=pt&contentType=json`;
  const urlCapital1 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${capitals1.city1}?unitGroup=metric&include=events%2Cdays%2Ccurrent&key=474YT95ZP6R8H5CMRL9BRHH5U&lang=pt&contentType=json`;
  const urlCapital2 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${capitals1.city2}?unitGroup=metric&include=events%2Cdays%2Ccurrent&key=474YT95ZP6R8H5CMRL9BRHH5U&lang=pt&contentType=json`;
  const urlCapital3 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${capitals1.city3}?unitGroup=metric&include=events%2Cdays%2Ccurrent&key=474YT95ZP6R8H5CMRL9BRHH5U&lang=pt&contentType=json`;
  const urlCapital4 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${capitals1.city4}?unitGroup=metric&include=events%2Cdays%2Ccurrent&key=474YT95ZP6R8H5CMRL9BRHH5U&lang=pt&contentType=json`;
  const urlCapital5 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${capitals1.city5}?unitGroup=metric&include=events%2Cdays%2Ccurrent&key=474YT95ZP6R8H5CMRL9BRHH5U&lang=pt&contentType=json`;
  const urlCapital6 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${capitals2.city6}?unitGroup=metric&include=events%2Cdays%2Ccurrent&key=474YT95ZP6R8H5CMRL9BRHH5U&lang=pt&contentType=json`;
  const urlCapital7 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${capitals2.city7}?unitGroup=metric&include=events%2Cdays%2Ccurrent&key=474YT95ZP6R8H5CMRL9BRHH5U&lang=pt&contentType=json`;
  const urlCapital8 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${capitals2.city8}?unitGroup=metric&include=events%2Cdays%2Ccurrent&key=474YT95ZP6R8H5CMRL9BRHH5U&lang=pt&contentType=json`;
  const urlCapital9 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${capitals2.city9}?unitGroup=metric&include=events%2Cdays%2Ccurrent&key=474YT95ZP6R8H5CMRL9BRHH5U&lang=pt&contentType=json`;
  const urlCapital10 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${capitals2.city10}?unitGroup=metric&include=events%2Cdays%2Ccurrent&key=474YT95ZP6R8H5CMRL9BRHH5U&lang=pt&contentType=json`;







  const handleInputSearch = (e) => {
    setInputSearch(e.target.value);
  };

   async function handleWeatherDataRes (){
   await axios
      .get(url)
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          setInputSearch("")

        }
        setApiData(response?.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    setCloseResult(true);
  };


 function handleAllCapitals(){
     axios.get(urlCapital1).then((res)=> setCapital1(res))
     axios.get(urlCapital2).then((res)=> setCapital2(res))
     axios.get(urlCapital3).then((res)=> setCapital3(res))
     axios.get(urlCapital4).then((res)=> setCapital4(res))
     axios.get(urlCapital5).then((res)=> setCapital5(res))
     axios.get(urlCapital6).then((res)=> setCapital6(res))
     axios.get(urlCapital7).then((res)=> setCapital7(res))
     axios.get(urlCapital8).then((res)=> setCapital8(res))
     axios.get(urlCapital9).then((res)=> setCapital9(res))
     axios.get(urlCapital10).then((res)=> setCapital10(res))
  }

  function handleKeySearch (e){
    if (e.key === "Enter") {
      handleWeatherDataRes()
    }

  }


  useEffect(() => {
    handleAllCapitals()
    setCloseResult(false);
    width;
  }, []);


  return (
    <Container>
      <Title size={inputSearch && closeResult ? "2rem" : "4rem"}>
        Previsão do tempo
      </Title>
      <WrapperWeatherResult height={!closeResult ? "0px" : "300px"}>
        <WrapperCity>
          <City>{apiData?.resolvedAddress}</City>
          <CloseButton onClick={() => setCloseResult((prev) => !prev)}>
            <img src={arrowClose} alt="fechar" />
          </CloseButton>
        </WrapperCity>

        <WrapperWeatherData>
          <WrapperTemp>
            <Temp>
              {apiData?.currentConditions?.temp.toFixed()} ºC
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
                Vento &nbsp;
                <b>{apiData?.currentConditions?.windspeed.toFixed()}km/h</b>
              </span>
            </div>
            <div>
              <span>
                Sensação&nbsp;{" "}
                <b>{apiData?.currentConditions?.feelslike.toFixed()}º</b>
              </span>
              <span>
                Humidade &nbsp;
                <b>{apiData?.currentConditions?.humidity.toFixed()}%</b>
              </span>
            </div>
          </WeatherData>
        </WrapperWeatherData>
        <WrapperDaysWeek>
          <DaysWeek
            dataTemp={apiData?.days?.[1]}
            days={apiData?.days?.[1]?.datetimeEpoch}
          />
          <DaysWeek
            dataTemp={apiData?.days?.[2]}
            days={apiData?.days?.[2]?.datetimeEpoch}
          />
          <DaysWeek
            dataTemp={apiData?.days?.[3]}
            days={apiData?.days?.[3]?.datetimeEpoch}
          />
          <DaysWeek
            dataTemp={apiData?.days?.[4]}
            days={apiData?.days?.[4]?.datetimeEpoch}
          />
        </WrapperDaysWeek>
      </WrapperWeatherResult>

      <WrapperInputSearch>
        <div>
          <Input
            onChange={handleInputSearch}
            type="text"
            placeholder="Insira aqui o nome da cidade"
            value={inputSearch}
            onKeyDown={(e)=> handleKeySearch(e)}
          />
          <button onClick={handleWeatherDataRes} >
            <img src={search} alt="pesquisa" />
          </button>
        </div>
      </WrapperInputSearch>

      <SecondTitle>Capitais</SecondTitle>
      <WrapperCapitals>
        <div>
          <CapitalLabel>Min Máx</CapitalLabel>

          <span>{capital1?.data?.days[0]?.tempmin.toFixed()}º {capital1?.data?.days[0]?.tempmax.toFixed()}º &nbsp; {capital1?.data?.address}</span>
          <span>{capital2?.data?.days[0]?.tempmin.toFixed()}º {capital2?.data?.days[0]?.tempmax.toFixed()}º &nbsp; {capital2?.data?.address}</span>
          <span>{capital3?.data?.days[0]?.tempmin.toFixed()}º {capital3?.data?.days[0]?.tempmax.toFixed()}º &nbsp; {capital3?.data?.address}</span>
          <span>{capital4?.data?.days[0]?.tempmin.toFixed()}º {capital4?.data?.days[0]?.tempmax.toFixed()}º &nbsp; {capital4?.data?.address}</span>
          <span>{capital5?.data?.days[0]?.tempmin.toFixed()}º {capital5?.data?.days[0]?.tempmax.toFixed()}º &nbsp; {capital5?.data?.address}</span>

        </div>
        <div>
          <CapitalLabel display={width >= 900 ? "flex" : "none"}>
            Min Máx
          </CapitalLabel>
          <span>{capital6?.data?.days[0]?.tempmin.toFixed()}º {capital6?.data?.days[0]?.tempmax.toFixed()}º &nbsp; {capital6?.data?.address}</span>
          <span>{capital7?.data?.days[0]?.tempmin.toFixed()}º {capital7?.data?.days[0]?.tempmax.toFixed()}º &nbsp; {capital7?.data?.address}</span>
          <span>{capital8?.data?.days[0]?.tempmin.toFixed()}º {capital8?.data?.days[0]?.tempmax.toFixed()}º &nbsp; {capital8?.data?.address}</span>
          <span>{capital9?.data?.days[0]?.tempmin.toFixed()}º {capital9?.data?.days[0]?.tempmax.toFixed()}º &nbsp; {capital9?.data?.address}</span>
          <span>{capital10?.data?.days[0]?.tempmin.toFixed()}º {capital10?.data?.days[0]?.tempmax.toFixed()}º &nbsp; {capital10?.data?.address}</span>

        </div>
      </WrapperCapitals>
    </Container>
  );
}

export default App;
