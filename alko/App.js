import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-community/picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {

  var radio_props = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ];



  const [weight, setweight] = useState('');
  const [time, settime] = useState(1);
  const [bottles, setbottles] = useState(1);
  const [gender, setgender] = useState('male');
  const [promiles, setpromiles] = useState(0);

  function calculate(){
    let promiles = 0;
    let liters = bottles * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = weight / 10;
    let gramsL = grams - burning * time;

    
    if (gender == 'male') {
      promiles = gramsL / (weight * 0.7);
     


    }else if (gender == 'female'){
      promiles = gramsL / (weight * 0.6);

    }
    setpromiles(promiles)
  }


  return (
    <View style={styles.top}>
      <View >
        <Text>Weight</Text>
        <TextInput  onChangeText={value => setweight(value)} placeholder="enter weight" keyboardType='numeric'></TextInput>
      </View>
      <View style={{ backgroundColor: '#fafafa' }}>
        <Text>Bottles</Text>
        <Picker
          selectedValue={bottles}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) =>
            setbottles(itemValue)
          }>
          <Picker.Item label="1 bottles" value={1}/>
          <Picker.Item label="2 bottles" value={2}/>
          <Picker.Item label="3 bottles" value={3}/>
          <Picker.Item label="4 bottles" value={4}/>
          <Picker.Item label="5 bottles" value={5}/>
          <Picker.Item label="6 bottles" value={6}/>
          <Picker.Item label="7 bottles" value={7}/>
          <Picker.Item label="8 bottles" value={8}/>
          <Picker.Item label="9 bottles" value={9}/>
          <Picker.Item label="10 bottles" value={10}/>
        </Picker>
      </View>

      <View style={{ backgroundColor: '#fafafa' }}>
        <Text >Time</Text>
        <Picker
          selectedValue={time}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) =>
            settime(itemValue)
          }>
          <Picker.Item label="1 hour" value={1}/>
          <Picker.Item label="2 hours" value={2}/>
          <Picker.Item label="3 hours" value={3}/>
          <Picker.Item label="4 hours" value={4}/>
          <Picker.Item label="5 hours" value={5}/>
          <Picker.Item label="6 hours" value={6}/>
          <Picker.Item label="7 hours" value={7}/>
          <Picker.Item label="8 hours" value={8}/>
          <Picker.Item label="9 hours" value={9}/>
          <Picker.Item label="10 hours" value={10}/>


        </Picker>
      </View>
      <View>
        <Text >gender</Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => setgender(value)}
        >
        </RadioForm>
      </View>

      <View>
        <Button
          title="calculate"
          onPress={calculate}
        />
      </View>
      <View>
        <Text>Promiles</Text>
        <Text>{promiles.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:10
  },
  top:{
    marginTop:100

  }
});