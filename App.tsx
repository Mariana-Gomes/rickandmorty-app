import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import theme from "@/theme";

import {
  useFonts,
  Rubik_600SemiBold,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

import { Loading } from "@/components/Loading";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Routes } from "@/routes";

const client = new QueryClient();

export default function App() {
  const [fontsLoader] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  if (__DEV__) {
    require("./ReactotronConfig");
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={"transparent"} translucent />
      <QueryClientProvider client={client}>
        {fontsLoader ? <Routes /> : <Loading />}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
