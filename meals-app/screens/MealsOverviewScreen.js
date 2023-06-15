import { View,Text,StyleSheet, FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({route}) => {

    const { categoryId } =route.params;

    const displayMEALS =MEALS.filter(mealItem => mealItem.categoryIds.indexOf(categoryId) >=0);

    const renderMealItems = (itemData) => {
        return <MealItem title={itemData.item.title}/>
    }

return <View style={style.container}>
    <FlatList data={displayMEALS} keyExtractor={(item) => item.id} renderItem={renderMealItems}/>
</View>
}

const style= StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }
})

export default MealsOverviewScreen;