import dom from '../dom.js';
import getBook from '../apis.js';
import createBook from '../components/book-box.js';

const submitHandler = async (e) => {
    e.preventDefault();

    dom.error.innerHTML = '';
    dom.error.classList.remove('error');
    
    dom.output.innerHTML = '';

    const value = dom.input.value.trim().toLowerCase();
    console.log(value);
    const data = await getBook(value);
    if (!data) {
        if(!value) {
            dom.error.innerHTML = 'Please enter a name of the book';
            dom.error.classList.add('error');
        } else {
            dom.error.innerHTML = 'Something went wrong. Try again.';
            dom.error.classList.add('error');
        }
    } else {
        if (!data.numFound) {
            dom.error.innerHTML = "Sorry we didn't find this book";
            dom.error.classList.add('error');
        } else {
            data.docs.forEach(book => dom.output.appendChild(createBook(book)));
        }
    }  
}
    

export default submitHandler;