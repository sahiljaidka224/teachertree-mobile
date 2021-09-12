import "react-native-gesture-handler";

import { Navigation } from "./src/navigation";
import { Provider as PaperProvider } from "react-native-paper";
import React from "react";
import { StateProvider } from "./src/state/Context";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme/default";

export default function App() {
  return (
    <StateProvider>
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <Navigation />
          <StatusBar style="auto" />
        </PaperProvider>
      </ThemeProvider>
    </StateProvider>
  );
}
