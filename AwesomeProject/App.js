import { StyleSheet, Text, View,Button, TextInput} from 'react-native';

export default function App() {

 // const goalInputHandeler = (enterdText) =>{
 // console.log(enterdText);
 // }

 // const addGoalHandeler = () => {

 // }

  // return (
  //   <View style={styles.appContainer}>
  //      <View style={styles.inputContainer}> 
  //           <TextInput style={styles.textInput} placeholder='Your Course Goal' onChange={goalInputHandeler}/>
  //           <Button title='Add Goal' onPress={addGoalHandeler}/>
  //       </View>
  //       <View styles={styles.goalContainer}> 
  //           <Text>List of Goals </Text>
  //       </View> 
  //   </View>
  // );

  return(

    <View style={{padding :50,flexDirection:'row',justifyContent:'center' }}>
    <View 
      style={{
        flex:1,
      backgroundColor :'red',
      width:100,
      height :100,
      justifyContent:'center',
      alignItems:'center'
      
      }}>
    <Text>1</Text>
    </View>
    <View 
      style={{
        flex:2,
      backgroundColor :'blue',
      width:100,
      height :100,
      justifyContent:'center',
      alignItems:'center'
      
      }}>
    <Text>2</Text>
    </View>
    <View 
      style={{
        flex:3,
      backgroundColor :'green',
      width:100,
      height :100,
      justifyContent:'center',
      alignItems:'center'
      
      }}>
    <Text>3</Text>
    </View>

    </View>
  )


}

const styles = StyleSheet.create({
  // appContainer:{
  //   flex:1,
  //   paddingTop:50,
  //   paddingHorizontal:16
  // },
  // inputContainer:{
  //   flex: 1,
  //   flexDirection:"row",
  //   justifyContent:"space-between",
  //   alignItems:"center",
  //   marginBottom:24,
  //   borderBottomWidth:1,
  //   borderColor:'#cccccc'
  // },
  // textInput:{
  //   // borderWidth:1,
  //   // borderColor:'#cccccc',
  //   width:'70%',
  //   marginRight:8,
  //   padding:8
  // },
  // goalContainer:{
  //   flex:4,
  // }
});