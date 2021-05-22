
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Inicios from "./app/screens/Inicio";
import Registros from "./app/screens/Registro";
import Validars from "./app/screens/Validar";
import Servicios from "./app/screens/Servicio";

export default function App() {
  return (
    <div>
      <Inicios />
      <Registros />
      <Servicios />
      <Validars />
    </div>
    

  );
}