import { View,Text,StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

const MealsOverviewScreen = ({route}) => {

    const { categoryId } =route.params;

    MEALS.filter(Meal =>Meal.categoryIds.indexOf(categoryId) >=0);
return <View style={style.container}>
    <Text>MealsOverviewScreen {categoryId}</Text>
</View>
}

const style= StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }
})

export default MealsOverviewScreen;