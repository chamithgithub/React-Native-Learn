import { View ,Text,Image,StyleSheet,ScrollView } from "react-native";
import MealDetails from "../components/MealDetails";

import { MEALS } from "../data/dummy-data";
// import List from "../components/MealDetail/List";
// import Subtitle from "../components/MealDetails/Subtitle";
import { useLayoutEffect } from "react";


const MealDetailScreen =({route}) =>{
   const mealId=route.params.mealId;

   const selectedModel =MEALS.find( meal=> meal.id ===mealId);

   useLayoutEffect(()=>{
    navigation.setOption({
    headerRight:()=>{
        return <Button title="Tap  me!"/>
    }
    })
   },[navigation])

    return( <ScrollView styles={styles.rootContainer}>
        <Image style={styles.Image} source={{uri :selectedModel.imageUrl}}/>
        <Text style={styles.title}>{selectedModel.title}</Text>
        <View>
        <MealDetails
            textStyle={styles.detailText}
            duration={selectedModel.duration}
            complexity={selectedModel.complexity}
            affordability={selectedModel.affordability}
            
        />
        </View>
        <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List date={selectedModel.ingredients}/>
        <Subtitle>steps</Subtitle>
        <List date={selectedModel.steps} />
        </View>
        </View>
    </ScrollView>
    );
    }
const styles=StyleSheet.create({
    detailText:{
        color:'white'
    }

})

export default MealDetailScreen;