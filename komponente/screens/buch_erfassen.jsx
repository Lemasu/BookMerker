import { Button, StyleSheet, View } from 'react-native';

export default function BuchErfassen({ navigation }) {
  return (
    <View style={styles.container}>
        <Button title="Detailansicht" onPress={() => navigation.navigate("Detailansicht")}></Button>
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
