import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDeatailScreen';

const Stack =createNativeStackNavigator();

export default function App() {
  return (
    <> 
    <StatusBar style='light'></StatusBar>

    <NavigationContainer>
    <Stack.Navigator initialRouteName='MealsCategory' 
    screenOptions={{
      headerStyle:{backgroundColor :"#351401"},
      headerTintColor:'#fff',
      contentStyle:{backgroundColor:"#3f2f25"},
    }}>
    <Stack.Screen 
    name='MealsCategory'
    component={CategoriesScreen} 
    options={{
      title:"Meals Category "
      }}/>
    <Stack.Screen
     name='MealsOverviewScreen'
     component={MealsOverviewScreen}
     options={{
      title:"Meals Overview "
      }}/>
    <Stack.Screen
     name='MealDetail'
     component={MealDetailScreen}
     options={{
      title:"Meal Deatail ",
      headerRight:()=>{<Text> headerRight</Text>}
      }}/>  

    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});