import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const profiles = [
  { id: 1, name: 'Silvi Dian Pramana', info: '00000083585', image: require('./assets/silvi.jpg') },
  { id: 2, name: 'Shella Faulina', info: '00000079493', image: require('./assets/shella.jpg') },
  { id: 4, name: 'Kim Mingyu', info: '00000067857', image: require('./assets/mingyu.jpg') },
  { id: 5, name: 'Min Yoongi', info: '00000052638', image: require('./assets/yoongi.jpg') },
  { id: 5, name: 'New Thitipoom', info: '00000057392', image: require('./assets/newwie.jpg') },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Teman</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {profiles.map((profile) => (
          <View key={profile.id} style={styles.profileContainer}>
            <Image source={profile.image} style={styles.image} />
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.info}>{profile.info}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: 'gray',
  },
});