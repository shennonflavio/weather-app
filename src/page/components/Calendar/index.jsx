import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { Container, Days, DaysWeek } from './styles';

function Calendario() {
    const [value, onChange] = useState(new Date());

  const months =[
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ]

  const daysWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];



  return (

  <Container>
     <Calendar onChange={onChange} value={value} />

  </Container>
    );
}

export default Calendario;
