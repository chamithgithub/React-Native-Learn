import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View ,Text, Image} from "react-native";

const Home = ()=>{
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../assets/images/default_bg.png')} resizeMode='contain' style={{height:200}}/>
                </View>
                <View style={styles.container}>
                    <Text style={styles.myTitle}>Hello My App</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
    myTitle:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center'
    }
});

export default Home;