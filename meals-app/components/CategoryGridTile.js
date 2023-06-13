
import { Pressable, View ,Text,StyleSheet, Platform } from "react-native";

const CategoryGridTile = ({title,color,onPress}) =>{
return <View style={[styles.gridItem,{backgroundColor: color}]}>
        <Pressable android_ripple={{color:'#ccc'}} style={styles.Button} onPress={onPress}>
        <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text> 
        </View>
        </Pressable>
    </View>
}


const styles = StyleSheet.create({
    gridItem: {
        flex:1,
        height:150,
        margin:16,
        borderRadius:8,
        elevation:2,
        backgroundColor:'white',
        shadowColor:'black',
        shadowRadius:8,
        overflow: Platform.OS ==='android'?'hidden':'visible',
    },
    Button:{
        flex:1,
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center',
    },

    title:{
        fontWeight:'bold',
        fontSize:18,
    }
})
//fhgdasuhfgadfhi

export default CategoryGridTile;