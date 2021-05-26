import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Inicio from "../screens/Inicio";
import Registro from "../screens/Registro";
import Servicio from "../screens/Servicio";
import Validar from "../screens/Validar";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="inicio"
              component={Inicio}
              options={{ title: "Inicio" }}
            />
            <Tab.Screen
              name="registro"
              component={Registro}
              options={{ title: "Registro de Usuarios" }}
            />
            <Tab.Screen
              name="servicio"
              component={Servicio}
              options={{ title: "Inicio/Fin de Servicio" }}
            />
            <Tab.Screen
              name="validar"
              component={Validar}
              options={{ title: "Validar Usuario" }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      );
}