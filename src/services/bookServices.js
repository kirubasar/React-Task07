const bookServices = {
    getbooks: async()=>{
        const response = await fetch('/book.json')
        const books = await response.json();
        return books;
    }
}
export default bookServices;