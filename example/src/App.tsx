import { Text, View, StyleSheet } from 'react-native';

import SystemSettings from 'react-native-system-settings-lite';

const brightness = SystemSettings.getBrightness();
const volume = SystemSettings.getVolume();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Brightness: {brightness}</Text>
      <Text>Volume: {volume}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
