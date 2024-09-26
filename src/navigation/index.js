import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/LoginScreen/Index';
import Home from '../Screens/HomeScreen/Index';
import {NavigationContainer} from '@react-navigation/native';

export const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
