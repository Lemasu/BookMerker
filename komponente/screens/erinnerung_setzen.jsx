import { StyleSheet, Text, View } from 'react-native';

export default function ErinnerungSetzen() {
  return (
    <View style={styles.container}>
        <Text>Erinnerung setzen</Text>
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
});
