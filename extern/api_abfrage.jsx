export async function fetchDataBuch(isbn) {
    try {
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn);
        if (response.ok) {
            const json = await response.json();
            return await json.items[0];
        } else {
            throw response;
        }
    } catch (e) {
        console.log(e);
    }
}