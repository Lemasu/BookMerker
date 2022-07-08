import { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { fetchDataBuch } from '../../extern/api_abfrage';
import { addNewBuch } from '../../extern/async_storage';

export default function BuchErfassen({ navigation }) {
  const [isbn, setIsbn] = useState();
  const [buch, setBuch] = useState();

  const buchHinzufuegen = async () => {
    const data = await fetchDataBuch(isbn);
    setBuch(data);
  }

  useEffect(() => {
    if (buch !== undefined) {
      addNewBuch(isbn, buch);
      console.log(buch);
      navigation.navigate("Detailansicht");
    }
  }, [buch]);

  return (
    <View style={styles.container}>
      <TextInput onChangeText={newIsbn => setIsbn(newIsbn)} keyboardType="numeric"></TextInput>
      <Button title="Buch erfassen" onPress={() => buchHinzufuegen()}></Button>
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
