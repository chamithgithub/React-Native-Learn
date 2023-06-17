import { View,Text,StyleSheet } from "react-native"
const MealDetail =({complexity,duration,affordability,style,textStyle})=>{
    return (
        <View style={[styles.details,style]}>
        <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
        <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}
const styles =StyleSheet.create({

    details:{
        flexDirection:'row',
        alignContent:'center',
        padding:8,
        justifyContent:'center',

    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12,
    }
})

export default MealDetail ;