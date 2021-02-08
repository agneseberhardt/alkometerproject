import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import {Picker} from '@react-native-community/picker';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1)
  return (
    <View style={styles.container}>
      <View>
     <Text>Weight</Text>
     <TextInput onChangeText={value => setWeight(value)} placeholder='weight' keyboardType='numeric'></TextInput>
     </View>
     <View>
     <Text>bottles</Text>
     <Picker
  selectedValue={bottles}
  style={{height: 50, width: 200}}
  onValueChange={(itemValue, itemIndex) =>
    setBottles({itemValue})
  }>
  <Picker.Item label="1 bottle" value={1} />
  <Picker.Item label="2 bottles" value={2} />
  <Picker.Item label="3 bottles" value={3} />
  <Picker.Item label="4 bottles" value={4} />
  <Picker.Item label="5 bottles" value={5} />
  <Picker.Item label="6 bottles" value={6} />
</Picker>
     </View>
     <View>
       <Text>Time</Text>
     <Picker
  selectedValue={time}
  style={{height: 50, width: 200}}
  onValueChange={(itemValue, itemIndex) =>
    setTime({itemValue})
  }>
  <Picker.Item label="1 hour" value={1} />
  <Picker.Item label="2 hours" value={2} />
  <Picker.Item label="3 hours" value={3} />
  <Picker.Item label="4 hours" value={4} />
  <Picker.Item label="5 hours" value={5} />
  <Picker.Item label="6 hours" value={6} />
</Picker>
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
});
