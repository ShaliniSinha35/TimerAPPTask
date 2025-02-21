import { StyleSheet, Text, View,StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import AppNavigation from './navigation/AppNavigation';
import { ThemeProvider } from './Context/ThemeContext';

export default function App() {
  

  return (
    <ThemeProvider>
    <View style={styles.container}>

      <AppNavigation></AppNavigation>
    

  <StatusBar
        backgroundColor='white'
        barStyle={"dark-content"}
        translucent={false}
      />
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
