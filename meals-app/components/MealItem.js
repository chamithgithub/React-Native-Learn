import { useNavigation } from "@react-navigation/native";
import { View,Text,Pressable,Image,StyleSheet, Platform  } from "react-native";
import MealDetail from "./MealDetail";

const MealItem =({id,title,imageUrl,complexity,affordability,duration}) => {

    const navigation =useNavigation();

    const selectMealItemHandeler =()=>{
        navigation.navigate("MealDetail" ,{mealId:id}) 
    };

    return(
        <View style={styles.MealItem}>
        <Pressable android_ripple={{color:"#ccc"}}
          onPress={selectMealItemHandeler}
        >
        <View>
        <View>
        <Image source={{uri:imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
        <MealDetail duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
        </Pressable>
        </View>
    );
};

const styles =StyleSheet.create({
    MealItem:{
        margin:8,
        borderRadius:8,
        overflow:Platform.OS === "android" ? "hidden" :"visible",
        backgroundColor:"white",
        elevation:4,
        shadowColor:"black",
        shadowOpacity:0.36,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,

    },
    innerContiner:{
        borderRadius:8,
        overflow:'hidden',
    },

    image:{
        width:"100%",
        height:200,
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8,
    },
    details:{
        flexDirection:'row',
        alignContent:'center',
        padding:8,
        justifyContent:'center',

    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12,
    },


    }
)

export default MealItem;
