import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './screens/BasketScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen 
              name="Basket" 
              component={BasketScreen} 
              options={{ presentation: "modal", headerShown: false }}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>

      // <View className="flex-1 items-center justify-center bg-white">
      //   <Text className="text-red-600">Open up App.js to start working on your app!</Text>
      //   <StatusBar style="auto" />
      // </View>
  );
}
