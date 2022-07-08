import { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function BuchErfassen({ navigation }) {
  const [isbn, setIsbn] = useState();
  const [buch, setBuch] = useState();

  const fetchDataBuch = async () => {
    try {
      const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn);
      if (response.ok) {
        const json = await response.json();
        setBuch(json.items[0]);
      } else {
        throw response;
      }
    } catch (e) {
      console.log(e);
    }
  }

  const buchErfassen = () => {
    fetchDataBuch();
  };

  useEffect(() => {
    if (buch !== undefined) {
      navigation.navigate("Detailansicht");
    }
  }, [buch]);

  return (
    <View style={styles.container}>
      <TextInput onChangeText={newIsbn => setIsbn(newIsbn)} keyboardType="numeric"></TextInput>
      <Button title="Buch erfassen" onPress={() => buchErfassen()}></Button>
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
