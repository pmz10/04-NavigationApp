import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen'
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import ProductsScreen from '../screens/products/ProductsScreen';
import ProductScreen from '../screens/products/ProductScreen';

//const Stack = createStackNavigator();

export type RootSctackParams = {
  Home: undefined;
  Product: {id: number, name: string },
  Products: undefined,
  Settings: undefined,
  Profile: undefined,
}

const Stack = createStackNavigator<RootSctackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent',
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name='Products' component={ProductsScreen} />
      <Stack.Screen name='Product' component={ProductScreen} />
    </Stack.Navigator>
  );
}