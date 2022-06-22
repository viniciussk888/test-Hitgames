import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";

//routes
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import { Provider as PaperProvider } from "react-native-paper";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <AppRoutes />
        <StatusBar style="light" />
      </NavigationContainer>
    </PaperProvider>
  );
}
