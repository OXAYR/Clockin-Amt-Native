import {createNativeStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/LoginScreen/Index';
import Home from '../Screens/HomeScreen/Index';
import {NavigationContainer} from '@react-navigation/native';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
