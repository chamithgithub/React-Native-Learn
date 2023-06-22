import { View,Text,StyleSheet, FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({route}) => {

    const  catId =route.params.categoryId;

    const displayMeals =MEALS.filter(mealItem =>{
       return  mealItem.categoryIds.indexOf(catId) >=0
    });

    const renderMealItems = (itemData) => {
        const item =itemData.item;
        const mealItemProps ={
            id:item.id,
            title: item.title,
            ImageUrl: item.ImageUrl,
            complexity: item.complexity,
            affordability:item.affordability,
            duration:item.duration,
        }

        return <MealItem {...mealItemProps}/>
    }

        return <View style={style.container}>
                    <FlatList data={displayMeals} keyExtractor={(item) => item.id} renderItem={renderMealItems}/>
                </View>
}

const style= StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }
})

export default MealsOverviewScreen;