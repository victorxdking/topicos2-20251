import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import UsersScreen from "./src/screens/UsersScreen";
import UniversitiesScreen from "./src/screens/UniversitiesScreen";
import BooksScreen from "./src/screens/BooksScreen";
import BookDetailsScreen from "./src/screens/BookDetailsScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function BooksStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Livros de Fantasia" component={BooksScreen} />
      <Stack.Screen name="Detalhes do Livro" component={BookDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Usuários" component={UsersScreen} />
        <Drawer.Screen name="Universidades" component={UniversitiesScreen} />
        <Drawer.Screen name="Livros" component={BooksStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
