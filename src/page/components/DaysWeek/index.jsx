import React,{useMemo, useState } from "react";
import { DayOfWeek } from "./styles";

function DaysWeek({ dataTemp, days }) {
  const [day, setDay] = useState("");
  const daysWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const date = new Date(days * 1000);

  useMemo(()=>[
    Object.entries(daysWeek).forEach(([key,value])=>{
    if (Number(key) === date.getDay()) {
     return setDay(value)
    }
  })
  ],[days])

  return (
    <DayOfWeek>
      <p>{day}</p>

      <span>
        {dataTemp?.tempmin.toFixed()}º&nbsp;
        {dataTemp?.tempmax.toFixed()}º
      </span>
    </DayOfWeek>
  );
}

export default DaysWeek;
