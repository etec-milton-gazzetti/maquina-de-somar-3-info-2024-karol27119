import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Etec Professor Milton Gazzeti</Text>
      <Text style={styles.fonte}>3 ano</Text>
      <Text>Nós somos<Text style={styles.underline}> O 3 INFO</Text></Text>
      <StatusBar style="auto" />
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
  fonte: {
    fontStyle:'italic',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
