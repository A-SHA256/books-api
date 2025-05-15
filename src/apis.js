const getBook = async (bookName) => {
    try {
        const res = await fetch(`https://openlibrary.org/search.json?title=${bookName}`);
        if (res.status !== 200) {
            throw new Error('oops');
        }
        return res.json();
    } catch(err) {
        console.error(err);
        return null;
    }
}

export default getBook;