import { View, FlatList, ActivityIndicator } from 'react-native';
import useFetchData from '../hooks/useFetchData';
import Card from '../components/Card';

export default function ApiScreen() {
  const { data, loading } = useFetchData(
    'https://rickandmortyapi.com/api/character'
  );

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <FlatList
      data={data.results}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card
          title={item.name}
          image={item.image}
          description={item.species}
        />
      )}
    />
  );
}