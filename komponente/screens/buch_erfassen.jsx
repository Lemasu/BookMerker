import { StyleSheet, Text, View } from 'react-native';

export default function BuchErfassen() {
  return (
    <View style={styles.container}>
        <Text>Buch erfassen</Text>
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
