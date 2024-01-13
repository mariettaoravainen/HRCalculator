import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState(0);

  function calculate() {
    const ageNumber = Number(age);
    const lower = (220 - ageNumber) * 0.65;
    const upper = (220 - ageNumber) * 0.85;
    const result = `${lower.toFixed()}-${upper.toFixed()}`;
    setLimits(result);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.input} value={age} onChangeText={text => setAge(text)} 
      keyboardType='desimal-pad'/>
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{limits}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  }
});
