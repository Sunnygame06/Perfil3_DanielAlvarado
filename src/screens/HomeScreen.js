import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daniel Alvarado</Text>
      <Text>Carnet: 20210133</Text>
      <Text>Sección: 2B</Text>

      <Button
        title="Ir a la API"
        onPress={() => navigation.navigate('API')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});