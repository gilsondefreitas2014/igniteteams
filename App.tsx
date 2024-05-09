import { useState } from "react";//para o tema
import { StatusBar, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';

import themeLight from './src/themeLight';//para o tema
import themeDark from './src/themeDark';

import { Groups } from '@screens/Groups';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  const [isThemeLight, setIsThemeLight] = useState(false);
  const handleButtonTheme = () => {
    setIsThemeLight(!isThemeLight);
  };

  return (
    <ThemeProvider theme={isThemeLight ? themeLight : themeDark}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded
      ?
        <View>
          <Groups />
          
          <TouchableOpacity
            style={styles.button}
            onPress={handleButtonTheme}
          >
            <Text style={styles.titulo}>
              {isThemeLight ? 'Altere o tema para "Dark"' : 'Altere o tema para "Light"'}
            </Text>

          </TouchableOpacity>

        </View>
      :
        <Loading />} 
    </ThemeProvider>
  );
}

//usei de teste para o tema
const styles = StyleSheet.create({  
  button: {
    alignItems: 'center',
    backgroundColor: '#0716B8',
    marginTop: 200,
    padding: 20,
  },
  titulo: {
    color:'#F2DA07',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',    
  }
});
