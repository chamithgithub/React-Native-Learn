import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummytext}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.dummytext}>hello world !!</Text>
        <Button title='Click me'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummytext:{
    margin:16,
    borderWidth:3,
    color:'#f2f'
  }
});

