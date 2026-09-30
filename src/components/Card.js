import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card({ title, image, description }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#eee',
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: 150
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  }
});