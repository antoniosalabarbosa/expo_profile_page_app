import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';
import Home from "./src/pages/Home";

export default function App() {
  return (
    <View>
      <Header />
      <Home />

      {
        // <StatusBar style="auto" />
      }
    </View>
  );
};