import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStackScreen from './src/screens/navigation/AppStackScreen';
import LandingScreen from './src/screens/LandingScreen';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from './src/components/Context';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [password, setPassword] = React.useState(null);

  
  React.useEffect(() => {
    setPassword('')
  }, []);

  const authContext = React.useMemo(() => ({
    setPassword: async (password) => {
      setPassword(password);
      setIsLoading(false);
    },
}));

  return (
    <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          { password !== '' ? (
              <AppStackScreen/>
            )
          :
            <LandingScreen/>
          }
        </NavigationContainer>
    </AuthContext.Provider>
  );
}