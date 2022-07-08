import AsyncStorage from '@react-native-async-storage/async-storage';
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

  const storeIsbn = async (value, isbn_nummer, daten_buch) => {
    try {
      let isbn_array;
      if (value !== "") {
        isbn_array = value.split(";");
      } else {
        isbn_array = [];
      }
      isbn_array.push(isbn_nummer);

      let isbn_string = "";
      for (let i = 0; i < isbn_array.length; i++) {
        isbn_string += isbn_array[i];
        if (i < (isbn_array.length - 1)) {
          isbn_string += ";"
        }
      }

      await AsyncStorage.setItem('isbn', isbn_string);
      await AsyncStorage.setItem(isbn_nummer, JSON.stringify(daten_buch));
    } catch (e) {
      console.log(e);
    }
  }

  const addNewIsbn = async (isbn_nummer, daten_buch) => {
    try {
      const value = await AsyncStorage.getItem('isbn');
      if (value !== null) {
        storeIsbn(value, isbn_nummer, daten_buch);
      } else {
        storeIsbn("", isbn_nummer, daten_buch);
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
      addNewIsbn(isbn, buch);
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
