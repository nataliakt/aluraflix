import { View, TextInput, StyleSheet } from "react-native";

import Label from "./Label";

export default function InputWithLabel({ label, value, onChangeText, placeholder }) {
  return <View>
    <Label>{ label }</Label>
    <TextInput 
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      selectTextOnFocus
    />
  </View>;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginTop: 4,
    borderRadius: 6,
    fontSize: 18,
  },
});