import { Provider } from "react-redux";
import { Slot } from "expo-router";
import MainContextProvider from "../context/Maincontextprovider";

export default function RootLayout() {
  return (
    <MainContextProvider>
      <Slot />
    </MainContextProvider>
  );
}
