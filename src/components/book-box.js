const createBook = (book = {}) => {
    const title = document.createElement('h1');
    title.innerText = book.title || 'Title';
    title.className = 'title';

    const author = document.createElement('h2');
    author.innerText = 'Author: ' + ((book.author_name && book.author_name.join(', ')) || 'Unknown');

    const publishYear = document.createElement('h2');
    publishYear.innerText = 'Published: ' + (book.first_publish_year || 'Unknown');

    const languages = document.createElement('h2');
    languages.innerText = 'Languages: ' + ((book.language && book.language.join(', ').toUpperCase()) || 'Unknown');

    const img = document.createElement('img');
    img.src = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://nftcalendar.io/storage/uploads/2022/02/21/image-not-found_0221202211372462137974b6c1a.png';
    img.alt = 'Image';

    const container = document.createElement('div');
    container.className = 'book-box';

    container.append(title, author, publishYear, languages, img);
    
    return container;
}

export default createBook;