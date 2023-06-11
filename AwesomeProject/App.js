import { useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput} from 'react-native';

export default function App() {
 const[enteredGoalText,setEnteredGoalText]=useState('');
 const[CourseGoals,setCourseGoals]=useState([]);

 const goalInputHandeler = (enterdText) =>{
 setEnteredGoalText(enterdText);
 }

 const addGoalHandeler = () => {
  // console.log(enteredGoalText);
  setCourseGoals((currentCourseGoals) =>[...CourseGoals,enteredGoalText]);
 }

  return (
    <View style={styles.appContainer}>
       <View style={styles.inputContainer}> 
            <TextInput style={styles.textInput} placeholder='Your Course Goal'onChangeText={goalInputHandeler}/>
            <Button title='Add Goal' onPress={addGoalHandeler}/>
        </View>
        <View styles={styles.goalContainer}> 
           {
            CourseGoals.map((goal) => <Text style={styles.goalItem} key={goal}>{goal}</Text>)
           }
        </View> 
    </View>
  );

}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16
  },
  inputContainer:{
    felx:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:24,
    borderBottomWidth:1,
    borderColor:'#cccccc'
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    marginRight:8,
    padding:8
  },
  goalContainer:{
    flex :4,
  },
  goalItem:{
    margin:4,
    padding:8,
    color:'#ffff',
    borderRadius:10,
    backgroundColor:'#ee5665',

  }
});