import { View ,Text,Image,StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";

const MealDetailScreen =({route}) =>{
   const mealId=route.params.mealId;

   const selectedModel =MEALS.find( meal=> meal.id ===mealId);

    return <View>
        <Image source={{uri :selectedModel.imageUrl}}/>
        <Text>{selectedModel.title}</Text>
        <View>
        <MealDetail 
            textStyle={styles.detailText}
            duration={selectedModel.duration}
            complexity={selectedModel.complexity}
            affordability={selectedModel.affordability}
            
        />
        </View>
    </View>
   
}
const styles=StyleSheet.create({
    detailText:{
        color:'white'
    }

})

export default MealDetailScreen;