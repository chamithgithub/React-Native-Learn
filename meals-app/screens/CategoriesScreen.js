import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import {CATEGORIES} from "../data/dummy-data";



const CategoriesScreen =({navigation}) =>{

    const renderCategoryItems =(itemData) =>{
        const pressHandler =()=>{
            navigation.navigate("MealsOverviewScreen");
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
    }

    return <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={renderCategoryItems}
    numColumns={2}
    />
}

export default CategoriesScreen;