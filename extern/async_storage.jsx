import AsyncStorage from '@react-native-async-storage/async-storage';

export async function addNewBuch(isbn_nummer, daten_buch) {
    try {
        const value = await AsyncStorage.getItem('isbn');
        if (value !== null) {
            storeBuch(value, isbn_nummer, daten_buch);
        } else {
            storeBuch("", isbn_nummer, daten_buch);
        }
    } catch (e) {
        console.log(e);
    }
}

export async function getBuch(isbn_nummer) {
    const value = await AsyncStorage.getItem(isbn_nummer);
}

async function storeBuch(value, isbn_nummer, daten_buch) {
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