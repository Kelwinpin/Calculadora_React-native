import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './home/HomeScreen.js';

export default function App() {
  return (

      <HomeScreen />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
