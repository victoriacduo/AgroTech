import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

import Login from './src/login/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./src/fonts/Poppins-Regular.otf'),
    'Poppins-Bold': require('./src/fonts/Poppins-Bold.otf'),
    'Poppins-ExtraBold': require('./src/fonts/Poppins-ExtraBold.otf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}