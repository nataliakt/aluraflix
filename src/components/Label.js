import { Text, StyleSheet } from 'react-native';

export default function Label({ children, style }) {
  return <Text style={[styles.label, style]}>{ children }</Text>;
}

const styles = StyleSheet.create({
  label: {
    marginTop: 8,
    fontSize: 16,
  },
});
